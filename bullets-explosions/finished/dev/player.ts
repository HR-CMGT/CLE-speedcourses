import { Game } from "./game.js"
import { GameObject } from "./gameobject.js"

export class Player extends GameObject {

    private verticalSpeed: number = 0
    private game : Game

    constructor(g:Game) {
        super("player")
        this.game = g
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

        this.x = 100
        this.y = window.innerHeight/2 - 50
    }


    public update(): void {
        this.y += this.verticalSpeed
        super.update()
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key) {
            case " ":
                console.log("Shoot!")
                break
            case "ArrowUp":
                this.verticalSpeed = -5
                break
            case "ArrowDown":
                this.verticalSpeed = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        if (e.key === " ") {
            this.game.addBullet()
        }
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            this.verticalSpeed = 0
        }
    }
}