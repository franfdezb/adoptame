var errorCounter = 0;

$(document).ready(function() {
    $('#nombre').removeClass('is-valid');
  });

function validateForm1() {
    $("#errors-container").empty();

    nombre = $("#name").val();
    surname = $("#apellidos").val();
    email = $("#email").val();
    telephone = $("#telefono").val();
    username = $("#usuario").val();
    password1 = $("#password1").val();
    password2 = $("#password2").val();
    isRefuge = $("#checkboxRefugio").is(":checked");

    if(nombre.includes('(') || nombre.includes('*') || nombre.includes(';') || nombre.includes(',') || nombre.includes(':')){
        $("#errors-container").append(
            getError("El nombre no puede contener caracteres especiales")
        );
        errorCounter++;
    }

    if(surname.includes('(') || surname.includes('*') || surname.includes(';') || surname.includes(',') || surname.includes(':')){
        $("#errors-container").append(
            getError("El apellido no puede contener caracteres especiales")
        );
        errorCounter++;
    }
    if(email.includes('(') || email.includes('*') || email.includes(';') || email.includes(',') || email.includes(':')){
        $("#errors-container").append(
            getError("El email no puede contener caracteres especiales")
        );
        errorCounter++;
    }
    if(username.includes('(') || username.includes('*') || username.includes(';') || username.includes(',') || username.includes(':')){
        $("#errors-container").append(
            getError("El nickname no puede contener caracteres especiales")
        );
        errorCounter++;
    }

    if (nombre.trim().length < 3) {
        $("#errors-container").append(
            getError("El nombre debe tener al menos 3 caracteres de longitud")
        );
        errorCounter++;
    }

    if (surname.trim().length < 4) {
        $("#errors-container").append(
            getError("Los apellidos deben tener al menos 4 caracteres de longitud")
        );
        errorCounter++;
    }

    if (!new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$").test(email)) {
        $("#errors-container").append(getError("Por favor, introduzca un email válido"));
        errorCounter++;
    }

    if (!new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$").test(telephone)) {
        $("#errors-container").append(getError("Introduzca un número de teléfono válido"));
        errorCounter++;
    }

    if (password1.trim().length < 5) {
        $("#errors-container").append(
            getError("La contraseña debe tener el menos 5 caracteres de longitud")
        );
        errorCounter++;
    }

    if (password1 != password2) {
        $("#errors-container").append(
            getError("Las contraseñas deben ser iguales")
        );
        errorCounter++;
    }

    let user = {
        email: email,
        password: password1,
        name: nombre,
        surname: surname,
        telephone: telephone,
        username: username,
        isRefuge: isRefuge
    };

    resultEmail(user);

    /*$.ajax({
        url: "http://localhost:3000/users?email=" + email,
        success: resultEmail,
        error: function(error) {
            console.log("Ha ocurrido un error: " + error.toString());
            errorCounter = 0;
        }
    });*/

}

function resultEmail(user) {

    if(errorCounter > 0){
        errorCounter = 0;
    }else{
        $.ajax({
            url: "http://localhost:8080/api/auth/signup",
            method: "POST",
            data: JSON.stringify(user),
            contentType: "application/json",
            success: handleRegister,
            error: function(response) {
                console.log(response);
                alert("Ha habido un error al intentar registrarse");
            }
        });
    }

}

function handleRegister(data) {

    Swal.fire({
        title: '¡Registrado con éxito!',
        text: 'Inicia sesión con tu nueva cuenta',
        imageUrl: 'images/logocirculo.png',
        imageWidth: 150,
        imageAlt: 'Custom image',
        confirmButtonColor: '#F1C232'
      }).then(function(){
        window.location.href = "login.php"
      })
    //window.location.href = "login.php";
}

///////////////////////////////////////////////////////////////////////////////

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

$(document).ready(function() {
    $("#nombre").change(function() {
        input = $(this);
        if (input.val().length < 3) {
            input.removeClass("is-valid");
            input.addClass("is-invalid");
        } else {
            input.removeClass("is-invalid");
            input.addClass("is-valid");
        }
    });
});