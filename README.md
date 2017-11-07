# github_issue_browser

### Start Flask app

0. Install python3, pip3 and virtualenv if you don't have it:
```bash
sudo apt-get install python3 python3-pip python3-virtualenv
``` 

1. Clone repository

```bash
git clone https://github.com/arsenlosenko/github_issue_browser.git
```
2. Go to `app/`:

```bash
cd gthub_issue_browser/app
```

3. Start virtualenv:

```bash
virtualenv -p python3 venv
source venv/bin/activate 
```

4. Download dependencies:

```bash
pip install -r requirements.txt
```

5. Export app name to environment:

```bash
export FLASK_APP=app.py
```

6. Start app

```bash
flask run
```

### Start React client

0. Go to `app/client/`:
```bash
npm i --save
```

1. Start Webpack:
```bash
npm start
```

2. Go to `localhost:4000` in your browser.


### User Manual

1. Login to your GitHub account
2. Enter repository URL and click Search
3. Click to particular issue for view comments
4. Enter your comment and click Send

### Hosting
Project is available on http://104.197.117.21:8000/