<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link rel="stylesheet" href="index.css">
 <title>Document</title>
</head>
<body>
 <div class="wrapper">
  
  <!-- ?: options1 -->
  <div class="options">
    
   <div class="options-wrapper">
    <div class="slider">
     <label for="grid-width">Grid Width</label>
     <input type="range" class="range-width" min="1" max="35">
    </div>
    <div class="slider">
     <label for="grid-height">Grid Height</label>
     <input type="range" class="range-height" min="1" max="35">
    </div>
   </div>

   <div class="options-wrapper">
     <button class="create-btn">Create Grid</button>
     <button class="clear-btn">Clear Grid</button>
     <input type="color" name="color" id="color-btn">
     <button class="erase-btn">Erase</button>
     <button class="paint-btn">Paint</button>
   </div>

  </div>


  <div class="container"></div>
 </div>
</body>
</html>