import { Game } from "./game.js"
import { GameObject } from "./gameobject.js"

export class StartButton extends GameObject {

    private game:Game

    constructor(g:Game) {
        super("startbutton")
        this.game = g
        this.div.innerHTML = "START"
        this.div.addEventListener("click", ()=>this.startGame())
    }

    private startGame(){
        this.game.startGame()
        this.div.remove()
    }
}