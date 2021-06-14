import { GameObject } from "./gameobject.js";
export class Enemy extends GameObject {
    constructor() {
        super("enemy");
        this.speed = 0;
        this.resetEnemy();
    }
    resetEnemy() {
        this.x = window.innerWidth + Math.random() * 200;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        this.speed = Math.random() * 2 + 1;
        this.div.style.filter = `hue-rotate(${Math.floor(Math.random() * 460)}deg)`;
        this.update();
    }
    update() {
        this.x -= this.speed;
        if (this.x < -100) {
            this.resetEnemy();
        }
        super.update();
    }
}
//# sourceMappingURL=enemy.js.map