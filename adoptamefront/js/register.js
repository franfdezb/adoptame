var errorCounter = 0;
var nombre = $("#nombre").val();
var apellidos = $("#apellidos").val();
var telefono = $("#telefono").val();
var email = $("#email").val();
var usuario = $("#usuario").val();
var password1 = $("#password1").val();
var password2 = $("#password2").val();


function validateForm() {
    $("#errors-container").empty();

    nombre = $("#nombre").val();
    apellidos = $("#apellidos").val();
    telefono = $("#telefono").val();
    email = $("#email").val();
    usuario = $("#usuario").val();
    password1 = $("#password1").val();
    password2 = $("#password2").val();

    if (nombre.trim().length < 3) {
        $("#errors-container").append(
            getError("El nombre debe tener al menos 3 caracteres de longitud")
        );
        errorCounter++;
    }

    if (apellidos.trim().length < 6) {
        $("#errors-container").append(
            getError("Los apellidos deben tener al menos 6 caracteres de longitud")
        );
        errorCounter++;
    }

    if (!new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$").test(email)) {
        $("#errors-container").append(getError("Por favor, introduzca un email válido"));
        errorCounter++;
    }

    if (!new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$").test(telefono)) {
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

    $.ajax({
        url: "http://localhost:3000/users?email=" + email,
        success: resultEmail,
        error: function(error) {
            console.log("Ha ocurrido un error: " + error.toString());
            errorCounter = 0;
        }
    });

    return false;
}

function resultEmail(data) {
    if (data.length > 0) {
        $("#errors-container").append(getError("El email ya existe"));
        errorCounter++;
    }

    if (errorCounter === 0) {

        let user = {
            email: email,
            password: password1,
            name: nombre,
            surname: apellidos,
            phone: telefono,
            user: usuario,
        };

        $.ajax({
            url: "http://localhost:3000/register",
            method: "POST",
            data: JSON.stringify(user),
            contentType: "application/json",
            success: handleRegister,
            error: function() {
                alert("Ha habido un error al intentar registrarse");
            }
        });
    }

    errorCounter = 0;
}

function handleRegister(data) {
    let token = data.accessToken;
    saveToken(token).then(() => {
        window.location.href = "index.php";
    });
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