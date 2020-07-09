class Player {

    private game:Game
    private x:number
    private y:number
    private image:HTMLImageElement
    private left:boolean = false
    private right: boolean = false
    private up: boolean = false
    private down: boolean = false

    constructor(g:Game) {
        this.game = g
        this.x = 20
        this.y = 20

        this.image = new Image()
        this.image.src = './images/tomnook.png'

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }
    
    public update() : void {
        if (this.left) this.x -= 5
        if (this.right) this.x += 5
        if (this.up) this.y -= 5
        if (this.down) this.y += 5
        this.game.ctx.drawImage(this.image, this.x, this.y)
    }

    // W A S D
    private onKeyDown(event:KeyboardEvent):void {
        switch (event.key.toUpperCase()) {
            case "A":
                this.left = true
                break;
            case "D":
                this.right = true
                break;
            case "S":
                this.down = true
                break;
            case "W":
                this.up = true
                break;
        }
    }

    private onKeyUp(event: KeyboardEvent): void {
        switch (event.key.toUpperCase()) {
            case "A":
                this.left = false
                break;
            case "D":
                this.right = false
                break;
            case "S":
                this.down = false
                break;
            case "W":
                this.up = false
                break;
        }
    }
}