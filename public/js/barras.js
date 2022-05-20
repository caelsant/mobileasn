
Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#camera')    // Or '#yourElement' (optional)
    },
    decoder : {
    readers: ['upc_reader', 'ean_reader'],
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });



Quagga.onDetected((data) => {
    var codigo = data.codeResult.code;
    mostrarProduto(codigo)
})



var codigoDeBarras = 0;

function mostrarProduto(params) {
    var output;
    $.getJSON("http://15.228.157.169:9091/api/produtos", function(data){
        var busca = $(data)
        .filter(function (i,n){
        return n.ean == params;
        });
        output += "<tr>";
        output += "<td style='width:15%'>" + busca[0].codigo + "</td>";
        output += "<td style='width:40%'>" + busca[0].nome + "</td>";
        output += "<td style='width:5%'>" + busca[0].valorvenda + "</td>";
        output += "<td style='width:30%' id='barras-quantidade'>"+ "<input class='quantidade' type='text' onchange='mudar()' value='1'>" + "</td>";
        output += "</tr>";
        $("#body-code-item").html(output);
        $("#codigo-barras-result").html(params);
        codigo = params
        $("#body-code-item").show();
        $("#codigo-barras-result").show();
        
})}

    $("#add-barras").click(() => {

        $.getJSON("http://15.228.157.169:9091/api/produtos", function(data){
            var busca = $(data)
            .filter(function (i,n){
            return n.ean == codigo;
            });
            if (typeof busca[0] == "undefined") {
                console.log("Sem resultado");
            }else{
                adicionar(Number(busca[0].codigo), Number(busca[0].valorvenda))
                $("#conteiner-camera").hide();
                $("#head").show();
                $("#body").show();
                $("#codigo-barras-result").hide();
                $("#body-code-item").hide();
                $("#codigo-barras-wait").show();
            }

        //adicionar(busca[0].codigo, busca[0].valorvenda);
    })})



// MOstrar e esconder

$(".barcode").click(() => {
    codigoDeBarras = 0;
    $("#conteiner-camera").show();
    $("#head").hide();
    $("#body").hide();
})

$("#out-barras").click(() => {
    $("#conteiner-camera").hide();
    $("#head").show();
    $("#body").show();
    $("#codigo-barras-result").hide();
    $("#body-code-item").hide();
    $("#codigo-barras-wait").show();

})