import totp from 'totp-generator';
import mv from 'mv';
import { sep } from 'path';
import { webhookFiles, webhookPayload } from './src/api/webhookFire/index.js';
import { webhook, pass32, ratelimitOnOff, time } from './src/settings.js';
import type { fileType, Requ, Resp } from './src/types/types.js';
import RateLimit from './src/api/ratelimit.js';
import api from './src/api/index.js';
import './src/anti-crash.js';

function authorized(key: string | undefined): boolean {
  //check if key is correct
  if (key && key === totp(pass32)) return true;
  return false;
}

function generateUniqueID(): string {
  //generate a unique id as a placeholder if the ip is unknown
  return Math.random().toString(36).substr(2);
}

function setStatus(res: Resp, code: number, text?: string): void {
  //respond to the request
  res.status(code).send(text || 'ok');
}

const Authorize = async (res: Resp, ip: string, type: 'file' | 'data') => {
  //respond with ok statuscode and console log that data/file has been sent
  setStatus(res, 200);
  console.log(`${time} Authorized IP: ${ip}, sent ${type} to webhook`);
};

const rateLimit = new RateLimit();
api.post('/', async (req: Requ, res: Resp) => {
  if (!req.fields && !req.files) return setStatus(res, 403);
  let ip = req.ip || req.header('x-forwarded-for') || req.socket.remoteAddress || generateUniqueID();
  ip = ip === '::1' ? '127.0.0.1' : ip;
  const key = req.headers.authorization;

  if (!authorized(key)) {
    //ratelimit if the authorization or request method is incorrect
    console.log(`${time} Denied IP: ${ip}, invalid authorization`);
    if (!ratelimitOnOff) return setStatus(res, 429);
    if (rateLimit.exist(ip)) return setStatus(res, 429);
    rateLimit.timeout(ip);
    console.log(`${time} Ratelimited IP: ${ip}`);
    return setStatus(res, 401);
  }
  /* if non-empty fields exist we send object to webhook and respond with 200 status code */
  if (req.fields && Object.keys(req.fields).length !== 0) {
    await webhookPayload({ hook: webhook, payload: req.fields });
    Authorize(res, ip, 'data');
  }
  /* if a file object was uploaded we check if its empty and send it to the webhook and respond with 200 status code */
  if (req.files && Object.keys(req.files).length !== 0) {
    // Went thru hell with this part, any help would be appriciated to make it better 😭
    let file: fileType = JSON.parse(JSON.stringify(req.files));
    for (const i in file) {
      file = file[i];
      break;
    }
    const newFilePath = file?.path.split(sep).slice(0, -1).join(sep) + sep + file.name;
    mv(file.path, newFilePath, function (err) {});
    await webhookFiles({ hook: webhook, file: newFilePath });
    Authorize(res, ip, 'file');
  }
});
