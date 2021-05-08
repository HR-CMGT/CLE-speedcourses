const plopSound = new Audio('./sound/plop.mp3')

function createFishAndBubble(){
    for(let i = 0;i<15;i++){
        createFish()
        createBubble()
    }
}

function createFish(){
    let fish = document.createElement("fish")
    document.body.appendChild(fish)
    let startx = (Math.random() * window.innerWidth)
    let starty = (Math.random() * window.innerHeight)
    let color = Math.random() * 360
    fish.style.transform = `translate(${startx}px, ${starty}px)`
    fish.style.filter = `hue-rotate(${color}deg)`
    fish.addEventListener("click", killFish)
}

function createBubble(){
    let bubble = document.createElement("bubble")
    document.body.appendChild(bubble)
    let startx = (Math.random() * window.innerWidth)
    let starty = (Math.random() * window.innerHeight)
    bubble.style.transform = `translate(${startx}px, ${starty}px)`
    bubble.addEventListener("click", popBubble)
}

function killFish(e){
    let fish = e.target
    fish.classList.add("dead")
}

function popBubble(e) {
    let bubble = e.target
    bubble.remove()
    plopSound.play()
}

createFishAndBubble()