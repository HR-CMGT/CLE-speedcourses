import { GameObject } from "./gameobject.js";
import { Robot } from "./robot.js";
export class Gamescreen extends GameObject {
    constructor(game) {
        super("gamescreen");
        this.robots = [];
        this.game = game;
        const text = document.createElement("div");
        this.element.appendChild(text);
        text.innerText = "Score: 0";
        this.robots.push(new Robot(this.game), new Robot(this.game));
    }
    update() {
        for (let o of this.robots) {
            o.update();
        }
    }
    remove() {
        for (let o of this.robots) {
            o.remove();
        }
        super.remove();
    }
}
//# sourceMappingURL=gamescreen.js.map