import { Background } from "./background.js"
import { Bullet } from "./bullet.js"
import { Enemy } from "./enemy.js"
import { Explosion } from "./explosion.js"
import { Player } from "./player.js"
import { Speech } from "./speech.js"
import { StartButton } from "./startbutton.js"

export class Game {

    private background : Background
    private player: Player
    private speech : Speech
    private enemies : Enemy[] = []
    private bullets : Bullet[] = []
    private explosions : Explosion[] = []
    private terms = ["Got ya!", "Hit!", "Boom!", "Bet that hurts!", "Kill!", "Die!"]

    constructor() {
        this.speech = new Speech()
        this.background = new Background()
        const startButton = new StartButton(this)
    }

    public startGame() {
        this.player = new Player(this)
        this.enemies.push(new Enemy(), new Enemy(), new Enemy(), new Enemy(), new Enemy())
        
        this.speech.speak("Eliminate all enemies")
        this.gameLoop()
    }

    public shoot(x:number, y:number){
        this.bullets.push(new Bullet(this, x, y))
    }

    private gameLoop() {
        this.background.update()
        this.player.update()
        for(let e of this.enemies){
            e.update()
        }
        for (let b of this.bullets) {
            b.update()
        }
        for (let e of this.explosions) {
            e.update()
        }
        this.checkCollisions()

        requestAnimationFrame(() => this.gameLoop())
    }

    public removeBullet(bullet:Bullet){
        bullet.remove() // remove DOM element
        this.bullets = this.bullets.filter(b => b !== bullet) // remove from array
    }

    public removeExplosion(explosion: Explosion) {
        explosion.remove() // remove DOM element
        this.explosions = this.explosions.filter(e => e !== explosion) // remove from array
    }

    private checkCollisions(){
        for(let b of this.bullets) {
            for(let e of this.enemies) {
                if(this.checkCollision(b.getBoundingRect(), e.getBoundingRect())) {
                    this.speech.speak(this.terms[Math.floor(Math.random()*this.terms.length)])
                    this.explosions.push(new Explosion(this, e.x, e.y))
                    this.removeBullet(b)
                    e.resetEnemy()
                }
            }
        }
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
} 

new Game()