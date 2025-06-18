import { Engine, Vector, DisplayMode, Actor, Color, Scene, Keys } from "excalibur"
import { Label, FontUnit } from "excalibur"
import { Resources } from './resources.js'
import { Background } from './background.js'
import { Sheep } from './sheep.js'
import { Pickup } from './pickup.js'
import { Ork } from './ork.js'
import { Chicken } from './chicken.js'

export class BookScene extends Scene {
    onInitialize(engine) {
        console.log("this level is created only once.")
        this.add(new Background())

        const label = new Label({
            text: 'press space to pick up coin',
            pos: new Vector(100, 100),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 20,
                color: Color.White
            })
        })
        this.add(label)
    }

    onPreUpdate(engine) {
        let kb = engine.input.keyboard

        if (kb.wasPressed(Keys.Space)) {
            this.engine.playerProgress.coin = true
            this.engine.goToScene("level")
        }
    }

    onActivate(ctx) {
        console.log("the game has switched to this level. player already exists. reset score to 0")

    }

}