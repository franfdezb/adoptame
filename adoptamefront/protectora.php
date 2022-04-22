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
    <div class="column-left boxeoprotectora">
        <p style="margin-top: 15px;">
        <a href="#" class="buttonperfilanimal" id="button" style="text-align: center; color: black !important; font-weight: bold; font-size: 120%; font-family: Open Sans; padding: 14px 10px;">VER ANIMALES</a>
        <a href="#" class="buttonperfilanimal" id="button" style="text-align: center; color: black !important; font-weight: bold; font-size: 120%; font-family: Open Sans; padding: 14px 10px">DONA</a>
        </p>
        <img id="primeraimagen"></img>
        <h3 id="name"></h3>
    </div>

    <div class="column-center boxeoprotectora">
        <div id="cuadrado">
            <span style="font-size: 25px;">Lugar: </span>
            <img src="/images/banderaespaña.png" style="width: 40px; height: 30px">
            <span style="font-size: 25px;" id="lugar"></span>
            <h5 id="address">Dirección: </h5>
        </div>
        <h5 id="masinfo"></h5>
    </div>

    <div class="column-right boxeoprotectora">
        <div class="buttonperfilanimal" style="padding: 9px 10px !important; background-color: #FFFCBD !important;">
            <h5 id="peso" style="padding-bottom: 15px;"><b>INFORMACIÓN DE CONTACTO</b></h5>
            <h5 id="email">E-mail: </h5>
            <h5 id="telephone">Teléfono: </h5>
        </div>
    </div>
   </div>

  <?php include 'footer.php' ?>
  <script src="js/protectora.js"></script>
  	
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
</body>
</html>