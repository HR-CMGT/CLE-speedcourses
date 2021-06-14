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
    private enemies : Enemy[] = []
    private bullets : Bullet[] = []
    private explosions : Explosion[] = []
    private speech : Speech

    constructor() {
        this.background = new Background()
        let startButton = new StartButton(this)
    }

    public startGame() {
        this.player = new Player(this)
        this.enemies.push(new Enemy(), new Enemy(), new Enemy())
        this.speech = new Speech()
        this.speech.speak("destroy all enemies!")
        this.gameLoop()
    }

    private gameLoop() {
        this.background.update()
        this.player.update()
        for (let e of this.enemies) {
            e.update()
        }
        for (let b of this.bullets) {
            b.update()
        }
        for (let e of this.explosions) {
            e.update()
        }
        this.checkBulletCollisions()

        requestAnimationFrame(() => this.gameLoop())
    }

    private checkBulletCollisions() {
        for (let b of this.bullets) {
            for (let e of this.enemies) {
                if (this.checkCollision(b.getBoundingRect(), e.getBoundingRect())) {
                    this.addExplosion(e);
                    this.removeBullet(b);
                    this.removeEnemy(e);
                }
            }
        }
    }
    public addBullet() {
        this.bullets.push(new Bullet(this.player, this))
    }

    public removeBullet(bullet:Bullet) {
        bullet.remove()
        this.bullets = this.bullets.filter(b => b !== bullet)
    }

    public removeEnemy(enemy:Enemy) {
        enemy.remove()
        this.enemies = this.enemies.filter(e => e !== enemy)
        this.enemies.push(new Enemy())
    }

    public addExplosion(e:Enemy) {
        this.explosions.push(new Explosion(e, this))
    }
    
    public removeExplosion(explosion:Explosion) {
        explosion.remove()
        this.explosions = this.explosions.filter(e => e !== explosion)
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
} 

new Game()