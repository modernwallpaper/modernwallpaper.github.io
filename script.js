document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const cells = [];

    // Create the game board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cells.push(cell);
        board.appendChild(cell);
    }

    let currentPlayer = 'X';

    board.addEventListener('click', (event) => {
        const clickedCell = event.target;
        
        if (!clickedCell.classList.contains('cell')) return;
        if (clickedCell.textContent !== '') return;
        
        clickedCell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
});
