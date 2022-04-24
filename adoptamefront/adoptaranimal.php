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
                    <label>Nombre</label>
                    <input required class="form-control" name="Peso" id="nombre" placeholder="Nombre" disabled>
                </div>
                <div class="form-group">
                    <label>Apellidos</label>
                    <input required class="form-control" name="Peso" id="apellidos" placeholder="Apellidos" disabled>
                </div>
                <div class="form-group">
                    <label>Dirección de correo electrónico</label>
                    <input required class="form-control" name="Peso" id="email" placeholder="Correo electrónico" disabled>
                </div>
                <div class="form-group">
                    <label>Número de teléfono</label>
                    <input required class="form-control" name="Peso" id="telefono" placeholder="Teléfono"disabled>
                </div>
                <div class="form-group">
                    <label>Documento Nacional de Identidad (DNI)</label>
                    <input required class="form-control" name="Peso" id="dni" placeholder="DNI">
                </div>
                <p></p>
                <div class="form-group">
                    <label>Información adicional</label>
                    <input required class="form-control" name="masinfo" id="moreinfo" placeholder="Si quieres contar algo más ponlo aquí">
                </div>
                <p></p>
                <div style="width: 100%" >
                            <input type="checkbox" id="checkboxVacuna"> Me comprometo a cuidar del animal en todo momento y a no abandonarlo.</input>
                </div>
                <p></p>
                </article>
                <h7 style="width: 100%; padding-bottom: 15px; text-align: center;">(*) Campos obligatorios</h7>
                <div class="form-group" style="width: 100%; text-align: center;">
                            <button onclick="validateForm1()" class="button2"> CONFIRMAR </button>
                </div> <!-- form-group// -->    
  <!--container end.//-->

  <br><br>
			</div>
		</div>
  </div>
  </div>

  <?php include 'footer.php' ?>
  <script src="js/adoptaranimal.js"></script>
  	
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

</body>

</html>