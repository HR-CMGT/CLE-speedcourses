import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources'

export class Sheep extends Actor {

    constructor(pos) {
        super({ pos, width: Resources.Sheep.width, height: Resources.Sheep.height })
        this.graphics.use(Resources.Sheep.toSprite())
    }
}