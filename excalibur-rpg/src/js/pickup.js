import { Actor, Engine, Vector, CollisionType, Shape, RotationType } from "excalibur"
import { Resources } from './resources'
import { Chicken } from "./chicken"


export class Pickup extends Actor {

    constructor() {
        super({
            width: Resources.Sword.width,
            height: Resources.Sword.height
        })
        this.on("collisionstart", (event) => this.hitSomething(event))
        this.graphics.use(Resources.Sword.toSprite())
        this.pos = new Vector(120, 120)
    }

    hitSomething(event) {
        // chicken picks up sword
        if (event.other.owner instanceof Chicken) {
            event.other.owner.pickupSword()
            this.kill()
        }
    }

}