//NO LA USAMOS PORQUE YA TENEMOS TODOS LOS DATOS DE UN USUARIO CUANDO INICIAMOS SESIÓN GRACIAS AL BACKEND
//AL HACER PETICIÓN POST PARA LOGEARNOS EL BACK NOS DA TODOS LOS DATOS DEL USUARIO EN JSON
function saveToken(token) {

    return new Promise((resolve, reject) => {
        localStorage.setItem("token", token);
        localStorage.setItem("tokenTime", new Date().getTime());

        let userId = getTokenID(token);
        localStorage.setItem("userId", userId);
    
        $.ajax({
            url: "http://localhost:8080/users/" + userId,
            success: function(data) {
                let name = data.name;
                localStorage.setItem("userName", name);
                resolve();
            },
            error: reject,
        });
    });

}

function isLogged() {
    return getToken() !== null;
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenTime");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    window.location.href = "index.php";
}

function getToken() {
    let token = localStorage.getItem("token");
    // Si no hay token, da un null

    if(token !== null) {
        let currentDate = new Date().getTime();
        let tokenDate = localStorage.getItem("tokenTime");
        let diff = currentDate - tokenDate; // en ms

        if(diff > 60*60*1000) {
            console.log("The token has expired.");
            logout();
            token = null;
        }

    }

    return token;
}