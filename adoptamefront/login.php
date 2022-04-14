<!DOCTYPE html>
<html lang="es">

<head>
    <?php include 'imports.php' ?>
    <title>Login</title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

</head>

<body>
    <?php include 'header.php' ?>
    <div class="container">
        <div class="row">
            <div class="col-md text-center">
                <h3>Inicio de sesión</h3>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md" id="errors-container">
            </div>
        </div>
        <form onsubmit="return validateForm()">
            
                <div class="col-md">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">@</div>
                            </div>
                            <input type="email" required class="form-control" id="email" name="email" placeholder="Email">
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-group">
                        <label for="password">Contraseña:</label>
                        <input type="password" required class="form-control" id="password" name="password" placeholder="Contraseña">
                    </div>
                </div>
            
            <div class="row">
                <div class="col-md text-center">
                    <button type="submit" class="button2">LOGIN</button>
                </div>
            </div>
        </form>

    </div>
    <?php include 'footer.php' ?>
    <script src="js/login.js"></script>
    <script>
    </script>
</body>



</html>