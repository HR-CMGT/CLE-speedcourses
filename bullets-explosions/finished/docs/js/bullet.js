import { GameObject } from "./gameobject.js";
export class Bullet extends GameObject {
    constructor(player, g) {
        super("bullet");
        this.speed = 3;
        let sound = new Audio("./sound/laser.mp3");
        sound.play();
        this.game = g;
        this.x = player.getBoundingRect().right - 5;
        this.y = player.getBoundingRect().top + 38;
    }
    update() {
        this.x += this.speed;
        if (this.x > window.innerWidth) {
            this.game.removeBullet(this);
        }
        super.update();
    }
}
//# sourceMappingURL=bullet.js.map