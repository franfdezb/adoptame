/*if(localStorage.getItem("userId") == undefined){
    document.getElementById("newPhoto").remove();
    document.getElementById("profile").remove();
    document.getElementById("logout").remove();
} else {
    document.getElementById("register").remove();
    document.getElementById("login").remove();
}*/

//Si el usuario está logeado hay que cambiar las dos opciones al pulsar en el botón de perfil
function checkLogin(){
    if(isLogged()){
        //Cambiamos las opciones del desplegable del perfil que está en el header
        $("#optiononeprofile").text("Editar cuenta");
        $("#optiononeprofile").removeAttr("href");
        $("#optiononeprofile").css("cursor", "pointer")
        $("#optiontwoprofile").text("Cerrar sesión");
        $("#optiontwoprofile").removeAttr("href");
        $("#optiontwoprofile").css("cursor", "pointer")
        
        //Cambiamos las opciones del desplegable del menú móvil
        $("#optionthreeprofile").text("Editar cuenta");
        $("#optionthreeprofile").removeAttr("href");
        $("#optionfourprofile").text("Cerrar sesión");
        $("#optionfourprofile").removeAttr("href");

        $("#optiontwoprofile").on("click", function(){ logout(); });
        $("#optionfourprofile").on("click", function(){ logout(); });
    }
}