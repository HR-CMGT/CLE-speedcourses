import { GameObject } from "./gameobject.js";
export class Background extends GameObject {
    constructor() {
        super("background");
        this.x = 0;
    }
    update() {
        this.x--;
        this.div.style.backgroundPosition = `${this.x}px 0px`;
    }
}
//# sourceMappingURL=background.js.map