const DEFAULTGRIDSIZE = 16;

function createGrid(gridSize = DEFAULTGRIDSIZE) {
    const container = document.querySelector('.container');

    for (let row = 0; row < gridSize; row++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');

        for (let col = 0; col < gridSize; col++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.addEventListener('mouseover', e => {
                e.target.style.backgroundColor = 'red';
            });
            gridRow.appendChild(gridSquare);
        }

        container.appendChild(gridRow);
    }
}

function removeGrid() {
    const container = document.querySelector('.container');

    while (container.hasChildNodes())
        container.removeChild(container.firstChild);
}

function adjustGridSize() {
    removeGrid();
    
    let gridSize = DEFAULTGRIDSIZE;

    do {
        gridSize = Number(prompt("Desired number of squares in grid (1-100):"));
    } while(gridSize < 1 || gridSize > 100 || !Number.isInteger(gridSize));

    createGrid(gridSize);
}

const button = document.querySelector('button');
button.addEventListener('click', adjustGridSize);
createGrid();