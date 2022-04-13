const PHOTOS_PER_ROW = 3;
var userId = parseInt(localStorage.getItem("userId"));
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
var userRequestId = getParameterByName('id');
if (userRequestId == "") {
    userRequestId = userId;
}

function processPhotos(data) {
    let row = $("div.container > div.row").last();
    let counter = 0;

    for (photo of data) {
        if (photo.private == 0 || photo.userId == userId) {
            let html = `<div class="col-12 col-sm-6  col-lg-4 text-center">
        <div class="card">
          <a href="photo_detail.php?photoId=${photo.id}">
            <img src="${photo.url}" class="card-img-top">
          </a>
          <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
            <p class="card-text">${photo.description}</p>
            <hr>
            <p class="card-text">
            </p>
          </div>
        </div>
      </div>`;

            let col = $.parseHTML(html);
            row.append(col);

            let p_tags = $("p.card-text").last();

            for (tag of photo.tags) {
                let tag_span = $("<span></span>", {
                    "class": "badge badge-primary",
                    text: tag,
                });
                p_tags.append(tag_span);
            }
            $("span.badge").after(" ");

            counter++;
            if (counter % PHOTOS_PER_ROW == 0) {
                let new_row = $("<div></div>", { "class": "row" });
                $("div.container").append(new_row);
                row = new_row;
            }
        }
    }
}

function loadPhotos() {
    $.ajax({
        url: "http://localhost:3000/photos?userId="+userRequestId+"&_sort=id&_order=desc",
        success: processPhotos,
        error: function(error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });
}

// Llamar a loadPhotos cuando la página esté lista
$(loadPhotos);


function setTitle(data){
    $("#titulo").text("Fotos de "+data[0].name+' '+data[0].surname);
}

function loadUserInfo() {
    $.ajax({
        url: "http://localhost:3000/users?id="+userRequestId,
        success: setTitle,
        error: function(error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });
}


$(loadUserInfo);
