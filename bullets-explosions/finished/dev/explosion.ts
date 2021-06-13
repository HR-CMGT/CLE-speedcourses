import { Game } from "./game.js"
import { GameObject } from "./gameobject.js"

export class Explosion extends GameObject {

    private game : Game
    private scale : number = 0.5

    constructor(g:Game, x:number, y:number) {
        super("explosion")
        this.game = g
        this.x = x 
        this.y = y 
        this.update()
    }

    public update(): void  {
        this.scale += 0.02 
        if(this.scale > 3) {
            this.game.removeExplosion(this)
        }
        this.div.style.opacity = (2 - this.scale).toString()
        this.div.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`
    }
}