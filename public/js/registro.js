var now = new Date;

var dia = now.getDate();
var mes = now.getMonth();
var ano = now.getFullYear()

var h = now.getHours();
var m = now.getMinutes();
var s = now.getSeconds();

var  idCabecalho = "";

$("#salvar").click(function cabecalhos(){
    var vendedor = localStorage.getItem("IdUser")
if(soma == 0){
    console.log("zerado");
}else{
    var cabecalho = JSON.stringify({
        "codigo": null,
        "chaveacessopedido": null,
        "datavenda": ano + "-" + mes + "-" + dia,
        "desconto": "0.00",
        "empresa": 1,
        "garcom": 1,
        "hora": h + ":" + m + ":" + s,
        "id_cliente": 1,
        "id_vendedor": vendedor,
        "numero_nfce": null,
        "numero_nfe": null,
        "numero_os": null,
        "numerodocaixa": "00",
        "obs": null,
        "operador": null,
        "placa": null,
        "prazo_entrega": null,
        "qrcodepedido": null,
        "situacao": "EM ANALISE",
        "tipo_pagamento": 1,
        "totalvenda": soma
})
    
    $.ajax({
        url: "http://15.228.157.169:9091/cabecalho",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: cabecalho,
        success: () => {
            console.log("Cadastrado");
        },
        error: (error) => {
        $.getJSON("http://15.228.157.169:9091/api/cabecalho", async function(data){
            var tamanho = data.length;
                idCabecalho = data[tamanho - 1].codigo;
                await itens(idCabecalho);
                //apagar();
            })
        }
    })
}


})


function itens(cabecalho) {



    for (let i = 0; i < produtoID.length; i++) {
        if(produtoID[i] == ""){

        }else{
            var item = JSON.stringify({
                "id": null,
                "acrescimo": "0.00",
                "cst_csosn": null,
                "datavenda": ano + "-" + mes + "-" + dia,
                "desconto": "0.00",
                "id_item": produtoID[i],
                "id_venda": idCabecalho,
                "impostoibtp": "0.00",
                "obs": "",
                "oe": null,
                "quantidade": produtoQuantidade[i],
                "sequencia": null,
                "servico": null,
                "situacao": null,
                "un": null,
                "valor": produtoValor[i],
                "valorap": "0.00",
                "valortotal": produtoValorTotal[i]
                
            })
        }
        

    $.ajax({
        url: "http://15.228.157.169:9091/itens",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: item,
        success: () => {
            console.log("Cadastrado");
        },
        error: (error) => {
            console.log("Feito");
        }
        })
    }
    $("#feito").show();
}    
    