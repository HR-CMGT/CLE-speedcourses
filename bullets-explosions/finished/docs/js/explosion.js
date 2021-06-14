import { GameObject } from "./gameobject.js";
export class Explosion extends GameObject {
    constructor(enemy, game) {
        super("explosion");
        this.scale = 0.5;
        this.opacity = 2;
        this.game = game;
        let sound = new Audio("./sound/explosion.mp3");
        sound.play();
        this.x = enemy.getBoundingRect().left;
        this.y = enemy.getBoundingRect().top;
        this.update();
    }
    update() {
        this.scale += 0.02;
        this.opacity -= 0.02;
        if (this.scale > 2.2) {
            this.game.removeExplosion(this);
        }
        this.div.style.opacity = this.opacity.toString();
        this.div.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
    }
}
//# sourceMappingURL=explosion.js.map