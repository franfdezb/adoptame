<!doctype HTML>
<html lang="es">

<head>
  <?php include 'imports.php' ?>
  <title>ADÓPTAME! Inicio</title>
</head>

<body style="text-align: center">
  <?php include 'header.php' ?>

  <select class="form-control1" id="filtrarindex" style="text-align: center !important; margin-bottom: 12px !important; width: 15%; display: initial;"> <option value="filtrar">Filtrar por</option> <option value="Perro">Perro</option> <option value="Gato">Gato</option> <option value="Otro">Otro</option> </select>
  
  <div id="contenedorfotos" style="width: 95%;text-align: center; margin: 0 auto;">
  </div>

  <div class="clearfix"></div>

  <button class="buttonmovil dropdown-toggle" id="cargarmas" onclick="loadMoreAnimals()" style="margin-top: 10px; margin-bottom: 10px; padding-left: 10px; padding-right: 10px; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">CARGAR MÁS</button>

  <?php include 'footer.php' ?>

  <script src="js/index.js"></script>

</body>

</html>