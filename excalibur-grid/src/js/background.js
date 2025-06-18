import { Actor, Vector, Sprite, Color, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {

    onInitialize(engine) {
        let sprite = new Sprite({
            image: Resources.Grass,
            sourceView: {
                x: 0,
                y: 0,
                width: 1280,
                height: 720,
            },
        })
        this.anchor = Vector.Zero
        this.body.collisionType = CollisionType.PreventCollision
        this.graphics.use(sprite)

        // menu bar background
        //let bar = new Actor({ collisionType : CollisionType.PreventCollision, color: new Color(255, 255, 255, 0.4), width:1280, height:80, x:0, y:0, anchor:Vector.Zero})
        //this.addChild(bar)
    }

}