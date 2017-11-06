
import os
import jinja2 
from flask import Flask, render_template 
from flask_socketio import SocketIO


app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
app.config["DEBUG"] = True
app.jinja_loader = jinja2.FileSystemLoader(os.getcwd() + '/client/src/')

socketio = SocketIO(app)
app.config.update(
    DEBUG=True,
    TEST=True,
    TEMPLATES_AUTO_RELOAD=True
)


@app.route('/')
def index():
    print("Entered")
    return render_template('index.html')


@socketio.on('connect')
def handle_connect(data):
    print("Received data:", data)
    socketio.emit('response', data)


def start_socket():
    print("Starting app...")
    socketio.run(app)

