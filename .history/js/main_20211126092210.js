function consultaCep() {
    $.ajax({
        url: "https://viacep.com.br/ws/46100000/json/",
        type: "GET",
        success: function(response){
            console.log(response);

        }

    })
}