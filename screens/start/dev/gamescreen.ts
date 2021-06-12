import { GameObject } from "./gameobject.js"
import { Game } from "./game.js"
import { Robot } from "./robot.js"

export class Gamescreen extends GameObject {

    private robots:Robot[] = []
    private game:Game
    
    constructor(game:Game) {
        super("gamescreen")
        this.game = game
        const text = document.createElement("div")
        this.element.appendChild(text)
        text.innerText = "Score: 0"

        this.robots.push(new Robot(this.game), new Robot(this.game))
    }

    public update(){
        for (let o of this.robots) {
            o.update()
        }
    }

    public remove() {
        for (let o of this.robots) {
            o.remove()
        }
        super.remove()
    }

}