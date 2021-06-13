export class GameObject {
    protected x: number
    protected y: number
    protected div: HTMLElement

    constructor(tag : string) {
        this.div = document.createElement(tag)
        document.body.appendChild(this.div)
    }

    public getBoundingRect(): ClientRect {
        return this.div.getBoundingClientRect()
    }

    public update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public remove(){
        this.div.remove()
    }
}