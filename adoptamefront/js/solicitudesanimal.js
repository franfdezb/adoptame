const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));

 $(document).ready(function(){
    obtainAnimalData();
    //handleUserData();
    //fillUserData();
});

function obtainAnimalData() {

    $.ajax({
        url: "http://localhost:8080/api/animal/" + id,
        method: "GET",
        contentType: "application/json",
        success: function(response){
            if(response.userid == localStorage.userId && localStorage.tokenTime != null){
                $("#tituloformulario").append(response.name)
                rellenarSolicitudes(response);
            }else{
                        $( ".container" ).remove();
                        Swal.fire({
                            icon: 'error',
                            title: '¡Error!',
                            text: 'No tienes permitido hacer esto',
                            confirmButtonColor: '#F1C232'
                        }).then(function(){
                            window.location.href = "index.php";
                          })
                    
            }
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al buscar el animal");
        }
    });
}

function rellenarSolicitudes(data){

    $.ajax({
        url: "http://localhost:8080/api/adoptapplication/getallbyid/" + id,
        method: "GET",
        contentType: "application/json",
        success: function(response){
            handleApplicationsData(response);
        },
        error: function(response) {
            console.log(response);
            alert("Ha habido un error al buscar el animal");
        }
    });
}

function handleApplicationsData(data){

        for(var i = 0; i<data.length; i++){

            var html = '';

        html += '<div class="form-group" style="margin-bottom: 0 !important">\n';
        html += '<label style="margin-bottom: 0 !important">· Nombre</label>\n';
        html += '<p style="border: 2px solid #ced4da; margin-bottom: 0 !important">' + data[i].name + '\n';
        html += '</div>\n';
        html += '<label style="margin-bottom: 0 !important">· Apellidos</label>\n';
        html += '<p style="border: 2px solid #ced4da; margin-bottom: 0 !important">' + data[i].surname + '\n';
        html += '</div>\n';
        html += '<div class="form-group" style="margin-bottom: 0 !important">\n';
        html += '<label style="margin-bottom: 0 !important">· Dirección de correo electrónico</label>\n';
        html += '<p style="border: 2px solid #ced4da; margin-bottom: 0 !important">' + data[i].email + '\n';
        html += '</div>\n';
        html += '<div class="form-group" style="margin-bottom: 0 !important">\n';
        html += '<label style="margin-bottom: 0 !important">· Número de teléfono</label>\n';
        html += '<p style="border: 2px solid #ced4da; margin-bottom: 0 !important">' + data[i].telephone + '\n';
        html += '</div>\n';
        html += '<div class="form-group" style="margin-bottom: 0 !important">\n';
        html += '<label style="margin-bottom: 0 !important">· Información adicional</label>\n';
        html += '<p style="border: 2px solid #ced4da; margin-bottom: 0 !important">' + data[i].moreinfo + '\n';
        html += '</div>\n';
        html += '<div class="form-group" style="width: 100%; text-align: center;">\n'
        html += '<button onclick="validateForm1()" class="button2"> ELIMINAR SOLICITUD </button>\n'
        html += '</div>\n'
        html += '<hr />\n'

        $('#contenedorsolicitudes').append(html);
        }

}
