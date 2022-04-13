function validateForm() {
    let email = $("#email").val();
    let password = $("#password").val();

    // Hay que validar este formulario como cualquier otro!!!

    let login_data = {
        email,
        password,
    };

    $.ajax({
        url: "http://localhost:3000/login",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(login_data),

        success: handleLogin,
        error: function() {
            alert("Ha habido un error al intentar hacer el login");
        }
    });

    return false;
}

function handleLogin(data) {
    let token = data.accessToken;
    saveToken(token).then(function() {
        window.location.href = "index.php";
    });
}