<div class="title-block" style="float: left; display: flex; background-color: #F1C232; width: 100%; height: calc(100% - 90%) !important;">
    <div class="column-left-right" style="float: left; width: 25%; position: relative;">
        <img src="images/redes.png" alt="redes" style="max-height: 47%;max-width: 40%;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;">
    </div>

    <div class="column-center" style="float: left; width: 50%;">
        <img src="images/banner.png" alt="banner" style="width: 65%; padding-top: 10px; padding-bottom: 10px;">
    </div>

    <div class="dropdown" style="float: left; width: 25%; position: relative;">
    <img src="images/perfil.png" onclick="myFunction()" class="dropbtn" alt="redes" style="max-height: 50%;max-width: 33%;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;">
        <div id="myDropdown" class="dropdown-content">
            <a href="http://localhost:3000/adoptamefront/login.php" id="optiononeprofile">Inicia sesión</a>
            <a href="#signup" id="optiontwoprofile">Regístrate</a>
        </div>
    </div>
</div>

    <nav class="navbar navbar-expand-sm bg-light navbar-light" style="float: left; width: 100%; margin-bottom: 20px;">
        <a href="http://localhost:3000/adoptamefront/index.php" class="button" style="width: 25%; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">INICIO</a>
        <a href="/about" class="button" style="width: 25%; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">PROTECTORAS</a>
        <a href="#" class="button" style="width: 25%; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">DA EN ADOPCIÓN</a>
        <a href="#" class="button" style="width: 25%; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">¿QUIÉNES SOMOS?</a>
    </nav>
  
</div>
<script src="js/header.js"></script>

<hr style="float: left;">

<script>

$(document).ready(function(){
    checkLogin();
});
/* NO SE PUEDE PONER EN HEADER.JS O DEJA DE FUNCIONAR NO SE POR QUÉ */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>