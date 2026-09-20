
let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    const rowGroup = document.createElement("div");
    rowGroup.classList.add("row");

    for (let j = 0; j < gridSize; j++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        rowGroup.appendChild(div);
    }

    document.getElementById("main").appendChild(rowGroup);
}

