$(document).ready(() => {
    // Build Sudoku board
    createBoard();
})

function createBoard(board) {
    const sudokuBoard = $('#board');
    sudokuBoard.empty();
    // Generate board
    let table =  $('<table>');
    for (let i = 0; i < 9; i++) {
        let row = $('<tr>');
        for (let j = 0; j < 9; j++) {
            row.append($('<td>', {
                id: `${i}x${j}`
            }))
        }
        table.append(row);
    }
    sudokuBoard.append(table);
}