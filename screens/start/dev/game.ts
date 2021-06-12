import { GameObject } from "./gameobject.js"
import { Startscreen } from "./startscreen.js"

export class Game extends GameObject {

    constructor(){
        super("game")

        const text = document.createElement("div")
        const btn = document.createElement("button")

        this.element.appendChild(text)
        this.element.appendChild(btn)

        text.innerText = "Robot Clicker"
        btn.innerText = "START GAME"

        btn.addEventListener("click", () => console.log("start the game"))

        this.gameLoop()
    }

    private gameLoop(){
        requestAnimationFrame(()=>this.gameLoop())
    }
}

new Game()