const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));

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
}