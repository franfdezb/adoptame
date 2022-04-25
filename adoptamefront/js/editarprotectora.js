const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));
var errorCounter = 0;
var animalid = null;

 $(document).ready(function(){
    obtainRefugeData();
    //handleUserData();
    //fillUserData();
});

function obtainRefugeData() {

    $.ajax({
        url: "http://localhost:8080/api/refuge/" + id,
        method: "GET",
        contentType: "application/json",
        success: function(response){
            if(response.userid == localStorage.userId){
                fillRefugeData(response);
            }else{
                    if(localStorage.tokenTime == null){
                        $( ".container" ).remove();
                        Swal.fire({
                            icon: 'error',
                            title: '¡Error!',
                            text: 'No tienes permitido hacer esto',
                            confirmButtonColor: '#F1C232'
                        }).then(function(){
                            window.location.href = "index.php";
                          })
                    }
            }
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al buscar el animal");
        }
    });
}

function fillRefugeData(data){
    $("#tituloformulario").append("Editar página personal de " + data.refugename)
    $("#refugename").val(data.refugename)
    $("#city").val(data.city)
    $("#email").val(data.email)
    $("#address").val(data.address)
    $("#bankaccount").val(data.bankaccount)
    $("#telephone").val(data.telephone)
    $("#moreinfo").val(data.moreinfo)
}

function validateForm1() {
    $("#errors-container").empty();

    refugename = $("#refugename").val();
    address = $("#address").val();
    city = $("#city").val();
    email = $("#email").val();
    bankaccount = $("#bankaccount").val();
    moreinfo = $("#moreinfo").val();
    telephone = $("#telephone").val();
    userid = localStorage.userId;

    if ($("#refugename").val() == '') {
        $("#errors-container").append(
            getError("Debes ponerle un nombre a tu refugio/protectora")
        );
        errorCounter++;
    }

    if ($("#address").val() == '') {
        $("#errors-container").append(
            getError("Debes poner una dirección")
        );
        errorCounter++;
    }

    if ($("#city").val() == '') {
        $("#errors-container").append(
            getError("Debes seleccionar una provincia")
        );
        errorCounter++;
    }

    if ($("#telephone").val() == '') {
        $("#errors-container").append(
            getError("Debes poner un teléfono de contacto")
        );
        errorCounter++;
    }

    if ($("#email").val() == '') {
        $("#errors-container").append(
            getError("Debes poner un correo electrónico")
        );
        errorCounter++;
    }

    let refuge = {
        refugename : refugename,
        address : address,
        city : city,
        email : email,
        bankaccount : bankaccount,
        moreinfo : moreinfo,
        telephone : telephone
    };

    console.log(refuge);

    resultRefuge(refuge);

}

function getError(message) {
    return (
        "<div onclick='removeError(this);' class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" +
        message +
        "</div>"
    );
}

function resultRefuge(refuge) {

    if(errorCounter > 0){
        errorCounter = 0;
        //Saltan los errores y no se envía el formulario
    }else{
        
    $.ajax({
        url: "http://localhost:8080/api/refuge/" + id,
        method: "PUT",
        data: JSON.stringify(refuge),
        contentType: "application/json",
        success: function(response){
            window.location.href = "protectora.php?id=" + id;
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al intentar crear la protectora");
        }
    });
    }

}
