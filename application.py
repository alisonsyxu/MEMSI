from flask import Flask, render_template, url_for, jsonify, request
import json

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

    testdata = {
        "data":{
            "dataSets": [{
                "values": [{"x": 1, "y": 88},{"x": 2, "y": 77},{"x": 3, "y": 105},{"x": 4, "y": 135},{"x": 5, "y": 88},{"x": 6, "y": 77},{"x": 7, "y": 105},{"x": 8, "y": 135}],
                "label": 'A',
            }, {
                "values": [{"x": 1, "y": 90},{"x": 2, "y": 130},{"x": 3, "y": 100},{"x": 4, "y": 105},{"x": 5, "y": 90},{"x": 6, "y": 130},{"x": 7, "y": 100},{"x": 8, "y": 105}],
                "label": 'B',
            }],
            }
        }

    # testdata = 'test data'

    return jsonify(testdata)
