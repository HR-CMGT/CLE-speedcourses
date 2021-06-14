import { Enemy } from "./enemy.js"
import { Game } from "./game.js"
import { GameObject } from "./gameobject.js"

export class Explosion extends GameObject {

    private scale:number = 0.5
    private opacity:number = 2
    private game : Game

    constructor(enemy:Enemy, game:Game) {
        super("explosion")
        this.game = game
        let sound = new Audio("./sound/explosion.mp3")
        sound.play()
        this.x = enemy.getBoundingRect().left
        this.y = enemy.getBoundingRect().top
        this.update()
    }

    public update() {
        this.scale += 0.02
        this.opacity -= 0.02
        if (this.scale > 2.2) {
            this.game.removeExplosion(this)
        }
        this.div.style.opacity = this.opacity.toString()
        this.div.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`
    }
}