const Rover = require("./rover");
const { isValidPosition } = require("./utils");

class Plateau {
    constructor(grid, obstacles, count, roverPos, commands) {
        this.grid = Array.from({ length: grid[0] }, () => Array(grid[1]).fill(0));
        this.obstacles = obstacles;
        
        for (let obstacleCoordinate of obstacles) {
            this.grid[obstacleCoordinate[0]][obstacleCoordinate[1]] = 1;
        }
        

        this.store = [];

        for (let i = 0; i < count; i++) {
            if (isValidPosition(roverPos[i], this.grid)) {
                const rover = new Rover(roverPos[i]);
                let updatedPos = rover.execute(commands[i],this.grid);
                this.store.push(updatedPos);
                this.grid[updatedPos[0]][updatedPos[1]]=-i-1;
            }
        }

        console.log(this.store, "||", this.obstacles);
    }
}

module.exports = Plateau;