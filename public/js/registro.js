// ao clicar em salvar primeiro ele vai criar um cabecalho com
 //ID
 //DATA VENDA
 //ID ITEM
 //ID VENDA
 //VALOR
 //VALOR TOTAL

    var  idCabecalho = "";

    $("#salvar").click(function cabecalhos(){
        var cabecalho = JSON.stringify({
            "codigo": null,
            "chaveacessopedido": null,
            "datavenda": "2000-01-01",
            "desconto": "0.00",
            "empresa": 1,
            "garcom": 1,
            "hora": "08:00:00",
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
            url: "http://15.228.157.169:9090/cabecalho",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: cabecalho,
            success: () => {
                console.log("Cadastrado");
            },
            error: (error) => {
                $.getJSON("http://15.228.157.169:9090/api/cabecalho", function(data){
                    var tamanho = data.length;
                    idCabecalho = data[tamanho - 1].codigo + 1;
                    itens(idCabecalho);
                    apagar();
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
                "datavenda": null,
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
                    url: "http://15.228.157.169:9090/itens",
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
    