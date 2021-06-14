import { Background } from "./background.js"
import { Enemy } from "./enemy.js"
import { Player } from "./player.js"
import { StartButton } from "./startbutton.js"

export class Game {

    private background : Background
    private player: Player
    private enemies : Enemy[] = []

    constructor() {
        this.background = new Background()
        let startButton = new StartButton(this)
    }

    public startGame() {
        this.player = new Player()
        this.enemies.push(new Enemy(), new Enemy(), new Enemy())
        this.gameLoop()
    }

    private gameLoop() {
        this.background.update()
        this.player.update()
        for(let e of this.enemies){
            e.update()
        }

        requestAnimationFrame(() => this.gameLoop())
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
} 

new Game()