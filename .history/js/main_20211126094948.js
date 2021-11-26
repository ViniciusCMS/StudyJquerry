function consultaCep() {

    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    console.log(url)

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);

            /*document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("ddd").innerHTML = response.ddd;*/
        }

    })
}