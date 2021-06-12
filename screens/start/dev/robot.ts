import { GameObject } from "./gameobject.js"
import { Game } from "./game.js"
import { Endscreen } from "./endscreen.js"

export class Robot extends GameObject {

    private x : number = Math.random() * 600
    private y : number = Math.random() * 450

    constructor(game:Game){
        super("robot")
        this.element.addEventListener("click", ()=>console.log("you clicked a robot"))
    }

    public update(): void{
        this.x += 3
        if(this.x > window.innerWidth) {
            this.x = -100
        }
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}