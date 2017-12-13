# Javascript basics 

- Event Listeners: load, click, animationend
- Creating objects
- Adding CSS classes using javascript
- String templates with ${}
- Creating dom elements

### Event listeners

DOM elementen zoals window, een button of een animatie kunnen Events genereren zodra er een bepaalde gebeurtenis plaatsvindt. Met EventListeners kan je op die gebeurtenis reageren. Drie voorbeelden:

```
// Voer startApp uit als het window klaar is met laden
window.addEventListener("load", () => startApp())

// voer loadQuestion uit als er op de button geklikt wordt
button.addEventListener("click", () => loadQuestion())

// voer showAnswers uit als de balk klaar is met animeren
bar.addEventListener("animationend", showAnswers)
```

### Creating objects

Naast de datatypes `boolean`, `byte`, `string`, `number`, `Array` hebben we in javascript ook het datatype `Object`. Hierin kan je zelf combinaties van variabelen opslaan. Het verschil met een Array is dat de waarden in een Object ook een naam hebben ("keys and values")

```
let obj = {
    tekst: "Dit is een object",
    getal: 3,
    loggedin: false
}
```

### CSS Classes toevoegen

In dit voorbeeld starten we een animatie door de animation class toe te voegen aan een DOM element

JS
```
bar.classList.add("loadinganimation")
```

CSS
```
.loadinganimation {
	animation:fillbar 0.8s forwards linear;
}

@keyframes fillbar {
  0% { width: 0px; opacity:1;}
  75% { width:400px; opacity:1;}
  100% { opacity:0;}
}
```

### String templates with ${}

String templates maken het invoegen van variabelen in een tekst minder foutgevoelig. Tussen de ${} syntax kan je javascript typen, zonder dat je de quotes van de string hoeft af te sluiten.
```
let value = 3
let txt = `Is de waarde ${value} groter dan 4 ${value > 4} of niet?`
``` 

### Manipulating DOM elements

Via javascript kan je HTML elementen opzoeken en aanpassen.

### Creating DOM elements

Via javascript kan je HTML elementen aanmaken.

#  Reading list

- [Events](https://developer.mozilla.org/en-US/docs/Web/Events)
