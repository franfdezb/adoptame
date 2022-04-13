if(localStorage.getItem("userId") == undefined){
    document.getElementById("newPhoto").remove();
    document.getElementById("profile").remove();
    document.getElementById("logout").remove();
} else {
    document.getElementById("register").remove();
    document.getElementById("login").remove();
}