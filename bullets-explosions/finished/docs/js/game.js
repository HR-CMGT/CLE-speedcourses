import { Background } from "./background.js";
import { Bullet } from "./bullet.js";
import { Enemy } from "./enemy.js";
import { Explosion } from "./explosion.js";
import { Player } from "./player.js";
import { Speech } from "./speech.js";
import { StartButton } from "./startbutton.js";
export class Game {
    constructor() {
        this.enemies = [];
        this.bullets = [];
        this.explosions = [];
        this.background = new Background();
        let startButton = new StartButton(this);
    }
    startGame() {
        this.player = new Player(this);
        this.enemies.push(new Enemy(), new Enemy(), new Enemy());
        this.speech = new Speech();
        this.speech.speak("destroy all enemies!");
        this.gameLoop();
    }
    gameLoop() {
        this.background.update();
        this.player.update();
        for (let e of this.enemies) {
            e.update();
        }
        for (let b of this.bullets) {
            b.update();
        }
        for (let e of this.explosions) {
            e.update();
        }
        this.checkBulletCollisions();
        requestAnimationFrame(() => this.gameLoop());
    }
    checkBulletCollisions() {
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
    addBullet() {
        this.bullets.push(new Bullet(this.player, this));
    }
    removeBullet(bullet) {
        bullet.remove();
        this.bullets = this.bullets.filter(b => b !== bullet);
    }
    removeEnemy(enemy) {
        enemy.remove();
        this.enemies = this.enemies.filter(e => e !== enemy);
        this.enemies.push(new Enemy());
    }
    addExplosion(e) {
        this.explosions.push(new Explosion(e, this));
    }
    removeExplosion(explosion) {
        explosion.remove();
        this.explosions = this.explosions.filter(e => e !== explosion);
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
new Game();
//# sourceMappingURL=game.js.map