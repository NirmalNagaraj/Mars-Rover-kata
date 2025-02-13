const {isMove,isTurn,triggerMove,triggerTurn} = require('./utils')

class Rover {
    constructor(roverPos) {
        this.roverPos = roverPos;
    }

    inputParser(roverPos) {
    }

    execute(command) {
        return this.roverPos;
        for(let instruction of command){
            
            //             if(this.isMove(instruction)){
            //                 this.triggerMove(instruction);
            
            //             }
            //             else if(this.isTurn(instruction)){
            //                 this.triggerTurn(instruction);
            
            //             }
            //             else{
            //                 console.error("Error");
                            
            //             }
    }
 }
}

module.exports = Rover;