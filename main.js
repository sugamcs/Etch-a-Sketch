const gridContainer = document.querySelector('.grid-container');

// Function to create a grid item
function createGridItem() {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    
    gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = 'black'
    });

    return gridItem;
}
for (let row = 0; row < 16; row++) {
    for (let column = 0; column < 16; column++) {
        const square = createGridItem();
        gridContainer.appendChild(square);
    }
}


