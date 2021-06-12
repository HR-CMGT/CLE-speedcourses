import { GameObject } from "./gameobject.js";
import { Startscreen } from "./startscreen.js";
export class Endscreen extends GameObject {
    constructor(game) {
        super("endscreen");
        const text = document.createElement("div");
        const btn = document.createElement("button");
        this.element.appendChild(text);
        this.element.appendChild(btn);
        text.innerText = "Game Over";
        btn.innerText = "Back to start";
        btn.addEventListener("click", () => game.switchScreen(new Startscreen(game)));
    }
}
//# sourceMappingURL=endscreen.js.map