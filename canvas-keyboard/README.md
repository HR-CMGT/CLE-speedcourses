# Canvas basics

Een karakter besturen op het canvas, in javascript en typescript

## Add canvas

```html
<canvas width="800" height="600" id="canvas">
```

## In het canvas tekenen met Javascript

```javascript
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'rgb(30,140,30)'
ctx.fillRect(0, 0, 50, 50)
```

### Een afbeelding tonen in Canvas

```javascript
const image = new Image()
image.src = './tomnook.png'
ctx.drawImage(image, 100, 100)
```
### Een herhalend patroon tekenen
```javascript
const bg = new Image()
bg.src = './grass.png'

const pattern = ctx.createPattern(bg, 'repeat') 
ctx.fillStyle = pattern
ctx.fillRect(0, 0, 800, 600)
```
Let op dat de volgorde van tekenen uitmaakt. Teken dus eerst de achtergrond en daarna de voorgrond.

## Keyboard input

Voor games werkt het goed om in een variabele bij te houden of de cursor toetsen wel of niet zijn ingedrukt. Je kan dan meerdere toetsen tegelijk indrukken om diagonaal te bewegen. 

```javascript
// x en y bijhouden
let x = 20
let y = 20
// status van de W A S D toetsen bijhouden
let left = false
let right = false
let up = false
let down = false
// luister naar keyboard input
window.addEventListener("keydown", (e) => onKeyDown(e))
window.addEventListener("keyup", (e) => onKeyUp(e))
```
Voordat we de speler tekenen kijken we of de vier richting variabelen veranderd zijn, daarmee passen we de x, y waarden aan
```javascript
if (left) x -= 5
if (right) x += 5
if (up) y -= 5
if (down) y += 5
ctx.drawImage(image, x, y)
```
De keyboard listener functies veranderen de vier richting variabelen. In dit voorbeeld kijken we alleen naar A. Je moet ook naar W S D kijken.
```javascript
function onKeyDown(event) {
    switch (event.key.toUpperCase()) {
        case "A":
            left = true
            break;
    }
}

function onKeyUp(event) {
    switch (event.key.toUpperCase()) {
        case "A":
            left = false
            break;
    }
}
```

[Bekijk hier de complete voorbeeldcode](./javascript)

# Object Oriented Typescript

In de typescript variant maken we Game.ts verantwoordelijk voor het tekenen van de canvas.

Game.ts heeft de gameloop. In de gameloop wordt player.ts (en eventuele andere game elementen) geupdate.

Player.ts wordt verantwoordelijk voor het verplaatsen van de speler met het toetsenbord.

Player.ts kan wel in de canvas tekenen, doordat er een verwijzing naar game aanwezig is.

### Game.ts

Hier zie je hoe je in Game.ts de canvas en player kan tekenen en de gameloop kan starten.

```typescript
class Game {
    
    private canvas:HTMLCanvasElement
    public ctx:CanvasRenderingContext2D
    private player:Player
    private bg:HTMLImageElement
     
    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement
        this.ctx = this.canvas.getContext('2d')!

        this.player = new Player(this)
        this.update()
    }
    
    private update(){
        this.ctx.fillStyle = 'rgb(30,140,30)'
        this.ctx.fillRect(0, 0, 800, 600)

        this.player.update()
        
        requestAnimationFrame(() => this.update())
    }
}
```

### Player.ts

In dit stukje code zie je hoe de player kan tekenen in de canvas van de game.

```typescript
class Player {

    private game:Game
    private x:number
    private y:number
    private image:HTMLImageElement

    constructor(g:Game) {
        this.game = g
        this.x = 20
        this.y = 20

        this.image = new Image()
        this.image.src = './images/tomnook.png'
    }
    
    public update() : void {
        this.game.ctx.drawImage(this.image, this.x, this.y)
    }
}
```
Je moet ook de keyboard listeners toevoegen aan de player, om de X en Y waarden aan te passen!

[Bekijk hier de complete code](./typescript)

Vergeet niet CMD+SHIFT+B te doen om typescript te compileren

