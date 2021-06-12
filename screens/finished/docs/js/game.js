import { Startscreen } from "./startscreen.js";
export class Game {
    constructor() {
        this.currentScreen = new Startscreen(this);
        this.gameLoop();
    }
    gameLoop() {
        this.currentScreen.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    switchScreen(screen) {
        this.currentScreen.remove();
        this.currentScreen = screen;
    }
}
new Game();
//# sourceMappingURL=game.js.map