var initializePage = function initializePage(){
    // console.log($('#steps-taken-inner').html())
    $('#car-1').html(getRandomInt(40,60));
    $('#car-2').html(getRandomInt(40,60));
    $('#car-3').html(getRandomInt(40,60));
    $('#car-4').html(getRandomInt(40,60));
    $('#car-5').html(getRandomInt(40,60));
    $('#car-6').html(getRandomInt(40,60));
    $('#car-7').html(getRandomInt(40,60));
    $('#car-8').html(getRandomInt(40,60));



    // var challenges = [
    //     [1, '100 stairs in a day','Completed','5% discount on MTR ticket'],
    //     [2, '1000 stairs in a week','Pending','5% discount on MTR ticket'],
    //     [3, '8000W of energy saved','Incomplete','hi'],
    //     [4, 'Ranked top 10 among friends for 3 days','Pending','5% discount on MTR ticket'],
    //     [5, 'Completed daily goal for 10 days in a row','Completed','5% discount on MTR ticket']]
    // addChallenge(challenges);

    var interval = setInterval(function(){
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
        $('#car-1').html(getRandomInt(10,12));
        document.getElementById("car-1-box").setAttribute("style", "background-color: "+getColor($('#car-1').html()));
        // $('#car-3').html(getRandomInt(17,20));
        $('#car-4').html(getRandomInt(19,22));
        document.getElementById("car-4-box").setAttribute("style", "background-color: "+getColor($('#car-4').html()));
        $('#car-5').html(getRandomInt(19,22));
        document.getElementById("car-5-box").setAttribute("style", "background-color: "+getColor($('#car-5').html()));
        // $('#car-6').html(getRandomInt(17,20));
        // $('#car-7').html(getRandomInt(15,18));
        $('#car-8').html(getRandomInt(10,12));
        document.getElementById("car-8-box").setAttribute("style", "background-color: "+getColor($('#car-8').html()));

    },1000);

    setTimeout(function(){
        var interval_2 = setInterval(function(){
            // $('#car-1').html(getRandomInt(10,12));
            $('#car-2').html(getRandomInt(14,17));
            document.getElementById("car-2-box").setAttribute("style", "background-color: "+getColor($('#car-2').html()));
            $('#car-3').html(getRandomInt(17,20));
            document.getElementById("car-3-box").setAttribute("style", "background-color: "+getColor($('#car-3').html()));
            // $('#car-4').html(getRandomInt(20,23));
            // $('#car-5').html(getRandomInt(20,23));
            $('#car-6').html(getRandomInt(17,20));
            document.getElementById("car-6-box").setAttribute("style", "background-color: "+getColor($('#car-6').html()));
            $('#car-7').html(getRandomInt(14,17));
            document.getElementById("car-7-box").setAttribute("style", "background-color: "+getColor($('#car-7').html()));
            // $('#car-8').html(getRandomInt(10,12));
        },1000);
    }, 500);


}


initializePage();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColor(no){
    var temp = parseInt(no,10)
    if(temp>=20){
        return '#ff3300'
    } else if (temp<20 && temp>=15) {
        return '#ff9933'
    } else{
        return '#33cc33'
    }
}