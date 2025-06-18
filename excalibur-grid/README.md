# CLE Speedcourse Grid, Player Progress

In deze speed course zijn de volgende onderwerpen behandeld:

### Grid

- De ork kan je slepen en loslaten op een grid
- De schapen staan op een grid
- De kip kan je met WASD laten wisselen tussen 3 vaste posities

### Player Progress

- De game houdt de voortgang van de speler bij in de variabele `playerProgress`
- Vanuit verschillende Scenes kan je die progress uitlezen en aanpassen

<br><br><br>

# Code Snippets

Snippets uit de speed course

### Actors op een grid

Een grid bestaat uit rijen en kolommen, meestal een getal tussen 1 en 10 (afhankelijk van je scherm formaat).

Vermenigvuldig de rij,kolom met de afmeting van een cel (bv. 100 pixels). 

```js
let ork = new Ork()
let column = 3
let row = 2
ork.pos = new Vector(column * 100, row * 100)
```

<br><br><br>

### Drag & Drop snapping on a grid

- Als een draggable item wordt losgelaten krijg je een `evt.worldPos` (de positie in de wereld waar je het item los laat).
- Dit kan je afronden naar hele hondertallen, zodat je altijd in het grid terecht komt.

```js
let posDropped = evt.worldPos
let snappedX = Math.round(posDropped.x / 100) * 100
let snappedY = Math.round(posDropped.y / 100) * 100
this.pos = new Vector(snappedX, snappedY)
```

<br><br><br>

### Wisselen tussen vaste grid posities

- Er zijn drie vaste grid posities, bestaande uit een rij en kolom waar de actor mag staan: 
```js
this.allowedPositions = [
    { row: 2, column: 3 },
    { row: 3, column: 1 },
    { row: 4, column: 4 },
]
```
- Via `currentIndex` hou je bij wat de huidige positie is.
- Met de cursorkeys spring je naar de volgende positie.

Voorbeeldcode vind je in [chicken.js](./src/js/chicken.js)

<br><br><br>

## Player Progress

Als je wisselt tussen `Scenes` dan is het handig om de algemene player progress in je `Game.js` bij te houden. Dan kan je altijd via `this.scene.engine` of via `this.engine` bij de player progress komen.

Let op dat je via `onActivate` in een `Scene` de meest recente progress kan ophalen.

```js
export class Game extends Engine {

    startGame() {
        this.playerProgress = {
            coin:false,
            plant:false
        }

        this.add('level', new GameScene())
        this.add('bookscene', new BookScene())
        this.goToScene('level')   
    }
}
```

```js
class GameScene extends Scene {
    onActivate(ctx) {
        console.log(`coin: ${this.engine.playerProgress.coin}, plant: ${this.engine.playerProgress.plant}`)
    }
}
```