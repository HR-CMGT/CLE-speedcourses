import { Gun } from "./gun.js";
export class Robot {
    constructor() {
        this.x = 40;
        this.y = 120;
        this._score = 0;
        this._health = 100;
        const game = document.querySelector('game');
        this.element = document.createElement("robot");
        game.appendChild(this.element);
        this.gun = new Gun();
    }
    get score() {
        return this._score;
    }
    set score(s) {
        if (s > 0) {
            this._score = s;
        }
    }
    get health() {
        return this._health;
    }
    update() {
        this._health -= 0.01;
        this._score += 0.01;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=robot.js.map