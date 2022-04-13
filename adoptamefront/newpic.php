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
                <h3>Nueva imagen</h3>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-md" id="errors-container"></div>
        </div>

        <form>
            <div class="row">
                <div class="col-md">
                    <div class="form-group">
                        <label for="url-input letra" class="letra">URL:</label>
                        <input type="text" class="form-control" id="url-input" name="url" placeholder="URL">
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-group">
                        <label for="title-input" class="letra">Título:</label>
                        <input type="text" class="form-control" id="title-input" name="title" placeholder="Título">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md">
                    <div class="form-group">
                        <label for="description-input" class="letra">Descripción:</label>
                        <textarea class="form-control" id="description-input" name="description"
                            placeholder="Descripción"></textarea>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-group">
                        <label for="tags-input" class="letra">Etiquetas (separadas por comas):</label>
                        <input type="text" class="form-control" id="tags-input" name="tags"
                            placeholder="animales, paisaje, comida">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="private-input" name="private">
                        <label class="letra" for="private-input">Privada</label>
                    </div>
                </div>
                <div class="col-md">
                </div>
            </div>
            <div class="row">
                <div class="col-md text-center">
                    <button type="submit" class="btn btn-primary">Enviar foto</button>
                </div>
            </div>
        </form>

    </div>

    <?php include 'footer.php' ?>
    <script src="js/createPhoto.js"></script>
</body>