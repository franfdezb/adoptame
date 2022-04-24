<!doctype HTML>
<html lang="es">

<head>
  <?php include 'imports.php' ?>
  <title>Adoptar</title>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">
</head>

<body>
  <?php include 'header.php' ?>

  <div class="container" style="max-width: 680px !important">
    <div class="row">
            <div class="col-md" id="errors-container">
            </div>
    </div> <!--Contenedor-->
    <div class="row" id="row2" style="width: 100%; margin-left: 30px; margin-right: -38px;"> <!--Columba-->
	    <div class="col-md-9"> <!--Tamaño, columna tamaño 5 de 12(12 es el máximo)-->
            <div class="card bg-light">
                <article class="card-body mx-auto" style="max-width: 680px; margin-left: 0px !important; margin-right: 0px !important;">
                <img src="images/logocirculo.png" style="width:130px; margin: auto; display: block;"></img>
	            <h4 id="tituloformulario" class="card-title mt-3 text-center"></h4>
                <div class="form-group">
                    <label>Nombre del animal (*)</label>
                    <input required class="form-control" name="Nombre del animal" id="animalname" placeholder="Nombre del animal">
                </div>
                <p></p>
                <div class="form-group">
                    <label>Especie</label>
                    <select class="form-control" id="specie">
                        <option value="Gato">Gato</option>
                        <option value="Perro">Perro</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <p></p>
                <div class="form-group">
                    <label>Raza</label>
                    <input required class="form-control" name="Raza" id="raze" placeholder="Raza (pastor alemán, labrador,...)">
                </div>
                <p></p>
                <div class="form-group">
                    <label>Provincia donde se encuentra</label>
                    <select required name="provincia" class="form-control" id="address">
                        <option value="">Elige Provincia</option>
                        <option value="Álava/Araba">Álava/Araba</option>
                        <option value="Albacete">Albacete</option>
                        <option value="Alicante">Alicante</option>
                        <option value="Almería">Almería</option>
                        <option value="Asturias">Asturias</option>
                        <option value="Ávila">Ávila</option>
                        <option value="Badajoz">Badajoz</option>
                        <option value="Baleares">Baleares</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Burgos">Burgos</option>
                        <option value="Cáceres">Cáceres</option>
                        <option value="Cádiz">Cádiz</option>
                        <option value="Cantabria">Cantabria</option>
                        <option value="Castellón">Castellón</option>
                        <option value="Ceuta">Ceuta</option>
                        <option value="Ciudad Real">Ciudad Real</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Cuenca">Cuenca</option>
                        <option value="Gerona/Girona">Gerona/Girona</option>
                        <option value="Granada">Granada</option>
                        <option value="Guadalajara">Guadalajara</option>
                        <option value="Guipúzcoa/Gipuzkoa">Guipúzcoa/Gipuzkoa</option>
                        <option value="Huelva">Huelva</option>
                        <option value="Huesca">Huesca</option>
                        <option value="Jaén">Jaén</option>
                        <option value="La Coruña/A Coruña">La Coruña/A Coruña</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Las Palmas">Las Palmas</option>
                        <option value="León">León</option>
                        <option value="Lérida/Lleida">Lérida/Lleida</option>
                        <option value="Lugo">Lugo</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Málaga">Málaga</option>
                        <option value="Melilla">Melilla</option>
                        <option value="Murcia">Murcia</option>
                        <option value="Navarra">Navarra</option>
                        <option value="Orense/Ourense">Orense/Ourense</option>
                        <option value="Palencia">Palencia</option>
                        <option value="Pontevedra">Pontevedra</option>
                        <option value="Salamanca">Salamanca</option>
                        <option value="Segovia">Segovia</option>
                        <option value="Sevilla">Sevilla</option>
                        <option value="Soria">Soria</option>
                        <option value="Tarragona">Tarragona</option>
                        <option value="Tenerife">Tenerife</option>
                        <option value="Teruel">Teruel</option>
                        <option value="Toledo">Toledo</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Valladolid">Valladolid</option>
                        <option value="Vizcaya/Bizkaia">Vizcaya/Bizkaia</option>
                        <option value="Zamora">Zamora</option>
                        <option value="Zaragoza">Zaragoza</option>
                    </select>
                </div>
                <p></p>
                <div>
                    <label>Tamaño</label>
                    <select class="form-control" id="size">
                        <option value="0" class="form-control" >Pequeño</option>
                        <option value="1" class="form-control" >Mediano</option>
                        <option value="2" class="form-control" >Grande</option>
                    </select>
                </div>
                <p></p>
                <div class="form-group">
                    <label>Peso</label>
                    <input required class="form-control" name="Peso" id="weight" placeholder="Peso">
                </div>
                <div>
                    <label>Sexo</label>
                    <select class="form-control" id="gender">
                        <option value="0" class="form-control">Macho</option>
                        <option value="1" class="form-control">Hembra</option>
                    </select>
                </div>
                <p></p>
                <div class="form-group">
                    <label for="start">Fecha de nacimiento del animal</label>
                    <input type="date" class="form-control" id="fechanacimiento" name="trip-start" value="<?php echo date("Y-m-d");?>" min="1990-01-01" max="<?php echo date("Y-m-d");?>">
                </div>
                <p></p>
                <div style="width: 100%" >
                            <input type="checkbox" id="checkboxVacuna">
                            <label for="scales">¿Está vacunado?</label>
                </div>
                <p></p>
                <div style="width: 100%" >
                            <input type="checkbox" id="checkboxParasito">
                            <label for="scales">¿Está desparasitado?</label>
                </div>
                <p></p>
                <div style="width: 100%" >
                            <input type="checkbox" id="checkboxEsteril">
                            <label for="scales">¿Está esterilizado?</label>
                </div>
                <p></p>
                <div style="width: 100%" >
                            <input type="checkbox" id="checkboxChip">
                            <label for="scales">¿Tiene microchip?</label>
                </div>
                <p></p>
                <div class="form-group">
                    <label>Información adicional</label>
                    <input required class="form-control" name="masinfo" id="moreinfo" placeholder="Si quieres contar algo más ponlo aquí">
                </div>
                <p></p>
                <div style="width: 100%" >
                            <input type="checkbox" id="checkboxAdoptado">
                            <label for="scales">Marca este cuadro si el animal ha sido adoptado</label>
                </div>
                </article>
                <h7 style="width: 100%; padding-bottom: 15px; text-align: center;">(*) Campos obligatorios</h7>
                <div class="form-group" style="width: 100%; text-align: center;">
                            <button onclick="validateForm1()" class="button2"> CONFIRMAR ANIMAL </button>
                </div> <!-- form-group// -->    
  <!--container end.//-->

  <br><br>
			</div>
		</div>
  </div>
  </div>

  <?php include 'footer.php' ?>
  <script src="js/editaranimal.js"></script>
  	
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

</body>

</html>