<!DOCTYPE html>
<html style="background-color: #EDEDED; width: 100%;" lang="en">
<head>
  <?php include 'imports.php' ?>
  <title>Adoptar</title>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>

  <?php include 'header.php' ?>
  <div class="padre" style="float: left; display: flex; width: 100%; height: calc(100% - 90%) !important; margin-bottom: 25px; padding-left: 6px;">
    <div class="column-left boxeo">
        <p style="margin-top: 15px;">
        <a class="buttonperfilanimal" id="buttonadoptar" style="text-align: center; color: black !important; font-weight: bold; font-size: 120%; font-family: Open Sans; padding: 14px 10px;"></a>
        <a href="#" class="buttonperfilanimal" id="buttonapadrinar" style="text-align: center; color: black !important; font-weight: bold; font-size: 120%; font-family: Open Sans; padding: 14px 10px"></a>
        </p>
        <div class="w3-content w3-display-container">
            <img class="mySlides" id="primeraimagen"></img>
            <img class="mySlides" id="segundaimagen"></img>
            <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
            <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
        </div>
        <h3 id="name"></h3>
        <h4 id="gender"></h4>
        <a href="#" class="buttonperfilanimal" id="buttonsolicitudes" style="text-align: center; color: black !important; font-weight: bold; font-size: 120%; font-family: Open Sans; padding: 14px 10px"></a>
    </div>

    <div class="column-center boxeo">
        <div id="cuadrado">
            <h5 id="adoptionStatus">Estado: </h5>
            <span>Lugar: </span>
            <img src="/images/banderaespaña.png" style="width: 40px; height: 30px">
            <span id="lugar"></span>
        </div>
        <div id="cuadradoinfo" class="buttonperfilanimal1" style="padding: 9px 10px !important; background-color: #FFFCBD !important;">
            <h5 id="especie"></h5>
            <h5 id="raza"></h5>
            <h5 id="fecha"></h5>
            <h5 id="tamaño"></h5>
            <h5 id="peso"></h5>
        </div>
        <h5 id="masinfo"></h5>
    </div>

    <div class="column-right boxeo">
        <div class="buttonperfilanimal1" style="padding: 9px 10px !important; background-color: #FFFCBD !important;">
            <h5 style="padding-bottom: 15px;"><b>INFORMACIÓN SANITARIA</b></h5>
            <h5 id="vacunado">Vacunado: </h5>
            <h5 id="desparasitado">Desparasitado: </h5>
            <h5 id="esterilizado">Esterilizado: </h5>
            <h5 id="microchip">Microchip: </h5>
        </div>
        <div class="buttonperfilanimal1" id="donaciones" style="max-width: 290px; padding: 9px 10px !important; background-color: #FFFCBD !important;">
            <h5 id="donar" style="padding-bottom: 15px;"><b>INFORMACIÓN DE CONTACTO</b></h5>
            <h5 id="emailpaypal"></h5>
        </div>
    </div>
   </div>

  <?php include 'footer.php' ?>
  <script src="js/animal.js"></script>
  	
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

  <style>
    .mySlides {display:none;}
  </style>

<script>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
</script>
</body>
</html>