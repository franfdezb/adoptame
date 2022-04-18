var photo1 = null;
var photo2 = null;
var idanimal = null;

function validateForm1() {
    $("#errors-container").empty();

    animalname = $("#animalname").val();
    specie = $("#specie").val();
    raze = $("#raze").val();

    if($("#size").val() == 0){
        size = 'Pequeño';
    } else if($("#size").val() == 1){
        size = 'Mediano';
    }else{
        size = 'Grande';
    }
    weight = $("#weight").val();
    address = $("#address").val();

    if($("#gender").val() == 0){
        gender = 'Macho';
    }else{
        gender = 'Hembra';
    }

    age = $("#fechanacimiento").val(); //A lo mejor da error porque es tipo date
    moreinfo = $("#moreinfo").val();

    vaccinated = $("#checkboxVacuna").is(":checked");
    dewormed = $("#checkboxParasito").is(":checked");
    sterilized = $("#checkboxEsteril").is(":checked");
    microchip = $("#checkboxChip").is(":checked");
    refugeid = null; //Ponemos este valor para probar
    adoptionStatus = true; //1 para decir que el animal está en adopción

    /*if (nombre.trim().length < 3) {
        $("#errors-container").append(
            getError("El nombre debe tener al menos 3 caracteres de longitud")
        );
        errorCounter++;
    }*/

    userid = localStorage.userId;

    if ($("#myfile").val() == '') {
        $("#errors-container").append(
            getError("Debes subir al menos una foto del animal")
        );
    }

    if ($("#animalname").val() == '') {
        $("#errors-container").append(
            getError("Debes ponerle un nombre al animal")
        );
    }

    let animal = {
        weight: weight,
        raze: raze,
        name: animalname,
        age: age,
        gender: gender,
        size: size,
        specie: specie,
        address: address,
        adoptionStatus: adoptionStatus,
        refugeid: refugeid,
        userid: userid,
        moreinfo: moreinfo,
        photo1: photo1,
        photo2: photo2,
        vaccinated: vaccinated,
        dewormed: dewormed,
        sterilized: sterilized,
        microchip: microchip,
    };

    //console.log(animal);

    resultAnimal(animal);

}

function getError(message) {
    return (
        "<div onclick='removeError(this);' class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" +
        message +
        "</div>"
    );
}


function removeError(error) {
    $(error).remove();
}

function resultAnimal(animal) {

    $.ajax({
        url: "http://localhost:8080/api/animal/create",
        method: "POST",
        data: JSON.stringify(animal),
        contentType: "application/json",
        success: function(response){
            idanimal = response.message;
            handleRegister(animal);
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al intentar registrarse");
        }
    });
}

function handleRegister(data) {

        Swal.fire({
            title: '¡' + data.name + ' ha sido puesto en adopción!',
            imageUrl: 'images/logocirculo.png',
            imageWidth: 150,
            imageAlt: 'Custom image',
            confirmButtonColor: '#F1C232'
          }).then(function(){
            window.location.href = "animal.php?id=" + idanimal;
          })
    }

function encodeImageFileAsURL(element) {
    let files = element.files;

       let file;
       for (let i=0; i<files.length ; i++){
            let reader = new FileReader();
            file = files [i];
            reader.onload = (file) => {
                if(photo1 == null){
                    photo1 = reader.result;
                }else{
                    photo2 = reader.result;
                }   
             }
            reader.readAsDataURL(file)
        }
}

$(document).ready(function(){
    if($(window).width() < 768){
        $('#row2').css('margin-right', '');
        $('#row2').css('margin-left', '');
        $('#row2').css('width', '');
    }
});

$(window).resize(function() {
    if($(window).width() < 768){
        $('#row2').css('margin-right', '');
        $('#row2').css('margin-left', '');
        $('#row2').css('width', '');
    }

    if($(window).width() > 768){
        $('#row2').css('width', '');
        $('#row2').css('margin-left', '30px');
    }
});
