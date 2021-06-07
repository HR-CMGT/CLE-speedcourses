export class UI {
    constructor(r) {
        this.robot = r;
        const game = document.querySelector('game');
        this.scoreField = document.createElement("ui");
        this.ammoField = document.createElement("ammo");
        game.appendChild(this.scoreField);
        game.appendChild(this.ammoField);
        window.addEventListener("shoot", (e) => this.gunWasFired(e));
    }
    gunWasFired(e) {
        let shootEvent = e;
        console.log("gun was fired");
        console.log(shootEvent.detail);
        this.ammoField.innerHTML = `Ammo:${shootEvent.detail.ammo}`;
    }
    update() {
        this.scoreField.innerHTML = `${Math.round(this.robot.score)} Health : ${Math.round(this.robot.health)}`;
    }
}
//# sourceMappingURL=ui.js.map