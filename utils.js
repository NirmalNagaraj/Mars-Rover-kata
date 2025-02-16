function isValidPosition(position, grid) {
    const [x, y, direction] = position;
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === 0;
}
function wrapPosition(resPosition, height, width) {
    if (resPosition[0] < 0) {
        resPosition[0] = height - 1;        // height-x(grid.length)
    }
    else if (resPosition[0] >= height) {
        resPosition[0] = 0;
    }
    if (resPosition[1] < 0) {
        resPosition[1] = width - 1;         // width-y(grid[0].length)
    }
    else if (resPosition[1] >= width) {
        resPosition[1] = 0;
    }
    return resPosition;
}

function isTurn(instruction) {
    return instruction === 'L' || instruction === 'R';
}

function isMove(instruction) {
    return instruction === 'F' || instruction === 'B';
}



function triggerTurn(instruction, initialDirection) {
    const directionMap = { 'N': 0, 'E': 1, 'S': 2, 'W': 3 };
    const reverseDirectionMap = ['N', 'E', 'S', 'W'];
    if (!isTurn(instruction)) {
        throw new Error("Invalid turn instruction. Must be 'L' or 'R'.");
    }

    let direction = directionMap[initialDirection];

    // Modulo operation of Turn Algorithm
    direction = (instruction === 'L') ? (direction + 3) % 4 : (direction + 1) % 4;

    return reverseDirectionMap[direction];
}

module.exports = { isValidPosition, isMove, isTurn, triggerTurn };