import '../css/style.css'
import { Engine, Vector, DisplayMode, Actor, Color, Scene } from "excalibur"
import { ResourceLoader } from './resources.js'
import { GameScene } from "./gamescene.js"
import { BookScene } from "./bookscene.js"

export class Game extends Engine {

    constructor() {
        super({
            maxFps: 60,
            width: 1280,
            height: 720,
            powerPreference: 'low-power',
            pixelRatio: 1,
            displayMode: DisplayMode.FitScreen
        })
        // this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.playerProgress = {
            coin:false,
            plant:false,
        }

        this.add('level', new GameScene())
        this.add('bookscene', new BookScene())
        this.goToScene('level')   
    }
}

new Game()
