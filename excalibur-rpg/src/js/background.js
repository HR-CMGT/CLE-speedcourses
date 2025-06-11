import { Actor, Engine, Vector, SolverStrategy, EdgeCollider, CollisionType, Sprite } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {

    onInitialize(engine) {
        let sprite = new Sprite({
            image: Resources.Grass,
            sourceView: {
                x: 0,
                y: 0,
                width: 2000,
                height: 1200,
            },
        })
        this.anchor = Vector.Zero
        this.graphics.use(sprite)
    }

}