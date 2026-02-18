const container = document.getElementById("container");

const tempHold = document.createDocumentFragment();

const sideLength = 16;

numCells = sideLength * sideLength;

for (let i = 0; i < numCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    tempHold.appendChild(cell);
}

container.appendChild(tempHold);