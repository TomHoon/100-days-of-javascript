let rangeWidth = document.querySelector(".range-width");
let rangeHeight = document.querySelector(".range-height");

let widthValue = document.querySelector("#width-value");
let heightValue = document.querySelector("#height-value");

let createBtn = document.querySelector(".create-btn");
let clearBtn = document.querySelector(".clear-btn");
let colorBtn = document.querySelector("#color-btn");
let eraseBtn = document.querySelector(".erase-btn");
let paintBtn = document.querySelector(".paint-btn");

let container = document.querySelector(".container");

let mode = 'paint';
let color = colorBtn.value;
let drawMode = false;

paintBtn.addEventListener('click', () => {
 mode = 'paint';
})

eraseBtn.addEventListener('click', () => {
 mode = 'erase';
})

colorBtn.addEventListener('input', (e) => {
 color = e.target.value;
})

// Create Grid
createBtn.addEventListener('click', () => {
 container.innerHTML = '';

 let rowDiv;

 for (let row = 0; row <= widthValue.textContent; row ++) {
  rowDiv = document.createElement("div");
  rowDiv.className = "row";
 
  for (let col = 0; col <= heightValue.textContent; col ++) {
   let colDiv = document.createElement("div");

   colDiv.addEventListener('mousedown', () => {
    drawMode = true;

    if (mode == 'paint') {
     // colDiv.style.background = color;
     colDiv.style.background = color;
     console.log('color ', color);
    } else if (mode == 'erase'){
     colDiv.style.background = 'transparent';
    }
   });
   colDiv.addEventListener('mouseup', () => {
    drawMode = false;
   });

   colDiv.className = `row${row}-col${col}`;

   // mousemove
   colDiv.addEventListener('mousemove', (e) => {
    const element = document.elementFromPoint(e.clientX, e.clientY);

    if (mode == 'paint' && drawMode) {
     element.style.background = color;

    } else if (mode == 'erase' && drawMode) {
     element.style.background = 'transparent';
    }
   });
   rowDiv.appendChild(colDiv);
  }
  
  container.appendChild(rowDiv);
 }
});









// 
rangeWidth.addEventListener('change', (e) => {
 widthValue.innerHTML = e.target.value;
});

rangeHeight.addEventListener('change', (e) => {
 heightValue.innerHTML = e.target.value;
});

