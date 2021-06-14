import { Game } from "./game.js";
import { GameObject } from "./gameobject.js"
import { Player } from "./player.js";

export class Bullet extends GameObject {

    private speed:number = 3
    private game:Game

    constructor(player:Player, g:Game) {
        super("bullet")
        let sound = new Audio("./sound/laser.mp3")
        sound.play()
        this.game = g
        this.x = player.getBoundingRect().right - 5
        this.y = player.getBoundingRect().top + 38
    }
    update() {
        this.x += this.speed;
        if (this.x > window.innerWidth) {
            this.game.removeBullet(this)
        }
        super.update()
    }
}
//# sourceMappingURL=bullet.js.map