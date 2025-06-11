import { Actor, Vector, Keys, CollisionType, Color, clamp } from "excalibur"
import { Resources } from './resources.js'
import { Sword } from './sword.js'

export class Chicken extends Actor {

    weapon // undefined
    
    constructor() {
        super({width: Resources.Bird.width, height: Resources.Bird.height, color:Color.Red })
        this.body.collisionType = CollisionType.Active
        this.pos = new Vector(300,90)
        this.graphics.use(Resources.Bird.toSprite())
        this.name = "chicken"
    }

    onPreUpdate(engine) {

        let xspeed = 0
        let yspeed = 0

        let kb = engine.input.keyboard

        if (kb.isHeld(Keys.W) || kb.isHeld(Keys.Up)) {
            yspeed = -300
        }
        if (kb.isHeld(Keys.S) || kb.isHeld(Keys.Down)) {
            yspeed = 300
        }
        if (kb.isHeld(Keys.A) || kb.isHeld(Keys.Left)) {
            xspeed = -300
            this.graphics.flipHorizontal = false
        }
        if (kb.isHeld(Keys.D) || kb.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.flipHorizontal = true
        }

        // schieten en springen gebeurt maar 1 keer na een press
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.attack()
        }

        this.vel = new Vector(xspeed, yspeed)

        this.pos.x = clamp(this.pos.x, 0, 2000);
        this.pos.y = clamp(this.pos.y, 0, 1200);
    }

    pickupSword(){
        this.weapon = new Sword()
        this.addChild(this.weapon)
    }

    attack(){
        if(this.weapon){
            this.weapon.attack()
        }
    }
}