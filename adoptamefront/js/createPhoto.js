var userId = parseInt(localStorage.getItem("userId"));

function getError(message) {
    return "<div onclick='removeError(this);' class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" + message + "</div>";
}

$("form").submit(function(event) {
    event.preventDefault();
    $("#errors-container").empty();

    $.ajax({
        url: "http://localhost:3000/photos?userId=" + userId,
        success: checkPhotos,
        error: console.log,
    });
});

function checkPhotos(data) {
    let n_photos = data.length;
    let limit = 50;
    if (n_photos >= limit) {
        alert("No puedes crear más fotos, el límite es " + limit + " por usuario :(");
    } else {
        let url = $("#url-input").val();
        let title = $("#title-input").val();
        let description = $("#description-input").val();
        let private = $("#private-input").prop("checked");
        if (url.length != 0 && title.length != 0 && description.length != 0) {
            if (filterWords(description) && filterWords(title)) {
                let tags = $("#tags-input").val().split(",").map(tag => tag.trim());
                let uniqueTags = new Set();

                for (var i = 0; i < tags.length; i++) {
                    let tag = tags[i];
                    uniqueTags.add(tag.toLowerCase());
                }

                uniqueTags = Array.from(uniqueTags);

                let date = new Date().toISOString();

                let photo = {
                    url: url,
                    title: title,
                    description: description,
                    tags: uniqueTags,
                    date: date,
                    userId: userId,
                    private: (private == true ? 1 : 0)
                };

                fetch('http://localhost:3000/photos/', {
                    method: "POST",
                    body: JSON.stringify(photo),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + getToken(),
                    }
                }).then(function(response) {
                    if (response.ok) {
                        window.location.href = "index.php";
                    } else {
                        $("#errors-container").append(getError(response.statusText));
                    }
                }).catch(console.log);
            }
        } else {
            window.alert("Ningún campo puede quedar vacío");
        }
    }
}