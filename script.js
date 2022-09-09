const gridContainer = document.getElementById("grid-container");

const length = 16
const gridSize = length * length

for ( let i = 0; i < gridSize; i++ ) {
    let cell = document.createElement("div");

    cell.classList.add("grid-item");    // add class

    gridContainer.appendChild(cell);

    
}

