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
	            <h4 class="card-title mt-3 text-center">Da un animal en adopción</h4>
                Fotos de animal
                <form action="/action_page.php">
                    <input type="file" onchange="encodeImageFileAsURL(this)" id="myfile" accept="image/*" name="myfile" multiple><br><br>
                </form>
                <div class="form-group">
                    <label>Introduzca nombre del animal (*)</label>
                    <input required class="form-control" name="Nombre del animal" id="animalname" placeholder="Nombre del animal">
                </div>
                <p></p>
                <div class="form-group">
                    <label>Introduzca especie</label>
                    <input required class="form-control" name="Especie" id="specie" placeholder="Especie (gato, perro, ...)">
                </div>
                <p></p>
                <div class="form-group">
                    <label>Introduzca raza</label>
                    <input required class="form-control" name="Raza" id="raze" placeholder="Raza (pastor alemán, labrador,...)">
                </div>
                <p></p>
                <div>
                    <label>Introduzca tamaño</label>
                    <select class="form-control" id="size">
                        <option value="0" class="form-control" >Pequeño</option>
                        <option value="1" class="form-control" >Mediano</option>
                        <option value="2" class="form-control" >Grande</option>
                    </select>
                </div>
                <p></p>
                <div class="form-group">
                    <label>Introduzca peso</label>
                    <input required class="form-control" name="Peso" id="weight" placeholder="Peso">
                </div>
                <div>
                    <label>Introduzca sexo</label>
                    <select class="form-control" id="gender">
                        <option value="0" class="form-control">Macho</option>
                        <option value="1" class="form-control">Hembra</option>
                    </select>
                </div>
                <p></p>
                <div class="form-group">
                    <label for="start">Introduzca fecha de nacimiento del animal</label>
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
  <script src="js/darenadopcion.js"></script>
  	
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

</body>

</html>