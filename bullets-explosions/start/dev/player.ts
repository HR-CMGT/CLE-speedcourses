import { GameObject } from "./gameobject.js"
import { Speech } from "./speech.js"

export class Player extends GameObject {

    private verticalSpeed: number = 0

    constructor() {
        super("player")
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
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            this.verticalSpeed = 0
        }
    }
}