

function validateForm() {
    let email = $("#email").val();
    let password = $("#password").val();

    // Hay que validar este formulario como cualquier otro!!!

    let login_data = {
        email,
        password,
    };

    $.ajax({
        url: "http://localhost:8080/api/auth/signin",
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
    localStorage.setItem("token", token);
    localStorage.setItem("tokenTime", new Date().getTime());
    localStorage.setItem("userId", data.id);
    localStorage.setItem("username", data.username);
    
    if(data.roles.includes("ROLE_REFUGE")){
        localStorage.setItem("roles", "user, refuge")
    }
    if(data.roles.includes("ROLE_ADMIN")){
        localStorage.setItem("roles", "user, refuge, admin")
    }

    window.location.href = "index.php";
    
    //La variable localStorage contiene todos los datos del usuario mientras tenga su sesión iniciada
}