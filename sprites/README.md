# Speed Course Sprites

Deze speed course gaat verder met de visjes en bubbles uit de GameLoop speed course, nu in Typescript

- Achtergrond laten scrollen
- Visjes animeren met spritesheet
- Pauze knop
- Omzetten naar classes?

<br>
<br>

## Verschillen met javascipt

Bij **queryselector** plaats je een `!` als je zeker weet dat het element bestaat in HTML. Je moet er ook bij zeggen dat je een `HTMLElement` terug verwacht.
```typescript
const pauseButton = document.querySelector("pause")! as HTMLElement
```
Als je een array aanmaakt (*bv. een array van HTMLElementen*), dan kan je het type aangeven én een lege array aanmaken:
```typescript
let fishes : HTMLElement[] = []
```
Bij een **event handler** moet je aangeven dat je functie een `Event` verwacht. Als je daaruit het `target` wil gebruiken moet je aangeven dat dat een `HTMLElement` is:
```typescript
fish.addEventListener("click", (e) => killFish(e))

function killFish(e : Event){
    let fish = e.target as HTMLElement
}
```

## Compileren

- Typescript files compileren naar docs map: druk **CMD/CTRL + SHIFT + B** in VS Code.

<br>
<br>

## Links

- [CodePen demo Fish](https://codepen.io/eerk/pen/qBrNJNL?editors=0010)
- [CodePen demo Link](https://codepen.io/eerk/pen/ERYoZp?editors=0111)
- [Scrolling background](https://github.com/HR-CMGT/Typescript/blob/master/snippets/scrolling.md)
- [Spritesheets](https://github.com/HR-CMGT/Typescript/blob/master/snippets/spritesheet.md)
