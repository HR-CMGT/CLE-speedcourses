import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources'

export class Ork extends Actor {
    
    constructor(pos){
        super({ pos, width: Resources.Ork.width, height: Resources.Ork.height})
        this.graphics.use(Resources.Ork.toSprite())
    }

}