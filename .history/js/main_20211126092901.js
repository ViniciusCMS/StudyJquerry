function consultaCep() {

    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    alert(url)
    
    $.ajax({
        url: "https://viacep.com.br/ws/46100000/json/",
        type: "GET",
        success: function(response){
            console.log(response);

        }

    })
}