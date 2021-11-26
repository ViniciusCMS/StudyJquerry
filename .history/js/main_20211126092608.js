function consultaCep() {
    var cep = document.getElementById("cep").value;
    alert(cep)
    $.ajax({
        url: "https://viacep.com.br/ws/46100000/json/",
        type: "GET",
        success: function(response){
            console.log(response);

        }

    })
}