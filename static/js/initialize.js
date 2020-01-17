// OLD

var scenario=0;
var timeout7,timeout8,timeout9,timeout10,timeout11,timeout12,timeout13,loop;
var temp;
var demo = function demo(){
    console.log("demo start");
    timeout7!=null?clearTimeout(timeout7):temp=1;
    timeout8!=null?clearTimeout(timeout8):temp=1;
    timeout9!=null?clearTimeout(timeout9):temp=1;
    timeout10!=null?clearTimeout(timeout10):temp=1;
    timeout11!=null?clearTimeout(timeout11):temp=1;
    timeout12!=null?clearTimeout(timeout12):temp=1;
    timeout13!=null?clearTimeout(timeout13):temp=1;
    loop!=null?clearTimeout(loop):temp=1;
    scenario=7;
    timeout7 = setTimeout(function(){ 
        scenario=8;
    }, 5000);
    timeout8 = setTimeout(function(){ 
        scenario=9;
    }, 10000);
    timeout9 = setTimeout(function(){ 
        scenario=10;
    }, 14000);
    timeout10 = setTimeout(function(){ 
        scenario=11;
    }, 27000);
    timeout11 = setTimeout(function(){ 
        scenario=12;
    }, 32000);
    timeout12 = setTimeout(function(){ 
        scenario=13;
    }, 34000);
    timeout13 = setTimeout(function(){ 
        scenario=14;
    }, 38000);
    loop = setTimeout(function(){ 
        demo()
    }, 43000);
}


var initializePage = function initializePage(){

    $('#time').html(new Date());

    // var challenges = [
    //     [1, '100 stairs in a day','Completed','5% discount on MTR ticket'],
    //     [2, '1000 stairs in a week','Pending','5% discount on MTR ticket'],
    //     [3, '8000W of energy saved','Incomplete','hi'],
    //     [4, 'Ranked top 10 among friends for 3 days','Pending','5% discount on MTR ticket'],
    //     [5, 'Completed daily goal for 10 days in a row','Completed','5% discount on MTR ticket']]
    // addChallenge(challenges);

    var interval = setInterval(function(){
        if(scenario==0){ // 5-10 normal coming
            $('#car-1').html(getRandomInt(5,7));
            $('#car-4').html(getRandomInt(8,10));
            $('#car-5').html(getRandomInt(8,10));
            $('#car-8').html(getRandomInt(5,7));
        } else if (scenario==1) { // normal leaving
            $('#car-1').html(getRandomInt(0,2));
            $('#car-4').html(getRandomInt(3,5));
            $('#car-5').html(getRandomInt(3,5));
            $('#car-8').html(getRandomInt(0,2));
        } else if (scenario==2){ // heavy coming
            $('#car-1').html(getRandomInt(15,18));
            $('#car-4').html(getRandomInt(27,30));
            $('#car-5').html(getRandomInt(27,30));
            $('#car-8').html(getRandomInt(15,18));
        } else if (scenario==3){ // heaving going
            $('#car-1').html(getRandomInt(5,8));
            $('#car-4').html(getRandomInt(17,20));
            $('#car-5').html(getRandomInt(17,20));
            $('#car-8').html(getRandomInt(5,8));
        } else if (scenario==4){ // peak coming
            $('#car-1').html(getRandomInt(35,38));
            $('#car-4').html(getRandomInt(47,50));
            $('#car-5').html(getRandomInt(47,50));
            $('#car-8').html(getRandomInt(35,38));
        } else if (scenario==5){ // peak going
            $('#car-1').html(getRandomInt(15,18));
            $('#car-4').html(getRandomInt(27,30));
            $('#car-5').html(getRandomInt(27,30));
            $('#car-8').html(getRandomInt(15,18));
        } else if (scenario==6){ // emergency
            $('#car-1').html('Emergency');
            $('#car-4').html('Emergency');
            $('#car-5').html('Emergency');
            $('#car-8').html('Emergency');
        } else if (scenario==7){ // 0-5
            $('#car-1').html(getRandomInt(16,27)); // y  (16,27) yellow
            $('#car-4').html(getRandomInt(16,27)); // y  (30,37) red
            $('#car-5').html(getRandomInt(16,27)); // y  (5,14) green
            $('#car-8').html(getRandomInt(5,14)); // g
        } else if (scenario==8){ // 6-`10
            $('#car-1').html(getRandomInt(5,14)); // g
            $('#car-4').html(getRandomInt(16,27)); // y
            $('#car-5').html(getRandomInt(5,14)); // g
            $('#car-8').html(getRandomInt(5,14)); // g
        } else if (scenario==9){ // 11-14
            $('#car-1').html(getRandomInt(5,14)); // g
            $('#car-4').html(getRandomInt(16,27)); // y
            $('#car-5').html(getRandomInt(16,27)); // y
            $('#car-8').html(getRandomInt(5,14)); // g
        } else if (scenario==10){ // 15-23
            $('#car-1').html(getRandomInt(16,27)); // y
            $('#car-4').html(getRandomInt(16,27)); // y
            $('#car-5').html(getRandomInt(16,27)); // y
            $('#car-8').html(getRandomInt(5,14)); // g
        } else if (scenario==11){ // 24-32
            $('#car-1').html(getRandomInt(16,27)); // y
            $('#car-4').html(getRandomInt(30,37)); // r
            $('#car-5').html(getRandomInt(30,37)); // r
            $('#car-8').html(getRandomInt(16,27)); // y
        } else if (scenario==12){ // 33-34
            $('#car-1').html(getRandomInt(5,14)); // g
            $('#car-4').html(getRandomInt(16,27)); // y
            $('#car-5').html(getRandomInt(16,27)); // y
            $('#car-8').html(getRandomInt(5,14)); // g
        } else if (scenario==13){ // 35-38
            $('#car-1').html(getRandomInt(5,14)); // g
            $('#car-4').html(getRandomInt(5,14)); // g
            $('#car-5').html(getRandomInt(5,14)); // g
            $('#car-8').html(getRandomInt(5,14)); // g
        } else if (scenario==14){ // 39-43
            $('#car-1').html(getRandomInt(5,14)); // g
            $('#car-4').html(getRandomInt(5,14)); // y
            $('#car-5').html(getRandomInt(5,14)); // g
            $('#car-8').html(getRandomInt(5,14)); // g
        } 
        

        document.getElementById("car-1-box").setAttribute("style", "background-color: "+getColor($('#car-1').html()));
        document.getElementById("car-4-box").setAttribute("style", "background-color: "+getColor($('#car-4').html()));
        document.getElementById("car-5-box").setAttribute("style", "background-color: "+getColor($('#car-5').html()));
        document.getElementById("car-8-box").setAttribute("style", "background-color: "+getColor($('#car-8').html()));
        


        $('#time').html(new Date());

    },1000);

    setTimeout(function(){
        var interval_2 = setInterval(function(){
            
            if(scenario==0){
                $('#car-2').html(getRandomInt(6,8));
                $('#car-3').html(getRandomInt(7,9));
                $('#car-6').html(getRandomInt(7,9));
                $('#car-7').html(getRandomInt(6,8));
            } else if (scenario==1) { // incoming // more
                $('#car-2').html(getRandomInt(1,3));
                $('#car-3').html(getRandomInt(2,4));
                $('#car-6').html(getRandomInt(2,4));
                $('#car-7').html(getRandomInt(1,3));
            } else if (scenario==2){ // outgoing
                $('#car-2').html(getRandomInt(19,22));
                $('#car-3').html(getRandomInt(23,26));
                $('#car-6').html(getRandomInt(23,26));
                $('#car-7').html(getRandomInt(19,22));
            } else if (scenario==3){ // outgoing
                $('#car-2').html(getRandomInt(9,12));
                $('#car-3').html(getRandomInt(13,16));
                $('#car-6').html(getRandomInt(13,16));
                $('#car-7').html(getRandomInt(9,12));
            } else if (scenario==4){ // outgoing
                $('#car-2').html(getRandomInt(39,42));
                $('#car-3').html(getRandomInt(43,46));
                $('#car-6').html(getRandomInt(43,46));
                $('#car-7').html(getRandomInt(39,42));
            } else if (scenario==5){ // outgoing
                $('#car-2').html(getRandomInt(19,22));
                $('#car-3').html(getRandomInt(23,26));
                $('#car-6').html(getRandomInt(23,26));
                $('#car-7').html(getRandomInt(19,22));
            } else if (scenario==6){ // outgoing
                $('#car-2').html('Emergency');
                $('#car-3').html('Emergency');
                $('#car-6').html('Emergency');
                $('#car-7').html('Emergency');
            } else if (scenario==7){ // outgoing
                $('#car-2').html(getRandomInt(30,37)); // r
                $('#car-3').html(getRandomInt(30,37)); // r
                $('#car-6').html(getRandomInt(16,27)); // y
                $('#car-7').html(getRandomInt(5,14)); // g
            } else if (scenario==8){ // outgoing
                $('#car-2').html(getRandomInt(5,14)); // g
                $('#car-3').html(getRandomInt(16,27)); // y
                $('#car-6').html(getRandomInt(5,14)); // g
                $('#car-7').html(getRandomInt(5,14)); // g
            } else if (scenario==9){ // outgoing
                $('#car-2').html(getRandomInt(16,27)); // y
                $('#car-3').html(getRandomInt(16,27)); // y
                $('#car-6').html(getRandomInt(16,27)); // y
                $('#car-7').html(getRandomInt(5,14)); // g
            } else if (scenario==10){ // outgoing
                $('#car-2').html(getRandomInt(16,27)); // y
                $('#car-3').html(getRandomInt(16,27)); // y
                $('#car-6').html(getRandomInt(16,27)); // y
                $('#car-7').html(getRandomInt(16,27)); // y
            } else if (scenario==11){ // outgoing
                $('#car-2').html(getRandomInt(16,27)); // y
                $('#car-3').html(getRandomInt(30,37)); // r
                $('#car-6').html(getRandomInt(30,37)); // r
                $('#car-7').html(getRandomInt(30,37)); // r
            } else if (scenario==12){ // outgoing
                $('#car-2').html(getRandomInt(5,14)); // g
                $('#car-3').html(getRandomInt(16,27)); // y
                $('#car-6').html(getRandomInt(16,27)); // y
                $('#car-7').html(getRandomInt(16,27)); // y
            } else if (scenario==13){ // outgoing
                $('#car-2').html(getRandomInt(5,14)); // g
                $('#car-3').html(getRandomInt(5,14)); // g
                $('#car-6').html(getRandomInt(5,14)); // g
                $('#car-7').html(getRandomInt(5,14)); // g
            } else if (scenario==14){ // outgoing
                $('#car-2').html(getRandomInt(5,14)); // g
                $('#car-3').html(getRandomInt(5,14)); // y
                $('#car-6').html(getRandomInt(5,14)); // g
                $('#car-7').html(getRandomInt(5,14)); // g
            } 
        

            document.getElementById("car-2-box").setAttribute("style", "background-color: "+getColor($('#car-2').html()));
            document.getElementById("car-3-box").setAttribute("style", "background-color: "+getColor($('#car-3').html()));
            document.getElementById("car-6-box").setAttribute("style", "background-color: "+getColor($('#car-6').html()));
            document.getElementById("car-7-box").setAttribute("style", "background-color: "+getColor($('#car-7').html()));
        
            
            $('#time').html(new Date());

        },1000);
    }, 500);


}

demo()
initializePage();

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
