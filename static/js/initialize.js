// OLD

var scenario=0;
var timeout7,timeout8,timeout9,timeout10,timeout11,timeout12,timeout13,loop;
var temp;


$('#time').html(new Date());
$('#box-1-name').html('Heart Rate');
$('#box-2-name').html('Vital Sign 2');
$('#box-3-name').html('Vital Sign 3');
$('#box-3-name').html('Vital Sign 4');


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColor(no){
    if (scenario == 6){
        return '#f44336'
    }
    var temp = parseInt(no,10)
    if(temp>=30){
        return '#f44336'
    } else if (temp<30 && temp>=15) {
        return '#ff9933'
    } else{
        return '#4CAF50'
    }
}