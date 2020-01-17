from flask import Flask, render_template, url_for, jsonify, request
import json
import os
import io
from pymongo import MongoClient
import mysql.connector
from mysql.connector import errorcode
from database import insert_data, read_data

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/backdoor')
def backdoor():
    return render_template('backdoor.html')

@app.route('/post_data', methods=['POST'])
def post_data():
    data = request.get_json()
    # text_input = data['text']

    return jsonify(data)

@app.route('/get_data', methods=['GET'])
def get_data():
    testdata = 'test data'
    with open("static/results.txt", "a") as myfile:
        # myfile.write("Train Mean Absolute Error = %.2f\n"%train_mae)
        myfile.write(testdata)
    return jsonify(testdata)

@app.route('/send_backdoor', methods=['POST'])
def send_backdoor():
    data = request.get_json()
    with open("static/results.txt", "a") as myfile:
        myfile.write(str(data)+'\n')
    name = data['name']
    number = data['number']
    string = data['string']
    results = insert_data((name,number,string))
    return results

@app.route('/get_backdoor', methods=['GET','POST'])
def get_backdoor():
    with open("static/results.txt", "a") as myfile:
        myfile.write('GET POST HERE\n')
    results = read_data()
    return results


