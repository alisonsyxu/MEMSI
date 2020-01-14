var initializePage = function initializePage(){
    // console.log($('#steps-taken-inner').html())
    $('#steps-taken-inner').text(50);
    $('#daily-goal-inner').text(50);
    $('#watts-saved-inner').text(50);
    $('#rank-in-friends-inner').text(1);
    $('#percentage-1').attr("value","20");
    $('#percentage-2').attr("value","60");
    $('#percentage-3').attr("value","90");

    var challenges = [
        [1, '100 stairs in a day','Completed','5% discount on MTR ticket'],
        [2, '1000 stairs in a week','Pending','5% discount on MTR ticket'],
        [3, '8000W of energy saved','Incomplete','hi'],
        [4, 'Ranked top 10 among friends for 3 days','Pending','5% discount on MTR ticket'],
        [5, 'Completed daily goal for 10 days in a row','Completed','5% discount on MTR ticket']]
    addChallenge(challenges);
}

var addChallenge = function addChallenge(challenges){
    var completed = '<span class="badge badge-success">Completed</span>';
    var pending = '<span class="badge badge-info">Pending</span>';
    var incomplete = '<span class="badge badge-warning">Incomplete</span>';

    var str = "";

    challenges.forEach(parseChallenges);

    function parseChallenges(item, index){
        var temp = item[2]=='Completed'?completed:item[2]=='Pending'?pending:incomplete;
        var line = '<tr><td>'+item[0]+'</td>'+
                    '<td>'+item[1]+'</td>'+
                    '<td>'+temp+'</td>'+
                    '<td>'+item[3]+'</td></tr>';
        str+=line;
    };
    $('#challenges-list').html(str);

}

var updateChart = function updateChart(new_data){ // matrix
    salesChart.data.datasets[0].data=new_data[0];
    salesChart.data.datasets[1].data=new_data[1];
    salesChart.update()
}

var getDataFromServer = function getDataFromServer(){
    $.ajax({
        url: '/post_data',
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        dataType: 'json',
        data: JSON.stringify({text:'hi'}),
        success: function (response) {
            if (!response.Error) {
                console.log(response);
            } else {
                alert(response.Msg)
            }
        },
        error: function (error) {
            alert(error.message)
        }
    })
}

initializePage();