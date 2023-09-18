const gridContainer = document.querySelector('.grid-container');
function createGridItem() {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    
    gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = 'black'
    });

    return gridItem;
}
const btn = document.createElement('button');

btn.id = 'btn';
btn.textContent = 'Reset';
document.body.append(btn);

btn.addEventListener('click', () => { 
    const size = prompt("How many squares per side? (Maximum: 100)");

    if (Number(size) > 100) {
        createGrid(16); // Reset to 16 squares
        alert("Please enter 100 or less squares!");
    } else {
        createGrid(size); // Create the grid with the specified size
    }
});


function createGrid(size) {
    gridContainer.innerHTML = ''; 
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
    
    const totalSquares = size * size; 
    
    for (let i = 0; i < totalSquares; i++) {
        const square = createGridItem();
        square.id = 'square'
        gridContainer.appendChild(square);
    }
}
createGrid(16);
// finished.
