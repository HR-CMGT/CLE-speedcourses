// import * as Matter from 'matter-js'
import Matter from 'matter-js'
export class Circle {

    private physicsCircle: Matter.Body
    private div: HTMLElement
    private radius:number

    constructor(name:string, world: Matter.Composite, x: number, y: number, radius: number) {
        // add box to physics simulation
        this.physicsCircle = Matter.Bodies.circle(x, y, radius, { friction: 0.0001, restitution: 0.5, density: 0.001, label:"barrel" })
        Matter.Composite.add(world, this.physicsCircle)

        // add DOM box at the same coordinates
        this.div = document.createElement(name)
        let game = document.querySelector("game")
        game?.appendChild(this.div)
        this.div.style.width = (radius*2) + "px"
        this.div.style.height = (radius*2) + "px"
        this.radius = radius
    }

    public update() {
        let pos = this.physicsCircle.position
        let angle = this.physicsCircle.angle
        let degrees = angle * (180 / Math.PI)
        // physics x, y = MIDDELPUNT. DIV x,y = LINKSBOVEN
        this.div.style.transform = `translate(${pos.x - this.radius}px, ${pos.y-this.radius}px) rotate(${degrees}deg)`

        if(pos.y > 700){
            Matter.Body.setPosition(this.physicsCircle, {x:Matter.Common.random(0, 400), y:0})
        }
    }
}