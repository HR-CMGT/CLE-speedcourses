import { Game } from "./game.js"
import { Robot } from "./robot.js"

export class UI  {

    private scoreField: HTMLElement
    private ammoField : HTMLElement
    private robot : Robot

    constructor(r:Robot) {
        this.robot = r
        //this.ammo = 10
        const game = document.querySelector('game') as HTMLElement
        this.scoreField = document.createElement("ui")
        this.ammoField = document.createElement("ammo")
        game.appendChild(this.scoreField)
        game.appendChild(this.ammoField)
        
        window.addEventListener("shoot", (e:Event) => this.gunWasFired(e))
    }

    private gunWasFired(e:Event){
        let shootEvent = e as CustomEvent
        console.log("gun was fired")
        console.log(shootEvent.detail)
        this.ammoField.innerHTML = `Ammo:${shootEvent.detail.ammo}`
    }

    public update(){
        this.scoreField.innerHTML = `${Math.round(this.robot.score)} Health : ${Math.round(this.robot.health)}`
    }
}