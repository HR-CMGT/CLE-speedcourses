export class Gun {
    constructor() {
        this._ammo = 10;
        console.log("I am a gun");
        window.addEventListener("keydown", (e) => this.shoot(e));
    }
    get ammo() {
        return this._ammo;
    }
    shoot(e) {
        if (e.key === " ") {
            this._ammo--;
            let shootEvent = new CustomEvent("shoot", { detail: this });
            window.dispatchEvent(shootEvent);
        }
    }
    update() {
    }
}
//# sourceMappingURL=gun.js.map