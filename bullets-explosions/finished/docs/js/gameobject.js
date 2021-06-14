export class GameObject {
    constructor(tag) {
        this.div = document.createElement(tag);
        document.body.appendChild(this.div);
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    remove() {
        this.div.remove();
    }
}
//# sourceMappingURL=gameobject.js.map