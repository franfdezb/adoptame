<!doctype HTML>
<html lang="es">

<head>
  <?php include 'imports.php' ?>
  <title>ADÓPTAME! Inicio</title>
</head>

<body style="text-align: center">
  <?php include 'header.php' ?>

  <div class="container" style="max-width: 700px !important">
    <div class="row">
            <div class="col-md" id="errors-container"></div>
    </div> <!--Contenedor-->
    <div class="row"> <!--Columba-->
	    <div class="col-md-9 mr-auto ml-auto no-login-msg text-center"> <!--Tamaño, columna tamaño 5 de 12(12 es el máximo)-->
            <div class="card bg-light">
                <article class="card-body mx-auto" style="max-width: 600px;">
                <img src="images/logocirculo.png" style="width:130px"></img>
	            <h4 id="tituloformulario" class="card-title mt-3 text-center">Solicitudes de adopción de </h4>
                
                <div id="contenedorsolicitudes" style="width: 95%;text-align: center; margin: 0 auto;">
                
                </article>
            </div> <!-- card.// -->
            </div> 
  <!--container end.//-->

  <br><br>
			</div>
		</div>
  </div>

  </div>

  <div class="clearfix"></div>

  <?php include 'footer.php' ?>

  <script src="js/solicitudesanimal.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>


  <style>
        @media (max-width: 767px){
            .col-md-9 { margin-left: 0px !important;}
        }
    </style>

</body>

</html>