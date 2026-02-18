const container = document.getElementById("container");

const tempHold = document.createDocumentFragment();

function makeGrid(sideLength) {
    container.replaceChildren();
    
    numCells = sideLength * sideLength;

    for (let i = 0; i < numCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
        cell.style.width = `calc(100% / ${sideLength})`;
        cell.style.height = `calc(100% / ${sideLength})`;
        cell.addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
        });

        tempHold.appendChild(cell);

    }

    container.appendChild(tempHold);
}

const button = document.getElementById("newGrid");

button.addEventListener("click", () => {
    let input = prompt("How many pixels wide (<100)?", 16);

    if (!(input > 0) || !(input < 100)) {
        alert("Try again");
    } else {
        makeGrid(input);
    }
})