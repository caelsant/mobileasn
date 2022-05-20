var quantidadeiNPUT = 1;

function mudar() {
    var box = document.querySelectorAll(".quantidade");
    box.forEach(element => {
        if(element.value > 1){
            quantidadeiNPUT = element.value;
            console.log("Mudou");
        }else{

        }
    });

    //quantidadeiNPUT = box[valor].value;
    //
}

$(document).ready(function(){
    $('#search').keyup(function(){

        if(!$(this).val()){
            $("#output-search").hide();
            $("#getSearch").show();
            
        } else{

            $("#output-search").show();
            $("#getSearch").hide();
            var search = $("#search").val().toLowerCase();;
            var regex = new RegExp(search, 'i');
            $.getJSON("http://15.228.157.169:9091/api/produtos", function(data){
            var output;

            for (let i = 0; i < data.length; i++) {
                if ((data[i].nome.search(regex) != -1) || (data[i].ean.search(regex) != -1)) {

                    output += "<tr>";
                    output += "<td id='"+ i +"'>" + data[i].codigo + "</td>";
                    output += "<td>" + data[i].nome + "</td>";
                    output += "<td>" + data[i].valorvenda + "</td>";
                    output += "<td>"+ "<input class='quantidade' type='number' onchange='mudar(" + ")' value='1'>" + "</td>";
                    output += "<td><button type='submit'" + "onclick='adicionar(" + Number(data[i].codigo) + "," + Number(data[i].valorvenda) +")'" + "><i class='fa-solid fa-plus'></i></button></td>";
                    output += "</tr>";

            }
                
            }


            /*
                $.each(data, function(key, value){
                    
                    if ((value.nome.search(regex) != -1) || (value.ean.search(regex) != -1)) {
                            output += "<tr>";
                            output += "<td id='"+ key +"'>" + value.codigo + "</td>";
                            output += "<td>" + value.nome + "</td>";
                            output += "<td>" + value.valorvenda + "</td>";
                            output += "<td>"+ "<input class='quantidade' type='text' value='1'>" + "</td>";
                            output += "<td><button type='submit'" + "onclick='adicionar(" + Number(value.codigo) + "," + Number(value.valorvenda) + ")'" + "><i class='fa-solid fa-plus'></i></button></td>";
                            output += "</tr>";
                    }
                    })

                    
                    var checkboxes = document.querySelectorAll('.quantidade');
                    for (let i = 0; i < checkboxes.length; i++) {
                        const element = checkboxes[i];
                        console.log(element.value);
                    }*/
                        $("#tbody").html(output);
                })
            }
    });
   
});