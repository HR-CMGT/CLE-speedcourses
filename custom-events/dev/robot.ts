import { Gun } from "./gun.js"

export class Robot {
    private element : HTMLElement
    private x : number = 40
    private y : number = 120
    private _score : number = 0
    private _health : number = 100
    private gun : Gun

    constructor(){
        const game = document.querySelector('game') as HTMLElement
        this.element = document.createElement("robot")
        game.appendChild(this.element)

        this.gun = new Gun()
    }

    get score() {
        return this._score
    }

    get health() {
        return this._health
    }

    public update(): void{
        this._health -= 0.01
        this._score += 0.01
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}
