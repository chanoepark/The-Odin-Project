const GRIDSIZE = 16;

container = document.querySelector('.container');

for (let row = 0; row < GRIDSIZE; row++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');

    for (let col = 0; col < GRIDSIZE; col++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridRow.appendChild(gridSquare);
    }

    container.appendChild(gridRow);
}