$(document).ready(function(){
    //Função de pesquisa
    $('#search').keyup(function(){
        if(!$(this).val()){
            $("#output-search").hide();
            $("#getSearch").show();
            
        } else{
            $("#output-search").show();
            $("#getSearch").hide();
            var search = $("#search").val().toLowerCase();;
            var regex = new RegExp(search, 'i');
            $.getJSON("http://192.168.0.104:1010/produtos", function(data){
            var output;
                $.each(data, function(key, value){
                    if ((value.nome.search(regex) != -1) || (value.ean.search(regex) != -1)) {
                            output += "<tr>";
                            output += "<td id='"+ key +"'>" + value.codigo + "</td>";
                            output += "<td>" + value.nome + "</td>";
                            output += "<td>" + value.valorvenda + "</td>";
                            output += "<td>01</td>";
                            output += "<td><button type='submit'" + "onclick='adicionar(" + value.codigo + "," + value.valorvenda + ")'" + "><i class='fa-solid fa-plus'></i></button></td>";
                            output += "</tr>";
                    }
                    })
                        $("#tbody").html(output);
                })
            }
    });

    //Função de captura quantidade e id
        //Ao clicar botao
            // - Pegar o id
            // - Pegar a quantidade
            //Adicionar o id e a quantidade numa variavel
        //Imprimir os id, na pagina inicial    
});