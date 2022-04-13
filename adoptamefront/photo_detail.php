<!doctype HTML>
<html>

<head>
  <?php include 'imports.php' ?>
  <title>Detalles foto</title>
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

    <div class="row">

      <div class="col-md text-center">
      <a href="" id="userProfile"><img id="image" src="" class="img-fluid"></a>
      </div>

      <div class="col-md text-center">
        <h2 id="image-title"></h2>
        <h5 id="image-date"></h5>
        <span id="image-desc"></span><br>
        <span id="image-private"></span>

        <hr>

        <h3 id="image-score"></h3>
        <button type="button" class="btn btn-outline-success" id="like"><i class="fa fa-heart"></i> Me gusta</button>
        <button type="button" class="btn btn-outline-danger" id="dislike"><i class="fa fa-heart-o"></i> No me gusta</button>

        <hr>

        <h3>Etiquetas:</h3>
    
        <div id="image-tags">
        </div>
        
        <br>
      
        <hr>

        <h3>Acciones:</h3>

        <button onclick='editPhoto()' type="button" class="btn btn-outline-primary" id="noMostrarEdit"><i class="fa fa-file-photo-o"></i> Editar foto</button></a>
        <button onclick="deletePhoto()" type="button" class="btn btn-outline-danger" id="noMostrarEliminar"><i class="fa fa-remove"></i> Eliminar foto</button>

        <hr>

        <!--<h3>Añadir comentario:</h3>
        
        <div class="form-group">
          <label for="exampleFormControlTextarea1"></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <button type="button" class="btn btn-outline-success btn-sm espacio"><i class="fa fa-commenting"></i> Añadir comentario</button>
        </div>-->
      
      </div>

    </div>

    <hr>

    <div class="row">
      <div class="col-md text-center">
        <a href="index.php" class="btn btn-primary">Volver</a>
      </div>
    </div>

  </div>

  <?php include 'footer.php' ?>
  <script src="js/photoDetail.js"></script>
</body>

</html>