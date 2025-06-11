import { Actor, Engine, Vector, CollisionType, Shape } from "excalibur"
import { Resources } from './resources'

export class Tree extends Actor {

    onInitialize(engine) {
        this.graphics.use(Resources.Tree.toSprite())
        this.pos = new Vector(Math.random() * 2000, Math.random() * 1200)
        this.body.collisionType = CollisionType.Fixed

        this.collider.useBoxCollider(90, 70, Vector.Half, new Vector(0, 30)); // w,h,anchor,offset
    }
}