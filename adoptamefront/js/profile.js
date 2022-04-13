var userRequestId = getParameterByName('id');
var userId = parseInt(localStorage.getItem("userId"));
if (userRequestId == "") {
    userRequestId = userId;
}

// PERFIL // 
/**
 *	Imprime nombre, email
 **/
function processProfile(data) {
    let user = data[0];
    $("#username").text(user.name + " " + user.surname); // Nombre completo
    $("#email").text(user.email); // Email
}

/**
 *	Consulta el perfil del usuario.
 **/
function loadProfile() {
    $.ajax({
        url: "http://localhost:3000/users?id=" + userRequestId, // devuelve el usuario con esa ID
        success: processProfile,
        error: function(error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });

}
// //


// FOTOS //
/**
 *	Muestra total de fotos de usuarios y las últimas 4
 **/
function processPhotos(data) {
    let count = 0;
    for (photo of data) {
        if (count < 4) { // Muestra últimas 4 fotos
            $("#recentPhotos").append('<div class="col-lg-6 mb-2 pr-lg-1"><a href="photo_detail.php?photoId=' + photo.id + '"><img src="' + photo.url + '" alt="" class="img-fluid rounded shadow-sm"><a></div>');
        }
        count++;
    }

    if (count == 0) { // Si no hay fotos
        $("#recentPhotos").append('<p>  Sin fotos recientes ☻</p>');
    }

    $("#numeroFotos").text(data.length); // Conteo de fotos
}

/**
 *	Consulta las fotos del usuario.
 **/
function loadPhoto() {
    let private = "";
    if (userRequestId != userId) {
        private = "&private=0"
    }
    $.ajax({
        // devuelve las fotos del usuario con esa ID ordenadas en orden descendente
        url: "http://localhost:3000/photos?userId=" + userRequestId + "&_sort=id&_order=desc" + private,
        success: processPhotos,
        error: function(error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });
}
// //

function deletePhoto() {
    $.ajax({
        // devuelve las fotos del usuario con esa ID ordenadas en orden descendente
        url: "http://localhost:3000/photos?userId=" + userRequestId + "&_sort=id&_order=desc" + private,
        success: processPhotos,
        error: function(error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });
}

/*function noMostrar() {

    $.ajax({
        // devuelve las fotos del usuario con esa ID ordenadas en orden descendente
        url: "http://localhost:3000/photos?userId=" + userRequestId,
        success: function(data) {
            if (userRequestId != userId) {
                $("#noMostrarEdit").remove();
                $("#noMostrarEliminar").remove();
            }
        },
        error: function(error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });
}*/



// AUXILIARES //
/**
 *  Devuelve el valor de un parámetro (GET)
 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
// //

$(loadProfile);
$(loadPhoto);
// //

$('#todaslasfotos').attr("href", "profile_collection.php?id=" + userRequestId);