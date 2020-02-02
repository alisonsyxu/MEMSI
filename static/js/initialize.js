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

function emergency(){
    scenario = 6; // 0 is normal
}

function peakout(){
    scenario = 5; // 0 is normal
}

function peakin(){
    scenario = 4; // 0 is normal
}

function heavyout(){
    scenario = 3; // 0 is normal
}

function heavyin(){
    scenario = 2; // 0 is normal
}

function normalout(){
    scenario = 1; // 0 is normal
}

function normalin(){
    scenario = 0; // 0 is normal
}


        // $.ajax({
        //     url: '/get_backdoor',
        //     method: 'POST',
        //     headers: {
        //         'Content-Type':'application/json'
        //     },
        //     dataType: 'json',
        //     data: JSON.stringify({text:'hi'}),
        //     success: function (response) {
        //         console.log(response);
        //         if(response.length!=0){
        //             $('#'+response[response.length - 1][1]).html(response[response.length - 1][2]);
        //         }
        //     },
        //     error: function (error) {
        //         alert(error.message)
        //     }
        // })
