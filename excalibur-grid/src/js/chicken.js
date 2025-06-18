import { Actor, Vector, Keys, CollisionType, Color, clamp } from "excalibur"
import { Resources } from './resources.js'


export class Chicken extends Actor {
    
    constructor() {
        super({width: Resources.Bird.width, height: Resources.Bird.height, color:Color.Red })
        this.body.collisionType = CollisionType.Active
        this.pos = new Vector(300,300)
        this.graphics.use(Resources.Bird.toSprite())
        this.name = "chicken"
        this.cellSize = 100

        this.allowedPositions = [
            { row: 2, column: 3 },
            { row: 3, column: 1 },
            { row: 4, column: 4 },
        ]
        this.currentIndex = 0
        this.placeAtPosition()
    }

    placeAtPosition(){
        if(this.currentIndex >= this.allowedPositions.length) this.currentIndex = 0
        if(this.currentIndex < 0) this.currentIndex = this.allowedPositions.length -1 
        let selectedPosition = this.allowedPositions[this.currentIndex]

        this.pos.x = selectedPosition.column * this.cellSize
        this.pos.y = selectedPosition.row * this.cellSize
    }

    onPreUpdate(engine) {

        let xspeed = 0
        let yspeed = 0

        let kb = engine.input.keyboard

        if (kb.wasPressed(Keys.W) || kb.wasPressed(Keys.Up)) {
            this.currentIndex--
            this.placeAtPosition()
        }
        if (kb.wasPressed(Keys.S) || kb.wasPressed(Keys.Down)) {
            this.currentIndex++
            this.placeAtPosition() 
        }
        if (kb.wasPressed(Keys.A) || kb.wasPressed(Keys.Left)) {
            this.currentIndex--
            this.placeAtPosition()
        }
        if (kb.wasPressed(Keys.D) || kb.wasPressed(Keys.Right)) {
            this.currentIndex++
            this.placeAtPosition()
        }

        


    }
}