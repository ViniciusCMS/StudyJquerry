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
            $("#bairro").html(response.bairro);
            $("#logradouro").html(response.logradouro);
            $("#cepTitulo").html("CEP: " + response.cep);
            $(".cep").show();
            /*document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;*/
        }

    })
};

$(function(){
    $(".cep").hide();
});

