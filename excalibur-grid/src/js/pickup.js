import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Sheep } from "./sheep.js"
import { Ork } from "./ork.js"

export class Pickup extends Actor {

    constructor() {
        super({
            width: Resources.Ork.width,
            height: Resources.Ork.height
        })
        this.graphics.use(Resources.Ork.toSprite())
        this.pos = new Vector(200, 40)
        this.draggable = true;

        // drag leave is called when the mouse drags too fast and leaves the ork bounding box
        this.on('pointerdragleave', (evt) => this.draggingStopped(evt));
        this.on('pointerdragend', (evt) => this.draggingStopped(evt));
    }

    draggingStopped(evt){
        // spawn ork at event.worldPos
        let snapx = Math.round(evt.worldPos.x / 100) * 100
        let snapy = Math.round(evt.worldPos.y / 100) * 100
        this.scene.engine.add(new Ork(new Vector(snapx, snapy)))

        // reset pickup
        this.pos = new Vector(200, 40)
    }
}