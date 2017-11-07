
import os
import jinja2 
from flask import Flask, render_template , send_from_directory
from flask_socketio import SocketIO


# Initialize Flask app
app = Flask(__name__, static_folder='../client/src')

# Create SocketIO instance
socketio = SocketIO(app)

# Serve React App
@app.route('/')
def index():
    return "Test"

@socketio.on('connect')
def handle_connect(data):
    print("Received data:", data)
    socketio.emit('response', data)

