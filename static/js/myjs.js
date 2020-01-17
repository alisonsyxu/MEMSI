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
            console.log(response);
        },
        error: function (error) {
            alert(error.message)
        }
    })
}


var updateData = function updateData(){
    var data1 = JSON.stringify({
        name:$('#steps-taken-inner').attr("id"),
        number:parseInt(document.getElementById('steps-taken-inner').value,10),
        string:"",
    })
    updateBackdoor(data1);
}

var updateBackdoor = function updateBackdoor(data){
    console.log(data);
    $.ajax({
        url: '/send_backdoor',
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        dataType: 'json',
        data: data,
        success: function (response) {
            console.log(response);

        },
        error: function (error) {
            alert(error.message)
        }
    })
}