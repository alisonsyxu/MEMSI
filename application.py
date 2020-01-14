from flask import Flask, render_template, url_for, jsonify, request
import json
import os
import io

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
    # out_df.to_csv("/var/www/Bigarm/Bigarm/data/"+initial_plan.date_crt.strftime('%d-%b-%Y')
    # v', index=False)
    with open("static/results.txt", "a") as myfile:
        # myfile.write("Train Mean Absolute Error = %.2f\n"%train_mae)
        myfile.write(data)

    return jsonify(data)

@app.route('/get_data', methods=['GET'])
def get_data():
    # testdata = {
    #     data:{
    #         dataSets: [{
    #             values: [{x: 1, y: 88},{x: 2, y: 77},{x: 3, y: 105},{x: 4, y: 135},{x: 5, y: 88},{x: 6, y: 77},{x: 7, y: 105},{x: 8, y: 135}],
    #             label: 'A',
    #         }, {
    #             values: [{x: 1, y: 90},{x: 2, y: 130},{x: 3, y: 100},{x: 4, y: 105},{x: 5, y: 90},{x: 6, y: 130},{x: 7, y: 100},{x: 8, y: 105}],
    #             label: 'B',
    #         }],
    #         }
    #     }

    testdata = 'test data'
    with open("static/results.txt", "a") as myfile:
        # myfile.write("Train Mean Absolute Error = %.2f\n"%train_mae)
        myfile.write(testdata)
    return jsonify(testdata)
