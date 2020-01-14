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