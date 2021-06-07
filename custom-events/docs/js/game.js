import { Robot } from "./robot.js";
import { UI } from "./ui.js";
export class Game {
    constructor() {
        this.robot = new Robot();
        this.ui = new UI(this.robot);
        this.gameLoop();
    }
    gameLoop() {
        this.robot.update();
        this.ui.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map