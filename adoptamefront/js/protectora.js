const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));

 $(document).ready(function(){
    obtainRefugeData();
});

function obtainRefugeData() {

    $.ajax({
        url: "http://localhost:8080/api/refuge/" + id,
        method: "GET",
        contentType: "application/json",
        success: function(response){
            console.log(response);
            handleRefugeData(response);
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al buscar el refugio");
        }
    });
}

function handleRefugeData(data){
    //console.log(data);

    var u8 = new Uint8Array(data.photo1.data);
    var decoder = new TextDecoder('utf8');
    var b64encoded = btoa(decoder.decode(u8));

    //console.log(b64encoded)
    var fotodesencriptada = atob(b64encoded);
    //console.log(decodedStr)

    $("#primeraimagen").attr('src', fotodesencriptada);

    $("#name").html("<b>" + data.refugename.toUpperCase() + "</b>");

    //--------------------------

    $("#lugar").append("<b>" + data.city + "</b>");
    $("#address").append("<b>" + data.address + "</b>");
    
    $("#masinfo").html("Información adicional: " + data.moreinfo);

    //--------------------------

    $("#email").append(data.email);
    $("#telephone").append(data.telephone);


}