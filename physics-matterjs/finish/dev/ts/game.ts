// import * as Matter from 'matter-js'
import Matter from 'matter-js'
import { Player } from "./player"
import { Circle } from "./circle"
import { Box } from "./box"

class Game {

    private engine : Matter.Engine
    private elements : (Box | Circle | Player)[] = []
        
    constructor() {
        this.setupMatter()
        this.addObjects()
        this.gameLoop()
    }
        
    private setupMatter(){
        this.engine = Matter.Engine.create()
        console.log(this.engine)

        // collision detection
        Matter.Events.on(this.engine, 'collisionStart', (event) => {
            let collision = event.pairs[0]
            let bodyA = collision.bodyA
            let bodyB = collision.bodyB

            // check label
            console.log(`${bodyA.label} hits ${bodyB.label}`)

            // positie veranderen na collision
            //Matter.Body.setPosition(bodyA, {x:10, y:10})

            // body verwijderen na collision - let op dat de class zichzelf ook moet verwijderen als de physics body weg is!
            // Matter.Composite.remove(world, bodyA)
        })
    }

    private addObjects(){
        for(let i = 0; i<3; i++){
            this.elements.push(new Circle("barrel", this.engine.world, Matter.Common.random(0,800), 20, 30) )
        }
        this.elements.push(
            new Player(this.engine.world),
            new Box("crate", this.engine.world, 270, 20, 60, 60, { label: "crate A" }),
            new Box("crate", this.engine.world, 320, 70, 60, 60, { label: "crate B" }),
            new Box("platform", this.engine.world, 180, 250, 600, 30, { isStatic: true, label:"platform", angle: Math.PI * 0.09 }),
            new Box("platform", this.engine.world, 400, 600, 800, 60, { isStatic: true, label:"floor" }),
        )
        
    }

    private gameLoop(){
        // update the physics world
        Matter.Engine.update(this.engine, 1000 / 60)
        // update the DOM world
        for (let e of this.elements){
            e.update()
        }
        requestAnimationFrame(() => this.gameLoop())
    }
} 

new Game()