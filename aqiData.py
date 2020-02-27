import json
import random
import urllib
from urllib.request import urlopen

def getAQIData():
    link = "https://api.waqi.info/feed/@2560/?token=b767f33862f2cdfcbd3348e13df74eebbfd6e851"
    f = urlopen(link)
    myfile = f.read()

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
    return json.loads(myfile)