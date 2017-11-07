#!/usr/bin/env python3

from server.runsocket import socketio, app
from flask_restful import Resource, Api
from server.api import Issues

api = Api(app)
api.add_resource(Issues, '/api/v1/issues')


if __name__ == "__main__":
    socketio.run(app)
