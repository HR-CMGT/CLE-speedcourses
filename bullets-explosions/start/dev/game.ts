import { Background } from "./background.js"
import { Enemy } from "./enemy.js"
import { Player } from "./player.js"
import { Speech } from "./speech.js"
import { StartButton } from "./startbutton.js"

export class Game {

    private background : Background
    private player: Player
    private speech : Speech
    private enemies : Enemy[] = []
    private startButton : StartButton

    constructor() {
        this.speech = new Speech()
        this.background = new Background()
        this.startButton = new StartButton(this)
    }

    public startGame() {
        this.player = new Player()
        this.enemies.push(new Enemy(), new Enemy(), new Enemy())
        
        this.speech.speak("Eliminate all enemies")
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