// import * as Matter from 'matter-js'
import Matter from 'matter-js'
export class Circle {

    private physicsCircle: Matter.Body
    private div: HTMLElement
    private radius:number

    constructor(name:string, world: Matter.Composite, x: number, y: number, radius: number) {
        // TODO add the physics circle
        
        // TODO add box to physics simulation
        

        // add DOM box at the same coordinates
        this.div = document.createElement(name)
        let game = document.querySelector("game")
        game?.appendChild(this.div)
        this.div.style.width = (radius*2) + "px"
        this.div.style.height = (radius*2) + "px"
        this.radius = radius
    }

    public update() {
        let pos     = this.physicsCircle.position
        let angle   = this.physicsCircle.angle
        let degrees = angle * (180 / Math.PI)
        // physics x, y = MIDDELPUNT. DIV x,y = LINKSBOVEN
        this.div.style.transform = `translate(${pos.x - this.radius}px, ${pos.y-this.radius}px) rotate(${degrees}deg)`

        // TODO check if barrel is outside the screen
        
            // TODO reposition on top of the screen
            
        
    }
}