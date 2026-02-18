const container = document.getElementById("container");

const tempHold = document.createDocumentFragment();

const numberOfDivs = 256;

for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    tempHold.appendChild(cell);
}

container.appendChild(tempHold);