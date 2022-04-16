<!doctype HTML>
<html lang="es">

<head>
  <?php include 'imports.php' ?>
  <title>Registro</title>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">
</head>

<body>
  <?php include 'header.php' ?>

  <div class="container">
    <div class="row">
            <div class="col-md" id="errors-container"></div>
    </div> <!--Contenedor-->
    <div class="row"> <!--Columba-->
	    <div class="col-md-9 mr-auto ml-auto no-login-msg text-center"> <!--Tamaño, columna tamaño 5 de 12(12 es el máximo)-->
            <div class="card bg-light">
                <article class="card-body mx-auto" style="max-width: 600px;">
                <img src="images/logocirculo.png" style="width:130px"></img>
	            <h4 class="card-title mt-3 text-center">Crea tu cuenta</h4>
	            <form onsubmit="return false">
	                <div class="form-group input-group">
		                <div class="input-group-prepend">
		                    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		                </div>
                        <input name="" class="form-control" placeholder="Nombre (*)" id="name" type="text">
                    </div> <!-- form-group// -->
                    <div class="form-group input-group">
		                <div class="input-group-prepend">
		                    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		                </div>
                        <input name="" class="form-control" placeholder="Apellidos (*)" id="apellidos" type="text">
                    </div> <!-- form-group// -->
                    <div class="form-group input-group">
    	                <div class="input-group-prepend">
		                    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		                </div>
                        <input name="" class="form-control" placeholder="Introduce tu correo electrónico (*)" id="email" type="email">
                    </div> <!-- form-group// -->
                    <div class="form-group input-group">
    	                <div class="input-group-prepend">
		                    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
		                </div>
		                <select class="custom-select" style="max-width: 120px;">
		                    <option selected="">+034</option>
		                </select>
    	                <input name="" class="form-control" placeholder="Número de teléfono (*)" id="telefono" type="text">
                    </div> <!-- form-group// -->
                    <div class="form-group input-group">
		                <div class="input-group-prepend">
		                    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		                </div>
                        <input name="" class="form-control" placeholder="Introduce un usuario (*)" id="usuario" type="text">  
                        <div class="form-group input-group usuario">
    	                    <div class="input-group-prepend">
		                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		                    </div>
                            <input class="form-control" placeholder="Crea una contraseña (*)" id="password1" type="password">
                        </div> <!-- form-group// -->
                        <div class="form-group input-group">
    	                    <div class="input-group-prepend">
		                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		                    </div>
                            <input class="form-control" placeholder="Repite contraseña (*)" id="password2" type="password">
                        </div> <!-- form-group// -->   
                        <div style="width: 100%" >
                            <input type="checkbox" id="checkboxRefugio">
                            <label for="scales">¿Eres encargado de una protectora?</label>
                        </div>
                        <h7 style="width: 100%; padding-bottom: 10px;">(*) Campos obligatorios</h7>

                        <div class="form-group" style="width: 100%; margin-left: 80px; margin-right: 80px;">
                            <button onclick="validateForm1()" class="button2"> REGÍSTRATE </button>
                        </div> <!-- form-group// -->    
                                                               
                </form>      
                </article>
            </div> <!-- card.// -->
                <p class="text-center espacio col-md text-center">¿Tienes una cuenta? <a href="login.php">Login</a> </p> 
            </div> 
  <!--container end.//-->

  <br><br>
			</div>
		</div>
  </div>

  <?php include 'footer.php' ?>
  <script src="js/register.js"></script>
  	
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js"></script>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

</body>

</html>