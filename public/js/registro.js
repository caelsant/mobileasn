var now = new Date;

var dia = now.getDate();
var mes = now.getMonth();
var ano = now.getFullYear()

var h = now.getHours();
var m = now.getMinutes();
var s = now.getSeconds();
    var  idCabecalho = "";

    $("#salvar").click(function cabecalhos(){
        var cabecalho = JSON.stringify({
            "codigo": null,
            "chaveacessopedido": null,
            "datavenda": ano + "-" + mes + "-" + dia,
            "desconto": "0.00",
            "empresa": 1,
            "garcom": 1,
            "hora": h + ":" + m + ":" + s,
            "id_cliente": 1,
            "id_vendedor": 1,
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
            "totalvenda": sum
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
                $.getJSON("http://15.228.157.169:9091/api/cabecalho", function(data){
                    var tamanho = data.length;
                    idCabecalho = data[tamanho - 1].codigo + 1;
                    itens(idCabecalho);
                    localStorage.removeItem("ID");
                    localStorage.removeItem("VALOR");
                    localStorage.setItem("ID", '[1]')
                    localStorage.setItem("VALOR", '[20]')
                    window.location.reload();
                    produtosAdicionados()
                    window.location.replace("http://15.228.157.169:9091/end");
                })
            }
        })

     })


     function itens(cabecalho) {
        for (let i = 1; i < produtoID.length; i++) {
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
                "quantidade": "1.00",
                "sequencia": null,
                "servico": null,
                "situacao": null,
                "un": null,
                "valor": produtoValor[i],
                "valorap": "0.00",
                "valortotal": produtoValor[i]
            
                    })
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

     }    
    