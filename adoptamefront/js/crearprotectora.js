var photo1 = null;

function validateForm1() {
    $("#errors-container").empty();

    refugename = $("#refugename").val();
    address = $("#address").val();
    city = $("#city").val();
    email = $("#email").val();
    bankaccount = $("#bankaccount").val();
    moreinfo = $("#moreinfo").val();
    userid = localStorage.userId;

    if ($("#myfile").val() == '') {
        $("#errors-container").append(
            getError("Debes subir al menos una foto del animal")
        );
    }

    if ($("#animalname").val() == '') {
        $("#errors-container").append(
            getError("Debes ponerle un nombre al animal")
        );
    }

    let refuge = {
        refugename : refugename,
        address : address,
        city : city,
        email : email,
        bankaccount : bankaccount,
        moreinfo : moreinfo,
        userid : userid,
        photo1 : photo1
    };

    console.log(refuge);

    //resultAnimal(animal);

}

function encodeImageFileAsURL(element) {
    let files = element.files;

       let file;
       for (let i=0; i<files.length ; i++){
            let reader = new FileReader();
            file = files [i];
            reader.onload = (file) => {
                if(photo1 == null){
                    photo1 = reader.result;
                }else{
                    photo2 = reader.result;
                }   
             }
            reader.readAsDataURL(file)
        }
}

$(document).ready(function(){
    if($(window).width() < 768){
        $('#row2').css('margin-right', '');
        $('#row2').css('margin-left', '');
        $('#row2').css('width', '');
    }
});

$(window).resize(function() {
    if($(window).width() < 768){
        $('#row2').css('margin-right', '');
        $('#row2').css('margin-left', '');
        $('#row2').css('width', '');
    }

    if($(window).width() > 768){
        $('#row2').css('width', '');
        $('#row2').css('margin-left', '30px');
    }
});