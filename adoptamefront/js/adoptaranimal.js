const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));
var errorCounter = 0;
var animalid = null;

 $(document).ready(function(){
    obtainAnimalData();
    handleUserData();
    fillUserData();
});

function obtainAnimalData() {

    $.ajax({
        url: "http://localhost:8080/api/animal/" + id,
        method: "GET",
        contentType: "application/json",
        success: function(response){
            handleAnimalData(response);
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al buscar el animal");
        }
    });
}

function handleUserData(){
    $.ajax({
        url: "http://localhost:8080/api/user/" + localStorage.userId,
        method: "GET",
        contentType: "application/json",
        success: function(response){
            fillUserData(response);
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al buscar el usuario");
        }
    });
}

function handleAnimalData(data){
    $("#tituloformulario").append("¡Vas a adoptar a " + data.name + "!<br>")
    $("#tituloformulario").append("Rellena este formulario")
}

function fillUserData(data){
    $("#nombre").val(data.name)
    $("#apellidos").val(data.surname)
    $("#telefono").val(data.telephone)
    $("#email").val(data.email)
}

function validateForm1() {
    $("#errors-container").empty();

    nombre = $("#nombre").val();
    surname = $("#apellidos").val();
    email = $("#email").val();
    telephone = $("#telefono").val();
    dni = $("#dni").val();
    moreinfo = $("#moreinfo").val();
    animalid = parseInt(id);

    if ($("#myfile").val() == '') {
        $("#errors-container").append(
            getError("Debes subir al menos una foto del animal")
        );
        errorCounter++;
    }

    let adoptapplication = {
        name: nombre,
        surname: surname,
        email: email,
        telephone: telephone,
        dni: dni,
        moreinfo: moreinfo,
        animalid: animalid
    };

    console.log(adoptapplication);

    resultApplication(adoptapplication);
}

function resultApplication(adoptapplication) {

    if(errorCounter > 0){
        errorCounter = 0;
        //Saltan los errores y no se envía el formulario
    }else{
        
    $.ajax({
        url: "http://localhost:8080/api/adoptapplication/create",
        method: "POST",
        data: JSON.stringify(adoptapplication),
        contentType: "application/json",
        success: function(response){
            //idanimal = response.message;
            //handleRegister(animal);
            console.log("Solicitud creada correctamente")
            Swal.fire({
                title: '¡Solicitud de adopción enviada con éxito!',
                text: 'Si el dueño del animal lo considera oportuno, recibirás información pronto',
                imageUrl: 'images/logocirculo.png',
                imageWidth: 150,
                imageAlt: 'Custom image',
                confirmButtonColor: '#F1C232'
              }).then(function(){
                window.location.href = "animal.php?id=" + id;
              })
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al intentar enviar la solicitud");
        }
    });
    }

}
