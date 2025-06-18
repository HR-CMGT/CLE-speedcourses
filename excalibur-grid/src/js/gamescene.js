import { Engine, Vector, DisplayMode, Actor, Color, Scene, Keys } from "excalibur"
import { Label, FontUnit } from "excalibur"
import { Resources } from './resources.js'
import { Background } from './background.js'
import { Sheep } from './sheep.js'
import { Pickup } from './pickup.js'
import { Ork } from './ork.js'
import { Chicken } from './chicken.js'

export class GameScene extends Scene {
    onInitialize(engine) {
        console.log("this level is created only once.")
        this.add(new Background())
        this.createGrid()
        this.createMenu()
        this.showProgress()
    }

    createGrid() {
        for (let i = 0; i < 25; i++) {
            let column = Math.round(Math.random() * 12)
            let row = Math.round(Math.random() * 8)

            let pos = new Vector(column * 100, row * 100)
            this.add(new Sheep(pos))
        }
    }

    createMenu() {
        this.label = new Label({
            pos: new Vector(100, 100),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 20,
                color: Color.White
            })
        })
        this.add(this.label)
        this.add(new Pickup())
        this.add(new Chicken())
    }

    onActivate(ctx) {
        this.showProgress()
    }

    showProgress(){
        this.label.text = `coin: ${this.engine.playerProgress.coin}, plant: ${this.engine.playerProgress.plant}`
    }

    onPreUpdate(engine) {
        let kb = engine.input.keyboard

        if (kb.wasPressed(Keys.Space)) {
            this.engine.goToScene("bookscene")
        }
    }

}