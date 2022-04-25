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
                    <label>Introduzca nombre del refugio/protectora (*)</label>
                    <input required class="form-control" name="Nombre del animal" id="refugename" placeholder="Nombre del refugio">
                </div>
                <p></p>
                <div class="form-group">
                    <label>Introduce la dirección (*)</label>
                    <input required class="form-control" name="Raza" id="address" placeholder="Dirección completa del refugio/protectora">
                </div>
                <p></p>
                <div class="form-group">
                    <label>Introduce la provincia donde se encuentra (*)</label>
                    <select required name="provincia" class="form-control" id="city">
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
                <div class="form-group">
                    <label>Introduce el e-mail (*)</label>
                    <input required class="form-control" name="Peso" id="email" placeholder="E-mail">
                </div>
                <p></p>
                <div class="form-group">
                    <label>Introduce el teléfono (*)</label>
                    <input required class="form-control" name="Peso" id="telephone" placeholder="Teléfono">
                </div>
                <div class="form-group">
                    <label>Si quieres recibir donaciones, pon aquí una cuenta bancaria</label>
                    <input required class="form-control" name="cuentabancaria" id="bankaccount" placeholder="Cuenta bancaria">
                </div>
                <p></p>
                <div class="form-group">
                    <label>Información adicional</label>
                    <input required class="form-control" name="masinfo" id="moreinfo" placeholder="Si quieres contar algo más ponlo aquí">
                </div>
                </article>
                <h7 style="width: 100%; padding-bottom: 15px; text-align: center;">(*) Campos obligatorios</h7>
                <div class="form-group" style="width: 100%; text-align: center;">
                            <button onclick="validateForm1()" class="button2"> CREAR PROTECTORA </button>
                </div> <!-- form-group// -->    
  <!--container end.//-->

  <br><br>
			</div>
		</div>
  </div>
  </div>

  <?php include 'footer.php' ?>
  <script src="js/editarprotectora.js"></script>
  	
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

</body>

</html>