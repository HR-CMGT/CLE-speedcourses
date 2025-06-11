import '../css/style.css'
import { Actor, Engine, Vector, SolverStrategy, EdgeCollider, CollisionType, Ray, Color, DisplayMode, BoundingBox } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Chicken } from "./chicken"
import { Background } from './background.js'
import { Tree } from "./tree.js"
import { Sheep } from './sheep.js'
import { Pickup } from './pickup.js'


export class Game extends Engine {

    chicken

    constructor() {
        super({ 
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 0)
            },
            maxFps: 60,
            width: 1280,
            height: 720,
            pixelRatio:1,
            displayMode: DisplayMode.FitScreen
        })
       // this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add(new Background())

        this.chicken = new Chicken()
        this.add(this.chicken)

        for (let i = 0; i < 8; i++) {
            this.add(new Sheep())
        }

        for (let i = 0; i < 8; i++) {
            this.add(new Tree())
        }

        this.add(new Pickup())

        this.currentScene.camera.strategy.elasticToActor(this.chicken, 0.2, 0.6)

        let boundingBox = new BoundingBox(0, 0, 2000, 1200);
        this.currentScene.camera.strategy.limitCameraBounds(boundingBox)
    }

   
}

new Game()
