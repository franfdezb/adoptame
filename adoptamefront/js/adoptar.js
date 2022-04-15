$(document).ready(function(){
    if($(window).width() < 768){
        $('#row2').css('margin-right', '');
        $('#row2').css('margin-left', '');
        $('#row2').css('width', '');
    }
});

$(window).resize(function() {
    console.log("klk")

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
