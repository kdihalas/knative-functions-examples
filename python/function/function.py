import uuid
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({'uuidv1': uuid.uuid1(),
                    'uuidv4': uuid.uuid4()})

application = app
