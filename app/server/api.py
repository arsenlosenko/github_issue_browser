#!/usr/bin/env python3

import os
import json 
import requests
from datetime import datetime
from requests.auth import HTTPBasicAuth
from flask_restful import Resource, reqparse
       

class Issues(Resource):
    def get(self):
        return {"data" : "test"}
    
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('repo_name')
        args = parser.parse_args()
        if args['repo_name'] != " ":
            res = fetch_issues(args['repo_name'])
            avg_days = parse_response(res)
            return {"avg_days" : avg_days}
        else:
            print("Repo name is empty")
            return {"err": "repo_name is empty"}


def fetch_issues(repo_name):
    """Test of Github API connection"""
    request_url = 'https://api.github.com/repos/{}/issues?state=closed&per_page=100'.format(repo_name)
    res = requests.get(request_url, auth=HTTPBasicAuth('arsenlosenko', os.environ['GITHUB_PASS']))
    return res.text

def parse_response(response):
    data = json.loads(response)
    day_sum = 0
    for i in range(len(data)):
        if data[i]["state"] == "closed":
            closed = datetime.strptime(data[i]["closed_at"], "%Y-%m-%dT%H:%M:%S%fZ") 
            created = datetime.strptime(data[i]["created_at"], "%Y-%m-%dT%H:%M:%S%fZ")
            day_sum += abs((created - closed).days)

    avg = day_sum / len(data)
    return avg 

