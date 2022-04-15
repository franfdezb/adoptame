<!doctype HTML>
<html lang="es">

<head>
  <?php include 'imports.php' ?>
  <title>Adoptar</title>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">
</head>

<body>
  <?php include 'header.php' ?>

  <div class="container" style="max-width: 680px !important">
    <div class="row">
            <div class="col-md" id="errors-container">
            </div>
    </div> <!--Contenedor-->
    <div class="row" id="row2" style="width: 100%; margin-left: 30px"> <!--Columba-->
	    <div class="col-md-9"> <!--Tamaño, columna tamaño 5 de 12(12 es el máximo)-->
            <div class="card bg-light">
                <article class="card-body mx-auto" style="max-width: 600px;">
	            <h5 class="card-title mt-3 text-center">Da un animal en adopción</h5>
                Fotos de animal
                <form action="/action_page.php">
                    <input type="file" id="myfile" name="myfile" multiple><br><br>
                </form>
                <div class="form-group">
                    <label>Introduzca nombre del animal</label>
                    <input required class="form-control" name="Nombre del animal" placeholder="Nombre del animal">
                </div>
                <p></p>
                <div class="form-group">
                    <label>Introduzca especie</label>
                    <input required class="form-control" name="Especie" placeholder="Especie">
                </div>
                <p></p>
                <div class="form-group">
                    <label>Introduzca raza</label>
                    <input required class="form-control" name="Raza" placeholder="Raza">
                </div>
                <p></p>
                <div>
                    <label>Introduzca tamaño</label>
                    <select class="form-control" >
                        <option value="0" class="form-control" >Pequeño</option>
                        <option value="1" class="form-control" >Mediano</option>
                        <option value="2" class="form-control" >Grande</option>
                    </select>
                </div>
                <p></p>
                <div class="form-group">
                    <label>Introduzca peso</label>
                    <input required class="form-control" name="Peso" placeholder="Peso">
                </div>
                <div>
                    <label>Introduzca sexo</label>
                    <select class="form-control" >
                        <option value="0" class="form-control" >Macho</option>
                        <option value="1" class="form-control" >Hembra</option>
                    </select>
                </div>
                <p></p>
                <div class="form-group">
                    <label for="start">Introduzca fecha de nacimiento del animal</label>
                    <input type="date" class="form-control" id="start" name="trip-start" value="<?php echo date("Y-m-d");?>" min="1990-01-01" max="<?php echo date("Y-m-d");?>">
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
                            <label for="scales">¿Está Estirilizado?</label>
                </div>
                <p></p>
                <div style="width: 100%" >
                            <input type="checkbox" id="checkboxChip">
                            <label for="scales">¿Tiene Microchip?</label>
                </div>
                <p></p>
                </article>
                <div class="form-group" style="width: 100%; margin-left: 30%;">
                            <button onclick="validateForm1()" class="button2"> CONFIRMAR ANIMAL </button>
                </div> <!-- form-group// -->    
  <!--container end.//-->

  <br><br>
			</div>
		</div>
  </div>

  <?php include 'footer.php' ?>
  <script src="js/adoptar.js"></script>
  	
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

</body>

</html>