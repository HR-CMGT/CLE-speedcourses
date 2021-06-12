import { GameObject } from "./gameobject.js"
import { Robot } from "./robot.js"
import { Startscreen } from "./startscreen.js"

export class Game {

    robot:Robot

    constructor(){
        this.robot = new Robot(this)
        this.gameLoop()
    }

    private gameLoop(){
        this.robot.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
}

new Game()