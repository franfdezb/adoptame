<!doctype HTML>
<html>

<head>
    <?php include 'imports.php' ?>
    <title>Subir foto</title>
</head>

<body>
    <?php include 'header.php' ?>

    <div class="container">
        <div class="row">
            <div class="col-md text-center">
                <h3>Detalle de foto</h3>
            </div>
        </div>

        <hr>

        <form id="photo-form">
            <div class="row">
                <div class="col-md" id="errors-container">
                </div>
            </div>

            <div class="row">
                <div class="col-md text-center">
                    <img id="image" class="img-fluid">
                </div>
                <div class="col-md text-center">
                    <h5>Fecha: <span id="date"></span></h5>
                    <span>Descripción de la imagen:</span>
                    <textarea class="form-control" id="description-input" name="description"></textarea>
                    <hr>
                    <h3>Etiquetas:</h3>
                    <input type="text" class="form-control" id="tags-input" name="tags">
                    <br>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="private-input" name="private">
                        <label class="letra" for="private-input">Privada</label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md text-center">
                    <br>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </div>

        </form>
    </div>

    <?php include 'footer.php' ?>
    <script src="js/editPhoto.js"></script>

</body>