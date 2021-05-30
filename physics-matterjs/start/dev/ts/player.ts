import Matter from 'matter-js'

export class Player {

    private physicsBox: Matter.Body
    private div: HTMLElement
    private width:number
    private height:number
    private speed:number = 0

    constructor(world: Matter.Composite) {
        // TODO create physics box
        
        // TODO add box to physics simulation
        

        // add DOM box at the same coordinates
        this.div = document.createElement("player")
        let game = document.querySelector("game")
        game?.appendChild(this.div) // if game exists, add the div
        this.width  = 60
        this.height = 80

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    private onKeyDown(e:KeyboardEvent) {
        if(e.key === " " || e.key === "ArrowUp"){
            // TODO check if y velocity is almost 0. Then player is able to jump again
            
                // TODO apply force to physics object
                
            
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
        // TODO if the player is moving
        
            // TODO set velocity to the body
            
            
        
        // TODO get position of physics object
        
        // TODO the angle
        
        // TODO calculate degrees
        
        // TODO determine facing
        
        // TODO transform HTML element
        
    }
}