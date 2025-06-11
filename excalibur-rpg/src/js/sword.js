import { Actor, Engine, Vector, CollisionType, Shape, RotationType } from "excalibur"
import { Resources } from './resources'
import { Sheep } from './sheep.js'


export class Sword extends Actor {

    constructor() {
        super({ 
            anchor: new Vector(0.5, 1),
            width: Resources.Sword.width, 
            height: Resources.Sword.height
        })
        this.on("collisionstart", (event) => this.hitSomething(event))
        this.graphics.use(Resources.Sword.toSprite())
        this.pos = new Vector(26,20)
    }

    attack(){
        this.actions.rotateBy(Math.PI / 2, 20).rotateTo(0, 20)
    }

    hitSomething(event) {
        // only kill when slashing
        if (event.other.owner instanceof Sheep && this.rotation !== 0) {
            event.other.owner.kill()
        }
    }

}