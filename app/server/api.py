#!/usr/bin/env python3

import os
import requests
from requests.auth import HTTPBasicAuth
from flask_restful import Resource



class Issues(Resource):
    def get(self):
        return {"data" : "test"}



def fetch_user_data():
    """Test of Github API connection"""
    print("Sending request...")
    res = requests.get('https://api.github.com/user', auth=HTTPBasicAuth('arsenlosenko', os.environ['GITHUB_PASS']))
    print(res.text)


