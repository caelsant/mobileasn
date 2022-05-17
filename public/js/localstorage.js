

const produtoID = [];
const produtoValor = [];
let sum = 0;

function adicionar(id, valor){
            var tamanhoArray = produtoID.length;

            if (tamanhoArray > 0) {
                produtoID[tamanhoArray] = id
                produtoValor[tamanhoArray] = valor;
                localStorage.setItem("ID", JSON.stringify(produtoID))
                localStorage.setItem("VALOR", JSON.stringify(produtoValor))
            } else {
                produtoID[tamanhoArray] = id
                produtoValor[tamanhoArray] = valor;
                localStorage.setItem("ID", JSON.stringify(produtoID))
                localStorage.setItem("VALOR", JSON.stringify(produtoValor))
            }

            $("#output-search").hide();
            $("#getSearch").show();

            produtosAdicionados()
    }

    function load(){
        const jsonItems = JSON.parse(localStorage.getItem('ID'))
        const jsonValores = JSON.parse(localStorage.getItem('VALOR'))
            for (let a = 0; a < jsonValores.length; a++) {
            produtoValor[a] = jsonValores[a];
            } 
            for (let a = 0; a < jsonItems.length; a++) {
            produtoID[a] = jsonItems[a];
            } 
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

            output += "<tr>";
            output += "<td>" + busca[0].codigo + "</td>";
            output += "<td>" + busca[0].nome + "</td>";
            output += "<td>01</td>";
            output += "<td>" + busca[0].valorvenda + "</td>";
            output += "</tr>";
    
            $("#tbody-get").html(output);
            })

        }
        soma();
    }

function apagar() {
    localStorage.removeItem("ID");
    localStorage.removeItem("VALOR");
    localStorage.setItem("ID", '[1]')
    localStorage.setItem("VALOR", '[20]')
    window.location.reload();
    produtosAdicionados()
}



function soma(){

for (let i = 1; i < produtoValor.length; i++) {
    sum += produtoValor[i];
}
$("#total-out").html("R$" + sum)
}






