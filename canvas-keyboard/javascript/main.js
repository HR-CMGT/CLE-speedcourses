// DEMO FLIP CANVAS IMAGE BEFORE DRAWING

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let left = false
let right = false
let up = false
let down = false
let xspeed = 0
let yspeed = 0
let x = 20
let y = 20
let scale = 1

const image = new Image()
image.src = './tomnook.png'

const bg = new Image()
bg.src = './grass.png'

window.addEventListener("keydown", (e) => onKeyDown(e))
window.addEventListener("keyup", (e) => onKeyUp(e))

function drawScreen() {
    ctx.fillStyle = 'rgb(30,140,30)'
    ctx.fillRect(0, 0, 800, 600)

    const pattern = ctx.createPattern(bg, 'repeat') // kan ook in onload pattern
    ctx.fillStyle = pattern
    ctx.fillRect(0, 0, 800, 600)

    // flip the whole context before drawing
    x += xspeed
    y += yspeed
    ctx.save()
    ctx.scale(scale, 1)
    let drawx = x
    if(scale == -1) drawx = -200 + x * -1
    ctx.drawImage(image, drawx, y)
    ctx.restore()

    requestAnimationFrame(() => drawScreen())
}

function onKeyDown(event) {
    switch (event.key.toUpperCase()) {
        case "A":
            xspeed = -5
            scale = -1
            break;
        case "D":
            xspeed = 5
            scale = 1
            break;
        case "S":
            yspeed = 5
            break;
        case "W":
            yspeed = -5
            break;
    }
}

function onKeyUp(event) {
    switch (event.key.toUpperCase()) {
        case "A":
            xspeed = 0
            break;
        case "D":
            xspeed = 0
            break;
        case "S":
            yspeed = 0
            break;
        case "W":
            yspeed = 0
            break;
    }
}

drawScreen()