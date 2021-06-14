import { GameObject } from "./gameobject.js";
export class Player extends GameObject {
    constructor(g) {
        super("player");
        this.verticalSpeed = 0;
        this.game = g;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.x = 100;
        this.y = window.innerHeight / 2 - 50;
    }
    update() {
        this.y += this.verticalSpeed;
        super.update();
    }
    onKeyDown(e) {
        switch (e.key) {
            case " ":
                console.log("Shoot!");
                break;
            case "ArrowUp":
                this.verticalSpeed = -5;
                break;
            case "ArrowDown":
                this.verticalSpeed = 5;
                break;
        }
    }
    onKeyUp(e) {
        if (e.key === " ") {
            this.game.addBullet();
        }
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            this.verticalSpeed = 0;
        }
    }
}
//# sourceMappingURL=player.js.map