const plopSound = new Audio('./sound/plop.mp3')
const scoreField = document.querySelector("score")
let score = 0
let fishes = []
let bubbles = []

function createFishAndBubble(){
    for(let i = 0;i<10;i++){
        createFish()
        createBubble()
    }
    gameLoop()
}

function gameLoop(){
    for(let fish of fishes) {
        let position = fish.getBoundingClientRect()
        let newXposition = position.x - 1
        if (newXposition < 0 - position.width) {
            newXposition = window.innerWidth
        }
        let newYposition = position.y + Math.sin(newXposition/15)
        fish.style.transform = `translate(${newXposition}px, ${newYposition}px)`
    }
    for (let bubble of bubbles) {
        let position = bubble.getBoundingClientRect()
        let newposition = position.y - 2
        if (newposition < 0 - position.height) {
            newposition = window.innerHeight
        }
        bubble.style.transform = `translate(${position.x}px, ${newposition}px)`
    }
    requestAnimationFrame(()=>gameLoop())
}

function createFish(){
    let fish = document.createElement("fish")
    document.body.appendChild(fish)
    let startx = (Math.random() * window.innerWidth)
    let starty = (Math.random() * window.innerHeight)
    let color = Math.random() * 300 + 30
    let rng = Math.floor(Math.random() * 4)
    if(rng == 0) {
        color = 0
        fish.dataset.color = "blue"
    }
    fishes.push(fish)
    fish.style.transform = `translate(${startx}px, ${starty}px)`
    fish.style.filter = `hue-rotate(${color}deg)`
    fish.addEventListener("click", (e)=>killFish(e))
}

function createBubble(){
    let bubble = document.createElement("bubble")
    document.body.appendChild(bubble)
    let startx = (Math.random() * window.innerWidth)
    let starty = (Math.random() * window.innerHeight)
    bubble.style.transform = `translate(${startx}px, ${starty}px)`
    bubbles.push(bubble)
    bubble.addEventListener("click", (e)=>popBubble(e))
}

function killFish(e){
    let fish = e.target
    console.log(fish.dataset.color)
    if(fish.dataset.color == "blue") {
        updateScore()
    }
    fish.classList.add("dead")
    fishes = fishes.filter(f => f != fish)
}

function popBubble(e) {
    let bubble = e.target
    bubble.remove()
    bubbles = bubbles.filter(b => b != bubble)
    plopSound.play()
}

function updateScore(){
    score++
    scoreField.innerText = `Score: ${score}`
}

createFishAndBubble()