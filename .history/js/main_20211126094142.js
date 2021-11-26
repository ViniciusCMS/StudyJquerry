function consultaCep() {

    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    console.log(url)

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            document.getElementById("uf").innerHTML = response.uf
            document.getElementById("localidade").innerHTML = response.localidade
            document.getElementById("cep").innerHTML = response.cep
            document.getElementById("bairro").innerHTML = response.bairro
            document.getElementById("ddd").innerHTML = response.ddd
        }

    })
}