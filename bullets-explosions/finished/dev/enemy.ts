import { GameObject } from "./gameobject.js"

export class Enemy extends GameObject {

    private speed: number = 0

    constructor() {
        super("enemy")
        this.resetEnemy()
    }

    public resetEnemy(){
        this.x = window.innerWidth + Math.random() * 200
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
        this.speed = Math.random() * 2 + 1
        this.div.style.filter = `hue-rotate(${Math.floor(Math.random() * 460)}deg)`
    }

    public update(): void {
        this.x -= this.speed
        if(this.x < -100) {
            this.resetEnemy()
        }
        super.update()
    }
}