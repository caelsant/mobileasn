const produtoID = [];
const produtoValor = [];
const produtoValorTotal = [];
const produtoQuantidade = [];
var soma = 0;


function adicionar(id, valor){

    var tamanhoArray = produtoID.length;

    if (tamanhoArray > 0) {
        produtoID[tamanhoArray] = id
        produtoValor[tamanhoArray] = valor;
        produtoQuantidade[tamanhoArray] = Number(quantidadeiNPUT);
        produtoValorTotal[tamanhoArray] = Number(valor * quantidadeiNPUT);
        localStorage.setItem("ID", JSON.stringify(produtoID))
        localStorage.setItem("VALOR", JSON.stringify(produtoValor))
        localStorage.setItem("Quantidade", JSON.stringify(produtoQuantidade))
        localStorage.setItem("ValorTotal", JSON.stringify(produtoValorTotal))
        } else {
        produtoID[tamanhoArray] = id
        produtoValor[tamanhoArray] = valor;
        produtoQuantidade[tamanhoArray] = Number(quantidadeiNPUT);
        produtoValorTotal[tamanhoArray] = Number(valor * quantidadeiNPUT);
        localStorage.setItem("ID", JSON.stringify(produtoID))
        localStorage.setItem("VALOR", JSON.stringify(produtoValor))
        localStorage.setItem("Quantidade", JSON.stringify(produtoQuantidade))
        localStorage.setItem("ValorTotal", JSON.stringify(produtoValorTotal))
        }
        quantidadeiNPUT = 1;
        $("#output-search").hide();
        $("#getSearch").show();
        
        produtosAdicionados();
}

function loading(){
        const jsonItems = JSON.parse(localStorage.getItem('ID'))
        const jsonValores = JSON.parse(localStorage.getItem('VALOR'))
        const jsonQuantidade = JSON.parse(localStorage.getItem('Quantidade'))
        const jsonValorTotal = JSON.parse(localStorage.getItem('ValorTotal'))
            for (let a = 0; a < jsonValores.length; a++) {
            produtoValor[a] = jsonValores[a];
            } 
            for (let a = 0; a < jsonItems.length; a++) {
            produtoID[a] = jsonItems[a];
            } 
            for (let a = 0; a < jsonItems.length; a++) {
            produtoQuantidade[a] = jsonQuantidade[a];
            } 
            for (let a = 0; a < jsonItems.length; a++) {
                produtoValorTotal[a] = jsonValorTotal[a];
            } 
            soma = 0;
            somas();
            produtosAdicionados()
}

function produtosAdicionados(){
    var output;
    
    for (let p = 0; p < produtoID.length; p++) {
        $.getJSON("http://15.228.157.169:9091/api/produtos", function(data){
        var busca = $(data)
        .filter(function (i,n){
        return n.codigo == produtoID[p];
        });
        if (typeof busca[0] == "undefined") {
        }else{
            output += "<tr>";
            output += "<td>" + busca[0].codigo + "</td>";
            output += "<td>" + busca[0].nome + "</td>";
            output += "<td>" + produtoQuantidade[p] + "</td>";
            output += "<td>" + produtoValorTotal[p].toFixed(2) + "</td>";
            output += "<td><button type='submit' class='remove'" + "onclick='remover(" + p + ")'" + ">-</button></td>";
            output += "</tr>";
            $("#tbody-get").html(output);
        }
        })
    }
    soma = 0;
    somas();
}

function remover(item) {
    delete produtoID[item]
    for (let i = 0;i  < produtoID.length; i++) {
        if (typeof produtoID[i] == "undefined") {
            produtoID[i] = ""
            produtoValor[i] = 0
            produtoValorTotal[i] = 0
            produtoQuantidade[i] = 0
            localStorage.setItem("ID", JSON.stringify(produtoID))
            localStorage.setItem("VALOR", JSON.stringify(produtoValor)) 
            localStorage.setItem("Quantidade", JSON.stringify(produtoValorTotal))    
            localStorage.setItem("ValorTotal", JSON.stringify(produtoQuantidade))  
        }
    }
    soma = 0;
    somas();
    window.location.reload();
}

function apagar() {
    localStorage.removeItem("ID");
    localStorage.removeItem("VALOR");
    localStorage.removeItem("Quantidade");
    localStorage.removeItem("ValorTotal");
    localStorage.setItem("ID", "['']")
    localStorage.setItem("VALOR", "[0]")
    localStorage.setItem("Quantidade", "[0]")
    localStorage.setItem("ValorTotal", "[0]")
    window.location.reload();
}

$("#feito-out").click(() => {
    $("#feito").hide();
    localStorage.removeItem("ID");
    localStorage.removeItem("VALOR");
    localStorage.removeItem("Quantidade");
    localStorage.removeItem("ValorTotal");
    window.location.reload();
})



 async function somas(){
    for (let i = 0; i < produtoValor.length; i++) {
        soma += produtoValorTotal[i];
    }
    $("#total-out").html("R$" + soma.toFixed(2))
}

