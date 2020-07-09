class Game {
    
    private canvas:HTMLCanvasElement
    public ctx:CanvasRenderingContext2D
    private player:Player
    private bg:HTMLImageElement
     
    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement
        this.ctx = this.canvas.getContext('2d')!

        this.bg = new Image()
        this.bg.src = './images/grass.png'
        
        this.player = new Player(this)
        this.update()
    }
    
    private update(){
        this.ctx.fillStyle = 'rgb(30,140,30)'
        this.ctx.fillRect(0, 0, 800, 600)

        const pattern = this.ctx.createPattern(this.bg, 'repeat')!
        this.ctx.fillStyle = pattern
        this.ctx.fillRect(0, 0, 800, 600)

        this.player.update()
        
        requestAnimationFrame(() => this.update())
    }
} 

window.addEventListener("load", () => new Game())