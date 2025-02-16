const fs = require('node:fs');

function isValidPosition(position, grid) {
    const [x, y] = position;
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === 0;
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


function getFileContent(inputFilePath){
    try {
        const data = fs.readFileSync(inputFilePath, "utf8");
        return data;
    } catch (err) {
        console.error("Error reading file:", err);
        return null;
    }
}

function inputParser(inputFilePath){

    const fileContent = getFileContent(inputFilePath);
    // console.log(fileContent)
    try{
    let grid = [] , obstacles =[],count ,roverPos =[],commands =[];
    
    if(!fileContent){
        throw new Error("File is empty");
    }

    const lines = fileContent.split('\n');
    // console.log(lines)

    grid = lines[0].split(' ').map((i)=>Number(i));
    // console.log(grid)

    if(grid.length  !== 2 || isNaN(grid[0]) || isNaN(grid[1])){
        throw new Error("Grid is Invalid")
    }

    let obstacleCount = Number(lines[1])
    // console.log(obstacleCount)
    if(!obstacleCount || isNaN(obstacleCount)){
        throw new Error("obstacleCount is Invalid")
    }

    for(let i = 2 ; i < obstacleCount + 2 ; i++){
        let obstacle = lines[i].split(' ').map((i)=>Number(i));

        if (obstacle.length !== 2 || isNaN(obstacle[0]) || isNaN(obstacle[1]) || obstacle[0]>=grid[0] || obstacle[1] >= grid[1]) {
            throw new Error(`Invalid obstacle at line ${i+1}`);
        }
        obstacles.push(obstacle);
    }
    // console.log("obstacles: ",obstacles)

    count = Number(lines[obstacleCount + 2]);

    // console.log("count: ",count)
    if(!count || isNaN(count)){
        throw new Error("Rover Count is Invalid");
    }

    let roverStartIndex = 3 + obstacleCount 
    let roverEndIndex = roverStartIndex + count*2;


    for(let i = roverStartIndex ; i < roverEndIndex ; i+=2){
        
        let [x,y,dir] = lines[i].split(' ');

        if (isNaN(Number(x)) || isNaN(Number(y)) || !["N", "S", "E", "W"].includes(dir)) {
            throw new Error(`Invalid rover position at line ${i + 1}`);
        }

        roverPos.push([Number(x),Number(y),dir])

        let command = lines[i+1];
        // console.log(Array.from(command).every((char)=>"LRFB".includes(char)));
       
        if(!Array.from(command).every((char)=>"LRFB".includes(char))){
            throw new Error(`Invalid command at line ${i + 2}`);
        }
        commands.push(command);

    }


    // console.log("roverPos: ",roverPos)
    // console.log("commands: ",commands)
    return {grid,obstacles,count,roverPos,commands} 
    }
    catch (err) {
        console.error(err.message);
        return null;
    }
}


module.exports = { isValidPosition, isMove, isTurn, triggerTurn,inputParser };