import Matter from 'matter-js'

export class Player {

    private physicsBox: Matter.Body
    private div: HTMLElement
    private width:number
    private height:number
    private speed:number = 0

    constructor(world: Matter.Composite) {
        // add box to physics simulation
        this.physicsBox = Matter.Bodies.rectangle(50, 330, 60, 80, { label: "player", inertia: Infinity})
        Matter.Composite.add(world, this.physicsBox)

        // add DOM box at the same coordinates
        this.div = document.createElement("player")
        let game = document.querySelector("game")
        game?.appendChild(this.div)
        this.width = 60
        this.height = 80

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    private onKeyDown(e:KeyboardEvent) {
        if(e.key === " " || e.key === "ArrowUp"){
            if(this.physicsBox.velocity.y > -0.4 && this.physicsBox.velocity.y < 0.4) {
                Matter.Body.applyForce(this.physicsBox, { x: this.physicsBox.position.x, y: this.physicsBox.position.y }, { x: 0, y: -0.15 })
            }
        }
        switch (e.key) {
            case "ArrowLeft":
                this.speed = -5
                break
            case "ArrowRight":
                this.speed = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent) {
        switch (e.key) {
            case "ArrowLeft":
            case "ArrowRight":
                this.speed = 0
                break
        }
    }

    public update() {
        if(this.speed != 0) {
            // velocity
            Matter.Body.setVelocity(this.physicsBox, { x: this.speed, y: this.physicsBox.velocity.y })
            // of translate
            // Matter.Body.translate(this.physicsBox, { x: -10, y: 20 })
        }
        let pos     = this.physicsBox.position // center point
        let bounds  = this.physicsBox.bounds // bounding box
        let angle   = this.physicsBox.angle
        let degrees = angle * (180 / Math.PI)
        let facing  = (this.speed >= 0) ? 1 : -1

        this.div.style.transform = `translate(${pos.x - (this.width / 2)}px, ${pos.y - (this.height / 2)}px) rotate(${degrees}deg) scaleX(${facing})`
    }
}