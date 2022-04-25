const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));

 // http://localhost:8080/api/animal/

 $(document).ready(function(){
    obtainAnimalData();
});

function obtainAnimalData() {

    $.ajax({
        url: "http://localhost:8080/api/animal/" + id,
        method: "GET",
        contentType: "application/json",
        success: function(response){
            checkIfUserOwner(response);
            handleAnimalData(response);
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al buscar el animal");
        }
    });
}

function checkIfUserOwner(data){
    if(data.userid == localStorage.userId){
        $("#buttonadoptar").html("EDITAR")
        $("#buttonapadrinar").html("ELIMINAR")
        $("#buttonsolicitudes").html("SOLICITUDES DE ADOPCIÓN")

        $('#buttonapadrinar').attr('onclick', 'eliminar()');

        $('#buttonadoptar').attr('href','editaranimal.php?id=' + id);
        $('#buttonsolicitudes').attr('href','solicitudesanimal.php?id=' + id);
    }else{
        $("#buttonadoptar").html("¡ADÓPTAME!")
        $("#buttonapadrinar").remove()

        $('#buttonapadrinar').attr('onclick', 'menuapadrinar()');

        $('#buttonsolicitudes').remove();
        $('#buttonadoptar').attr('href','adoptaranimal.php?id=' + id);
    }
}

function handleAnimalData(data){
    //console.log(data);

    var u8 = new Uint8Array(data.photo1.data);
    var decoder = new TextDecoder('utf8');
    var b64encoded = btoa(decoder.decode(u8));

    //console.log(b64encoded)
    var fotodesencriptada = atob(b64encoded);
    //console.log(decodedStr)

    $("#primeraimagen").attr('src', fotodesencriptada);

    $("#name").html("Nombre: <b>" + data.name.toUpperCase() + "</b>");
    $("#gender").html("Sexo: " + data.gender);
    $("#especie").html("<b>· Especie: </b>" + data.specie);
    if(data.raze == ''){
        $("#raza").html("<b>· Raza:</b> Desconocida");
    }else{
        $("#raza").html("<b>· Raza: </b>" + data.raze);
    }
    $("#fecha").html("<b>· Fecha nacimiento: </b>" + data.age);
    $("#tamaño").html("<b>· Tamaño: </b>" + data.size);
    $("#peso").html("<b>· Peso: </b>" + data.weight + "kg");

    //--------------------------

    if(data.adoptionStatus == false){
        $("#adoptionStatus").append("<b>" + "EN ADOPCIÓN" + "<b>")
    }else{
        $("#adoptionStatus").append("<b>" + "ADOPTADO" + "<b>")
    }

    $("#lugar").append("<b>" + data.address + "</b>");
    
    $("#masinfo").html("Información adicional: " + data.moreinfo);

    //--------------------------

    if(data.vaccinated == true){
        $('#vacunado').append('<img src="/images/tickverde.png" style="width:30px;height:30px;" />')
    }else{
        $('#vacunado').append('<img src="/images/tickrojo.png" style="width:30px;height:30px;" />')
    }
    if(data.dewormed == true){
        $('#desparasitado').append('<img src="/images/tickverde.png" style="width:30px;height:30px;" />')
    }else{
        $('#desparasitado').append('<img src="/images/tickrojo.png" style="width:30px;height:30px;" />')
    }
    if(data.sterilized == true){
        $('#esterilizado').append('<img src="/images/tickverde.png" style="width:30px;height:30px;" />')
    }else{
        $('#esterilizado').append('<img src="/images/tickrojo.png" style="width:30px;height:30px;" />')
    }
    if(data.microchip == true){
        $('#microchip').append('<img src="/images/tickverde.png" style="width:30px;height:30px;" />')
    }else{
        $('#microchip').append('<img src="/images/tickrojo.png" style="width:30px;height:30px;" />')
    }


}

function eliminar(){
    Swal.fire({
        title: '¿Estás seguro de que quieres eliminar este animal?',
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
                url: "http://localhost:8080/api/animal/" + id,
                method: "DELETE",
                contentType: "application/json",
                success: function(response){

                },
                error: function(response) {
                    console.log(response);
                    alert("Ha habido un error al buscar el animal");
                }
            });
        }
      })
}

function modalEliminar(){
    Swal.fire({
        title: 'Perfil de animal eliminado',
        imageUrl: 'images/logocirculo.png',
        imageWidth: 150,
        imageAlt: 'Custom image',
        confirmButtonColor: '#F1C232'
    }).then(function(){
        window.location.href = "index.php"
    })
}