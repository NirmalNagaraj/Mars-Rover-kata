class Rover{
    constructor(roverPos){
        this.roverPos = roverPos

    }
    inputParser(roverPos){

    }

    
    execute(command){
        return this.roverPos
        
    }
}

class Plateau{
    store =[];
    constructor(grid,obstacles,count,roverPos,command){
        this.grid = Array.apply(null, Array(grid[0])).map(() => (Array.apply(null, Array(grid[1])).map(() => 0)));
        this.obstacles = obs;
        for(let obstacleCoordinate of obstacles){
            this.grid[obstacleCoordinate[0]][obstacleCoordinate[1]] = 1;
        }
        console.log(this.grid);
        for (let i =0;i < count ; i++){
            if(isvalidPosition(roverPos[i])){
                const rover = new Rover(roverPos[i]);
                let a = rover.execute(command);
                //obs.push(a)
                this.store.push(a)

            }
            
        }

        console.log(this.store,"||",obs);
                
    }

}

const grid = [5,5];
const obs = [[1,1],[2,2]];
const count =2;


const roverPos = [[0,1,"N"],[0,4,"N"]];
const command = ["LLFB","LLFB"];

const plat = new Plateau(grid,obs,count,roverPos,command);