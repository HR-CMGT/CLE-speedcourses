import { GameObject } from "./gameobject.js";
export class StartButton extends GameObject {
    constructor(g) {
        super("startbutton");
        this.game = g;
        this.div.innerHTML = "START";
        this.div.addEventListener("click", () => this.startGame());
    }
    startGame() {
        this.game.startGame();
        this.div.remove();
    }
}
//# sourceMappingURL=startbutton.js.map