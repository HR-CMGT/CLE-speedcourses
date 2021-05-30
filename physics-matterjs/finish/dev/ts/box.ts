//import * as Matter from 'matter-js'
import Matter from 'matter-js'

export class Box {

    private physicsBox: Matter.Body
    private div: HTMLElement
    private width:number
    private height:number

    constructor(name:string, world: Matter.Composite, x: number, y: number, w: number, h: number, options:Object = {}) {
        // add box to physics simulation
        this.physicsBox = Matter.Bodies.rectangle(x, y, w, h, options)
        Matter.Composite.add(world, this.physicsBox)

        // add DOM box at the same coordinates
        this.div = document.createElement(name)
        let game = document.querySelector("game")
        game?.appendChild(this.div)
        this.div.style.width = w + "px"
        this.div.style.height = h + "px"
        this.width = w
        this.height = h
    }

    public update() {
        let pos = this.physicsBox.position // center point
        let angle = this.physicsBox.angle
        let degrees = angle * (180 / Math.PI)

        let bounds = this.physicsBox.bounds // bounding box
        this.div.style.transform = `translate(${pos.x - (this.width/2)}px, ${pos.y-(this.height/2)}px) rotate(${degrees}deg)`
    }
}