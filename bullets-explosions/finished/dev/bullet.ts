import { Game } from "./game.js"
import { GameObject } from "./gameobject.js"

export class Bullet extends GameObject {

    private speed: number = 5
    private game : Game

    constructor(g:Game, x:number, y:number) {
        super("bullet")
        this.game = g
        this.x = x + 100
        this.y = y + 40
    }

    public update(): void {
        this.x += this.speed
        if(this.x > window.innerWidth) {
            this.game.removeBullet(this)
        }
        super.update()
    }
}