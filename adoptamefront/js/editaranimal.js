const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));
var errorCounter = 0;
var animalid = null;

 $(document).ready(function(){
    obtainAnimalData();
    //handleUserData();
    //fillUserData();
});

function obtainAnimalData() {

    $.ajax({
        url: "http://localhost:8080/api/animal/" + id,
        method: "GET",
        contentType: "application/json",
        success: function(response){
            fillAnimalData(response);
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al buscar el animal");
        }
    });
}

function fillAnimalData(data){
    $("#tituloformulario").append("Editar página personal de " + data.name)
    $("#animalname").val(data.name)
    $("#specie").val(data.specie)
    $("#raze").val(data.raze)
    $("#address").val(data.address)
    $("#weight").val(data.weight)
    $("#address").val(data.address)
    $("#fechanacimiento").val(data.age)
    $("#moreinfo").val(data.moreinfo)
        
    if(data.size == 'Pequeño'){
        $("#size").val(0)
    } else if(data.size == 'Mediano'){
        $("#size").val(1)
    }else{
        $("#size").val(2)
    }

    if(data.gender == 'Macho'){
        $("#size").val(0)
    } else if(data.size == 'Hembra'){
        $("#size").val(1)
    }

    if(data.vaccinated == true){
        $('#checkboxVacuna').attr('checked', true);
    }
    if(data.dewormed == 1){
        $('#checkboxParasito').attr('checked', true);
    }
    if(data.sterilized == 1){
        $('#checkboxEsteril').attr('checked', true);
    }
    if(data.microchip == 1){
        $('#checkboxChip').attr('checked', true);
    }
}

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
    adoptionStatus = $("#checkboxAdoptado").is(":checked");
    if(localStorage.refuge != null){
        refugeid = localStorage.refuge;
    }else{
        refugeid = null;
    }

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
        errorCounter++;
    }

    if ($("#animalname").val() == '') {
        $("#errors-container").append(
            getError("Debes ponerle un nombre al animal")
        );
        errorCounter++;
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
        vaccinated: vaccinated,
        dewormed: dewormed,
        sterilized: sterilized,
        microchip: microchip,
    };

    //console.log(animal);

    resultAnimal(animal);

}

function resultAnimal(animal) {

    if(errorCounter > 0){
        errorCounter = 0;
        //Saltan los errores y no se envía el formulario
    }else{
        
    $.ajax({
        url: "http://localhost:8080/api/animal/" + id,
        method: "PUT",
        data: JSON.stringify(animal),
        contentType: "application/json",
        success: function(response){
            //idanimal = response.message;
            //handleRegister(animal);
            console.log("Solicitud creada correctamente")
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al intentar enviar la solicitud");
        }
    });
    }

}

function getError(message) {
    return (
        "<div onclick='removeError(this);' class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" +
        message +
        "</div>"
    );
}
