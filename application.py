from flask import Flask, render_template, url_for, jsonify, request
import json
from sampleData import getSampleData

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/post_data', methods=['POST'])
def post_data():
    data = request.get_json()
    text_input = data['text']
    return jsonify(text_input)

@app.route('/get_data', methods=['GET'])
def get_data():
    testdata = getSampleData()

    # testdata = 'test data'

    return jsonify(testdata)
