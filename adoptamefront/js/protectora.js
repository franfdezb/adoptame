const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));
var refugeuserid = null;

 $(document).ready(function(){
    obtainRefugeData();
});

function obtainRefugeData() {

    $.ajax({
        url: "http://localhost:8080/refuge/" + id,
        method: "GET",
        contentType: "application/json",
        success: function(response){
            console.log(response);
            refugeuserid = response.userid;
            handleRefugeData(response);
            checkIfUserOwner(response);
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al buscar el refugio");
        }
    });
}

function checkIfUserOwner(data){
    if(data.userid == localStorage.userId){
        $("#buttoneditar").html("EDITAR")
        $("#buttoneliminar").html("ELIMINAR")
        $('#buttoneliminar').attr('onclick', 'eliminar()');

        $('#buttoneditar').attr('href','editarprotectora.php?id=' + id);
    }else{
        $("#buttoneditar").remove();
        $("#buttoneliminar").remove();

    }
}

function handleRefugeData(data){
    //console.log(data);

    var u8 = new Uint8Array(data.photo1.data);
    var decoder = new TextDecoder('utf8');
    var b64encoded = btoa(decoder.decode(u8));

    //console.log(b64encoded)
    var fotodesencriptada = atob(b64encoded);
    //console.log(decodedStr)

    $("#primeraimagen").attr('src', fotodesencriptada);

    $("#name").html("<b>" + data.refugename.toUpperCase() + "</b>");

    //--------------------------

    $("#lugar").append("<b>" + data.city + "</b>");
    $("#address").append("<b>" + data.address + "</b>");
    
    $("#masinfo").html("Información adicional: " + data.moreinfo);

    //--------------------------

    $("#email").append(data.email);
    $("#telephone").append(data.telephone);

    if(data.paypal == ''){
        $("#donaciones").remove();
    }else{
        $("#donar").html("Si quieres apoyar a esta protectora, puedes donar a este e-mail de PayPal:")
        $("#emailpaypal").append(data.paypal)
    }


}

function obtainAnimalData() {

    $.ajax({
        url: "http://localhost:8080/animal/getallbyid/" + refugeuserid,
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

    $("#buttonver").removeAttr("onclick");
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
        html += '<div class="gallery" style="text-align: center">\n';
        html += '<a target="_blank" href="animal.php?id=' + data[i].id + '">\n';
        html += '<img src=' + '"' + fotodesencriptada + '"' + ' width="600" height="400">\n';
        html += '</a>\n';
        html += '<div class="desc" style="font-weight: bold; font-size: 26px;">' + data[i].name + '</div>\n';
        html += '<div class="desc1" style="font-size: 20px;">Lugar: ' + data[i].address + '</div>\n';
        html += '<div>\n';
        html += '<a class="buttonperfilanimal" href="animal.php?id=' + data[i].id + '" id="button" style="background-color: #F1C232 !important;display:block; margin: 0px !important;text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">EN ADOPCIÓN</a>';
        html += '</div>\n';
        html += '</div>\n';
        html += '</div>\n';

        $('#contenedorfotos').append(html);
        
    }


}

function eliminar(){
    Swal.fire({
        title: '¿Estás seguro de que quieres eliminar este refugio?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#F1C232',
        confirmButtonText: 'SÍ',
        cancelButtonText: 'CANCELAR'
      }).then((result) => {
        if (result.isConfirmed) {
            modalEliminar();
            $.ajax({
                url: "http://localhost:8080/api/refuge/" + id,
                method: "DELETE",
                contentType: "application/json",
                headers: {
                    'x-access-token': getToken(),
                },
                success: function(response){

                },
                error: function(response) {
                    console.log(response);
                    alert("Ha habido un error al buscar el refugio");
                }
            });


        }
      })
}

function modalEliminar(){
    Swal.fire({
        title: 'Perfil de refugio/protectora eliminado',
        imageUrl: 'images/logocirculo.png',
        imageWidth: 150,
        imageAlt: 'Custom image',
        confirmButtonColor: '#F1C232'
    }).then(function(){
        window.location.href = "index.php"
    })
}


