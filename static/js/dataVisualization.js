var testdata = {
    data:{
        dataSets: [{
            values: [{x: 1, y: 88},{x: 2, y: 77},{x: 3, y: 105},{x: 4, y: 135},{x: 5, y: 88},{x: 6, y: 77},{x: 7, y: 105},{x: 8, y: 135}],
            label: 'A',
          }, {
            values: [{x: 1, y: 90},{x: 2, y: 130},{x: 3, y: 100},{x: 4, y: 105},{x: 5, y: 90},{x: 6, y: 130},{x: 7, y: 100},{x: 8, y: 105}],
            label: 'B',
          }],
    }
};

$(function() {
    console.log('hi');

    $("#buttontest").on("click", function(e) {
        e.preventDefault();
  
        $.ajax({
            url: '/post_data',
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            dataType: 'json',
            data: JSON.stringify({text:testdata}),
            success: function(response) {
            console.log(response);
            }
        });
    });
})