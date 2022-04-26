var photo1 = null;
var errorCounter = 0;
var idrefuge = null;

$(document).ready(function(){
    checkLogin();
});

function checkLogin(){
    if(localStorage.tokenTime == null){
        $( ".container" ).remove();
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Necesitas estar logeado para poder hacer esto',
            confirmButtonColor: '#F1C232'
        }).then(function(){
            window.location.href = "login.php";
          })
    }else{
        checkRefugeProfile();
    }
}

function checkRefugeProfile(){
    $.ajax({
        url: "http://localhost:8080/api/user/" + localStorage.userId,
        method: "GET",
        contentType: "application/json",
        success: function(response){
            if(response.isRefuge == false){
                Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: 'Necesitas tener una cuenta con rol de protectora',
                    confirmButtonColor: '#F1C232'
                }).then(function(){
                    window.location.href = "index.php";
                  })
            }else{
                checkIfUserHasRefuge(response)
            }
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al buscar el usuario");
        }
    });
}

function checkIfUserHasRefuge(data){
    if(data.refugeid != null){
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Ya tienes creada una protectora',
            confirmButtonColor: '#F1C232'
        }).then(function(){
            window.location.href = "index.php";
          })
    }
}

function validateForm1() {
    $("#errors-container").empty();

    refugename = $("#refugename").val();
    address = $("#address").val();
    city = $("#city").val();
    email = $("#email").val();
    paypal = $("#paypal").val();
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
        paypal : paypal,
        moreinfo : moreinfo,
        userid : userid,
        photo1 : photo1,
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
        url: "http://localhost:8080/api/refuge/create",
        method: "POST",
        data: JSON.stringify(refuge),
        contentType: "application/json",
        headers: {
            'x-access-token': getToken(),
        },
        success: function(response){
            idrefuge = response.message;
            handleRegister(refuge);
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al intentar crear la protectora");
        }
    });
    }

}

function handleRegister(data) {

    //CREAR METODO PUT PARA PONER LA REFUGEID A UN USER

    let userrefuge = {
        refugeid : idrefuge
    };

    $.ajax({
        url: "http://localhost:8080/api/user/" + localStorage.userId,
        method: "PUT",
        data: JSON.stringify(userrefuge),
        contentType: "application/json",
        success: function(response){
            //idanimal = response.message;
            //handleRegister(animal);
            //window.location.href = "animal.php?id=" + id;
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al intentar enviar la solicitud");
        }
    });

        Swal.fire({
            title: '¡El refugio/protectora ha sido creado con éxito!',
            imageUrl: 'images/logocirculo.png',
            imageWidth: 150,
            imageAlt: 'Custom image',
            confirmButtonColor: '#F1C232'
          }).then(function(){
            window.location.href = "protectora.php?id=" + idrefuge;
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