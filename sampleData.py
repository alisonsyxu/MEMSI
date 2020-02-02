import json
import random

def getSampleData():
    testdata = {
    "data":{
        "dataSets": [{
            "values": [{"x": 1, "y": random.randint(10,100)},{"x": 2, "y": random.randint(10,100)},{"x": 3, "y": random.randint(10,100)},{"x": 4, "y": random.randint(10,100)},{"x": 5, "y": random.randint(10,100)},{"x": 6, "y": random.randint(10,100)},{"x": 7, "y": random.randint(10,100)},{"x": 8, "y": random.randint(10,100)}],
            "label": 'A',
        }, {
            "values": [{"x": 1, "y": random.randint(10,100)},{"x": 2, "y": random.randint(10,100)},{"x": 3, "y": random.randint(10,100)},{"x": 4, "y": random.randint(10,100)},{"x": 5, "y": random.randint(10,100)},{"x": 6, "y": random.randint(10,100)},{"x": 7, "y": random.randint(10,100)},{"x": 8, "y": random.randint(10,100)}],
            "label": 'B',
        }],
        }
    }
    return testdata