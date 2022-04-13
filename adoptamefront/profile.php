<!DOCTYPE html>
<html lang="es">

<head>
    <?php include 'imports.php' ?>
    <title>Mi perfil</title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>

<body>
    <?php include 'header.php' ?>


    <div class="row py-5 px-4">
        <div class="col-xl-4 col-md-6 col-sm-10 mx-auto">

            <!-- Profile widget -->
            <div class="bg-white shadow rounded overflow-hidden">
                <div class="px-4 pt-0 pb-4 bg-dark">
                    <div class="media align-items-end profile-header">
                        <div class="media-body mb-5 text-white">
                            <h6 class="mt-0 mb-0" id="username">
                                </h4>
                        </div>
                        </hr>
                        <div class="media-body mb-5 text-white">
                            <h6 class="mt-0 mb-0" id="email"></h6>
                        </div>
                    </div>
                </div>

                <div class="bg-light p-4 d-flex justify-content-end text-center">
                    <ul class="list-inline mx-auto" id="seguimiento">
                    </ul>
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                            <h5 class="font-weight-bold mb-0 d-block" id="numeroFotos"></h5><small class="text-muted"> <i class="fa fa-picture-o mr-1"></i>Fotos</small>
                        </li>
                    </ul>
                </div>

                <div class="py-4 px-4">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h5 class="mb-0">Fotos recientes</h5><a href="profile_collection.php" class="btn btn-link text-muted" id="todaslasfotos">Mostrar todas las fotos</a>
                    </div>
                    <div class="row" id="recentPhotos">
                        <!-- Fotos añadidas, últimas 4 -->
                    </div>
                </div>
            </div>

        </div>
    </div>
    <?php include 'footer.php' ?>
    <script src="js/profile.js"></script>
</body>

</html>