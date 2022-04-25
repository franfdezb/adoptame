<!DOCTYPE html>
<html style="background-color: #EDEDED; width: 100%;" lang="en">
<head>
  <?php include 'imports.php' ?>
  <title>Adoptar</title>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">
</head>
<body>

  <?php include 'header.php' ?>
  <div class="padre" style="float: left; display: flex; width: 100%; height: calc(100% - 90%) !important; margin-bottom: 25px; padding-left: 6px;">
    <div class="column-left boxeo">
        <p style="margin-top: 15px;">
        <a class="buttonperfilanimal" id="buttonadoptar" style="text-align: center; color: black !important; font-weight: bold; font-size: 120%; font-family: Open Sans; padding: 14px 10px;"></a>
        <a href="#" class="buttonperfilanimal" id="buttonapadrinar" style="text-align: center; color: black !important; font-weight: bold; font-size: 120%; font-family: Open Sans; padding: 14px 10px"></a>
        </p>
        <img id="primeraimagen"></img>
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
            <h5 id="peso" style="padding-bottom: 15px;"><b>INFORMACIÓN SANITARIA</b></h5>
            <h5 id="vacunado">Vacunado: </h5>
            <h5 id="desparasitado">Desparasitado: </h5>
            <h5 id="esterilizado">Esterilizado: </h5>
            <h5 id="microchip">Microchip: </h5>
        </div>
    </div>
   </div>

  <?php include 'footer.php' ?>
  <script src="js/animal.js"></script>
  	
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
</body>
</html>