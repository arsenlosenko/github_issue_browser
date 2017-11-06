
import os
from flask import Flask
from flask_socketio import SocketIO


app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
app.config["DEBUG"] = True

socketio = SocketIO(app)
app.config.update(
    DEBUG=True,
    TEST=True,
    TEMPLATES_AUTO_RELOAD=True
)

@socketio.on('connect')
def handle_connect(data):
    print("Received data:", data)
    socketio.emit('response', data)


if __name__ == "__main__":
    print("Starting app...")
    socketio.run(app)

