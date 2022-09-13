// globals
const gridContainer = document.getElementById("grid-container");
const colourPicker = document.getElementById("colour-picker");
const paintBrush = document.getElementById("paint-brush");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const sliderValue = document.getElementById("slider-value");
const slider = document.getElementById("slider");
const gridLines = document.getElementById("grid-lines");

let draw = true;
let colour = "black";

function setupGrid(length) {
    // if gridContainer has children, remove all before changing grid size
    // textContent represents the text and also its DESCENDANTS nodes
    if (gridContainer.hasChildNodes()) {
        gridContainer.textContent = "";     // remove the (cell) child nodes 
    }

    let gridSize = length * length;
    
    for ( let i = 0; i < gridSize; i++ ) {
        let cell = document.createElement("div");
    
        cell.classList.add("grid-item");    // add class
    
        gridContainer.appendChild(cell);
        
        // draw
        cell.addEventListener("mouseover", () => {
            if (draw) {
                cell.style.background = colour;
            } else {
                cell.style.background = "white";
            }
        });

        // cell.addEventListener("mouseout", () => {
        //     cell.style.background = "white";
        // });
        
    }

    // grid-template-columns: repeat(16, 1fr)
    gridContainer.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
}

// colour picker
colourPicker.addEventListener("change", () => {
    colour = colourPicker.value;
})

// black ink
paintBrush.addEventListener("click", () => draw = true);

// eraser
eraser.addEventListener("click", () => draw = false);

// grid lines
gridLines.addEventListener("click", () => {
    let cellNodeList = gridContainer.children;
    cellList = [...cellNodeList];   // use spread notation to change to array
    
    cellList.forEach(cell => {
        if (cell.style.outline) {
            cell.style.outline = null; 
        } else {
            cell.style.outline =  "1px solid grey";
        }
    });  
}); 

// clear grid
clear.addEventListener("click", () => {
    setupGrid(slider.value);
});

// change grid size on slider event
slider.addEventListener("change", () => {
    setupGrid(slider.value);    // pass value attribute

    // update slider value
    sliderValue.textContent = `Grid size: ${slider.value} x ${slider.value}`;    
});


// initial setup
setupGrid(16);
// run once to display slider value
sliderValue.textContent = `Grid size: ${slider.value} x ${slider.value}`;    
