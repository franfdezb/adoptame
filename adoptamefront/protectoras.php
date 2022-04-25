<!doctype HTML>
<html lang="es">

<head>
  <?php include 'imports.php' ?>
  <title>ADÓPTAME! Inicio</title>
</head>

<body style="text-align: center">
  <?php include 'header.php' ?>

  <a href="http://localhost:3000/crearprotectora.php" class="buttonperfilanimal" id="button" style="width: 25%; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">CREAR PROTECTORA</a>
  
  <div id="contenedorfotos" style="width: 95%;text-align: center; margin: 0 auto; margin-top: 15px;">
  </div>

  <div class="clearfix"></div>

  <button class="buttonmovil dropdown-toggle" id="cargarmas" onclick="loadMoreAnimals()" style="margin-top: 10px; margin-bottom: 10px; padding-left: 10px; padding-right: 10px; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">CARGAR MÁS</button>

  <?php include 'footer.php' ?>

  <script src="js/protectoras.js"></script>

</body>

</html>