<div class="title-block" style="float: left; display: flex; background-color: #F1C232; width: 100%; height: calc(100% - 90%) !important;">
    <div class="column-left-right" style="float: left; width: 25%; position: relative;">
        <img src="images/redes.png" alt="redes" style="max-height: 47%;max-width: 40%;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;">
    </div>

    <div class="column-center" style="float: left; width: 50%;">
        <img src="images/banner.png" id="fotobanner" alt="banner" style="width: 65%; padding-top: 10px; padding-bottom: 10px;">
    </div>

    <div class="dropdown" style="float: left; width: 25%; position: relative;">
    <img src="images/perfil.png" id="fotoperfil" onclick="myFunction()" class="dropbtn" alt="redes" style="max-height: 50%;max-width: 33%;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;">
        <div id="myDropdown" class="dropdown-content">
            <a href="http://localhost:3000/login.php" id="optiononeprofile">Inicia sesión</a>
            <a href="http://localhost:3000/register.php" id="optiontwoprofile">Regístrate</a>
        </div>
    </div>
</div>

    <nav class="navbar navbar-expand-sm bg-light navbar-light" style="float: left; width: 100%; margin-bottom: 20px;">
        <a href="http://localhost:3000/index.php" class="button" id="button" style="width: 25%; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">INICIO</a>
        <a href="/about" class="button" id="button" style="width: 25%; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">PROTECTORAS</a>
        <a href="http://localhost:3000/adoptar.php" class="button" id="button" style="width: 25%; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">DA EN ADOPCIÓN</a>
        <a href="#" class="button" id="button" style="width: 25%; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">¿QUIÉNES SOMOS?</a>
        <button href="#" onclick="myFunction()" class="buttonmovil dropdown-toggle" id="buttonmenumovil" data-toggle="dropdown" style="width: 25%; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans; display: none;">MENÚ</button>
          <ul class="dropdown-menu dropdown-content" style="text-align: center; padding-right: initial; margin-block: initial">
            <li><a id="optionthreeprofile" style="font-weight: bold" href="http://localhost:3000/register.php">REGÍSTRATE</a></li>
            <li><a id="optionfourprofile" style="font-weight: bold" href="http://localhost:3000/login.php">INICIA SESIÓN</a></li>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Protectoras</a></li>
            <li><a href="http://localhost:3000/adoptar.php">Dar en adopción</a></li>
            <li><a href="#">¿Quiénes somos?</a></li>
          </ul>
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