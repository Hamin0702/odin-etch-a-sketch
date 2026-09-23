function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(gridSize) {
    // Clear existing grid
    main.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
        const rowGroup = document.createElement("div");
        rowGroup.classList.add("row");

        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement("div");
            div.classList.add("cell");
            rowGroup.appendChild(div);
        }

        main.appendChild(rowGroup);
    }
}


function promptUser() {
    while (true) {
        const userInput = prompt("Number of squares per side for the new grid");
        const num = Number(userInput);

        if (userInput.trim() !== "" && !isNaN(num) && num <= 100) {
            return num;
        }

        alert("Please enter a valid number under 100.");
    }
}

main.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("cell")) {
        e.target.style.background = randomColor();
        const cellOpacity = getComputedStyle(e.target).opacity;
        e.target.style.opacity = cellOpacity - 0.1;
    }
});

const gridBtn = document.querySelector("button");
gridBtn.addEventListener("click", () => {
   createGrid(promptUser());
});

createGrid(16);