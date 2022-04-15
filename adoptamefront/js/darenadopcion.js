function validateForm1() {
    $("#errors-container").empty();

    nombre = $("#name").val();
    surname = $("#apellidos").val();
    email = $("#email").val();
    telephone = $("#telefono").val();
    username = $("#usuario").val();
    password1 = $("#password1").val();
    password2 = $("#password2").val();
    isRefuge = $("#checkboxRefugio").val();

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

}

$(document).ready(function(){
    if($(window).width() < 768){
        $('#row2').css('margin-right', '');
        $('#row2').css('margin-left', '');
        $('#row2').css('width', '');
    }
});

$(window).resize(function() {
    console.log("klk")

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
