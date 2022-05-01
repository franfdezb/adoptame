<!doctype HTML>
<html lang="es">

<head>
  <?php include 'imports.php' ?>
  <title>ADÓPTAME! Inicio</title>
</head>

<body style="text-align: center">
  <?php include 'header.php' ?>

  <select class="form-control1" id="filtrarindex" style="text-align: center !important; margin-bottom: 12px !important; width: 15%; display: initial;"> <option value="filtrar">Tipo de animal</option>
   <option value="Perro">Perro</option> 
   <option value="Gato">Gato</option> 
   <option value="Otro">Otro</option>
   <option value="------">----------</option>
   <option value="Andalucía">Andalucía</option> 
   <option value="Aragón">Aragón</option> 
   <option value="Asturias">Asturias</option>
   <option value="Baleares">Baleares</option> 
   <option value="Canarias">Canarias</option> 
   <option value="Cantabria">Cantabria</option>
   <option value="Castilla y León">Castilla y León</option> 
   <option value="Castilla-La Mancha">Castilla-La Mancha</option> 
   <option value="Cataluña">Cataluña</option>
   <option value="Comunitat Valenciana">Comunitat Valenciana</option> 
   <option value="Extremadura">Extremadura</option> 
   <option value="Galicia">Galicia</option>
   <option value="Madrid">Madrid</option>
   <option value="Murcia">Murcia</option>
   <option value="Navarra">Navarra</option>
   <option value="País Vasco">País Vasco</option>
   <option value="La Rioja">La Rioja</option>
   <option value="Ceuta">Ceuta</option>
   <option value="Melilla">Melilla</option>
  </select>
  
  <div id="contenedorfotos" style="width: 95%;text-align: center; margin: 0 auto;">
  </div>

  <div class="clearfix"></div>

  <button class="buttonmovil dropdown-toggle" id="cargarmas" onclick="loadMoreAnimals()" style="margin-top: 10px; margin-bottom: 10px; padding-left: 10px; padding-right: 10px; text-align: center; color: black !important; font-weight: bold; font-family: Open Sans;">CARGAR MÁS</button>

  <?php include 'footer.php' ?>

  <script src="js/index.js"></script>

</body>

</html>