function isValidPosition(position, grid) {
    const [x, y] = position;
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === 0;
}


function isMove(instructions){

}
function isTurn(instructions){

}
function triggerMove(instructions){

}
function triggerTurn(instructions){

}


module.exports = { isValidPosition, isMove , isTurn , triggerMove,triggerTurn };


