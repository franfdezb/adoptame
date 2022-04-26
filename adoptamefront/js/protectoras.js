var offset = 0;

$(document).ready(function(){
    obtainRefugeData();
});

function loadMoreAnimals(){
    offset = offset + 15;
    obtainRefugeData();
}

function obtainRefugeData() {

    $.ajax({
        url: "http://localhost:8080/refuge/getall/" + offset,
        method: "GET",
        contentType: "application/json",
        success: function(response){
            console.log(response);
            handleAnimalData(response);
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error con la comunicación de la BBDD");
        }
    });
}

function handleAnimalData(data){

    if(data.length < 15){
        $("#cargarmas").hide();
    }

    for(var i = 0; i<data.length; i++){
        var html = '';
        var u8 = new Uint8Array(data[i].photo1.data);
        var decoder = new TextDecoder('utf8');
        var b64encoded = btoa(decoder.decode(u8));
    
        //console.log(b64encoded)
        var fotodesencriptada = atob(b64encoded);
        //console.log(decodedStr)
    
        html += '<div class="responsive">\n';
        html += '<div class="gallery" style="text-align: center">\n';
        html += '<a target="_blank" href="protectora.php?id=' + data[i].id + '">\n';
        html += '<img src=' + '"' + fotodesencriptada + '"' + ' width="600" height="400">\n';
        html += '</a>\n';
        html += '<div class="desc" style="font-weight: bold; font-size: 26px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' + data[i].refugename + '</div>\n';
        html += '<div class="desc1" style="font-size: 20px;">Lugar: ' + data[i].city + '</div>\n';
        html += '<div>\n';
        html += '<a class="buttonperfilanimal" href="protectora.php?id=' + data[i].id + '" id="button" style="background-color: #F1C232 !important;display:block; margin: 0px !important;text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">MÁS INFO</a>';
        html += '</div>\n';
        html += '</div>\n';
        html += '</div>\n';

        $('#contenedorfotos').append(html);
        
    }


}