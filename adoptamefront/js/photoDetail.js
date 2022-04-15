const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('photoId'));
var userId = parseInt(localStorage.getItem("userId"));
var removeTag = '';
var updTags = '';

function getError(message) {
    return "<div onclick='removeError(this);' class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" + message + "</div>";
}

function editPhoto() {
    window.location.href = "photo_edit.php?id=" + id;
}

function deletePhoto() {
    fetch('http://localhost:3000/photos/' + id, {
        method: "DELETE",
        headers: {
            'Authorization': 'Bearer ' + getToken(),
        }
    }).then(function(response) {
        if (response.ok) {
            window.location.href = "index.php";
        } else {
            console.log("Error al borrar la foto: " + response.statusText);
        }
    }).catch(function(error) {
        console.log("Error al borrar la foto: " + error);
    });
}

function processPhotoLoad(data) {
    $("#image").attr("src", data.url);
    $("#image-title").text(data.title);
    $("#image-desc").text(data.description);
    if (data.private == 0) {
        $("#image-private").html('<span class="badge badge-info">Foto pública</span>');
    } else {
        $("#image-private").html('<span class="badge badge-warning">Foto privada</span>');
    }
    $("#userProfile").attr("href", "profile.php?id=" + data.userId);

    if (data.userId != userId) {
        $("#noMostrarEdit").remove();
        $("#noMostrarEliminar").remove();
    }

    let photo_date = data.date;
    let date = new Date(photo_date);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    //let date_string = "Fecha: " + day + "/" + month + "/" + year;
    let date_string = `Fecha: ${day}/${month}/${year}`;
    $("#image-date").text(date_string);

    for (tag of data.tags) {
        let span = $("<span></span>", {
            text: tag,
            "class": "badge badge-primary",
            "data-value": tag
        });

        $("#image-tags").append(span);
    }
    $("span.badge").after(" ");

    // Elimina boton de like o dislike si no esta login
    if (localStorage.getItem("userId") == undefined) {
        document.getElementById("like").remove();
        document.getElementById("dislike").remove();
    }

    loadScore(); // Carga votos
}

function loadPhoto() {
    if (id === null) {
        alert("Please provide a photo ID");
    } else {
        $.ajax({
            url: "http://localhost:3000/photos/" + id,
            success: processPhotoLoad,
            error: console.log,
        });
    }
}


function processScore(data) {
    let score = 0;
    for (v of data) {
        score += v.vote;
    }
    let score_text = "Puntuación: " + score;
    $("#image-score").text(score_text);
}

function loadScore() {
    $.ajax({
        url: "http://localhost:3000/votes?photoId=" + id,
        success: processScore,
        error: console.log,
    });
}

$(loadPhoto); // Cargar la foto cuando la página esté lista

//Añadir Me Gusta
function getLikes(data) {
    let v = {
        photoId: id,
        userId: userId,
        date: new Date().toISOString(),
        vote: 1
    };

    if (data.length == 0) {
        // Aquí hacemos el envío
        fetch('http://localhost:3000/votes/', {
            method: "POST",
            body: JSON.stringify(v),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            }
        }).then(function(response) {
            if (response.ok) {
                window.location.reload();
            } else {
                $("#errors-container").append(getError(response.statusText));
            }
        }).catch(console.log);
    } else {
        fetch("http://localhost:3000/votes/" + data[0].id, {
            method: "PATCH",
            body: JSON.stringify(v),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            }
        }).then(function(response) {
            if (response.ok) {
                window.location.reload();
            } else {
                $("#errors-container").append(getError(response.statusText));
            }
        }).catch(console.log);
    }
}

$(document).on('click', '#like', function() {
    $.ajax({
        url: "http://localhost:3000/votes?photoId=" + id + "&userId=" + userId, // Buscamos si hemos votado la foto
        success: getLikes,
        error: console.log,
    });
});

//Añadir dislikes
function getDislikes(data) {
    let v = {
        photoId: id,
        userId: userId,
        date: new Date().toISOString(),
        vote: -1
    };

    if (data.length == 0) {
        // Aquí hacemos el envío
        fetch('http://localhost:3000/votes/', {
            method: "POST",
            body: JSON.stringify(v),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            }
        }).then(function(response) {
            if (response.ok) {
                window.location.reload();
            } else {
                $("#errors-container").append(getError(response.statusText));
            }
        }).catch(console.log);
    } else {
        fetch("http://localhost:3000/votes/" + data[0].id, {
            method: "PATCH",
            body: JSON.stringify(v),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            }
        }).then(function(response) {
            if (response.ok) {
                window.location.reload();
            } else {
                $("#errors-container").append(getError(response.statusText));
            }
        }).catch(console.log);
    }
}

$(document).on('click', '#dislike', function() {
    $.ajax({
        url: "http://localhost:3000/votes?photoId=" + id + "&userId=" + userId, // Buscamos si hemos votado la foto
        success: getDislikes,
        error: console.log,
    });
});