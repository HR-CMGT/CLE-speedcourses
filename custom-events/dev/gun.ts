export class Gun {
    private _ammo : number = 10

    get ammo(){
        return this._ammo
    }

    constructor(){
        console.log("I am a gun")
        window.addEventListener("keydown", (e: KeyboardEvent) => this.shoot(e))
    }
    private shoot(e:KeyboardEvent) {
        if(e.key === " "){
            this._ammo--
            //window.dispatchEvent(new Event("shoot"))
            let shootEvent = new CustomEvent("shoot", {detail:this})
            window.dispatchEvent(shootEvent)
        }
    }
    public update(){
        //
    }
}