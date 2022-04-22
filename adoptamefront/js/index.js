$(document).ready(function(){
    obtainAnimalData();
});

function obtainAnimalData() {

    $.ajax({
        url: "http://localhost:8080/api/animal/",
        method: "GET",
        contentType: "application/json",
        success: function(response){
            //console.log(response);
            handleAnimalData(response);
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error con la comunicación de la BBDD");
        }
    });
}

function handleAnimalData(data){


    for(var i = 0; i<data.length; i++){
        var html = '';
        var u8 = new Uint8Array(data[i].photo1.data);
        var decoder = new TextDecoder('utf8');
        var b64encoded = btoa(decoder.decode(u8));
    
        //console.log(b64encoded)
        var fotodesencriptada = atob(b64encoded);
        //console.log(decodedStr)
    
        html += '<div class="responsive">\n';
        html += '<div class="gallery">\n';
        html += '<a target="_blank" href="animal.php?id=' + data[i].id + '">\n';
        html += '<img src=' + '"' + fotodesencriptada + '"' + ' width="600" height="400">\n';
        html += '</a>\n';
        html += '<div class="desc" style="font-weight: bold; font-size: 26px;">' + data[i].name + '</div>\n';
        html += '<div class="desc1" style="font-size: 20px;">Lugar: ' + data[i].address + '</div>\n';
        html += '<a class="buttonperfilanimal" href="animal.php?id=' + data[i].id + '" id="button" style="margin: 4px 54px !important;text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">MÁS INFO</a>';
        html += '</div>\n';
        html += '</div>\n';

        $('#contenedorfotos').append(html);
        
    }


}