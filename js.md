# Javascript workshops 

- Accessing dom elements
- Event Listeners: load, click, animationend
- Creating objects
- Adding CSS classes using javascript
- String templates with ${}

### Accessing DOM elements

Om via javascript je DOM elementen te kunnen manipuleren, kan je ze opzoeken met `getElementBy`. Als je elementen zoekt via de classname of tagname krijg je een array terug, omdat er meerdere elementen kunnen zijn met die naam.

HTML
```
<button id="mybutton"></button>
<div class="menu"></div>
<article>Hello</article>
```
JS
```
let button = document.getElementById("mybutton")
let menu = document.getElementsByClassName("menu")[0]
let art = document.getElementsByTagName("article")[0]
```
Je kan CSS style syntax gebruiken om DOM elementen op te zoeken:
```
// zoek alle divs met de class menu
let myitem = document.querySelector("div.menu");
```

#### Elementen aanmaken

Het is mogelijk om DOM elementen via script aan te maken en aan je document toe te voegen:
```
let el = document.createElement("div")
el.innerHTML = "Hello world!"
document.body.appendChild(el)
```

### Event listeners

DOM elementen zoals window, een button of zelfs animaties genereren Events om aan te geven dat er iets is veranderd in hun status. Met EventListeners kan je op die verandering reageren. Drie voorbeelden:

```
// Voer startApp uit als het window klaar is met laden
window.addEventListener("load", () => startApp())

// voer loadQuestion uit als er op de button geklikt wordt
button.addEventListener("click", () => loadQuestion())

// voer showAnswers uit als de balk klaar is met animeren
bar.addEventListener("animationend", showAnswers)
```

*note: de ()=> syntax hoort bij ES6 en werkt niet in oudere browsers. In PHPStorm kan je onder settings > language > javascript de taal op ES6 zetten*

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

### String templates met ${}

String templates maken het invoegen van variabelen in een tekst minder foutgevoelig. Tussen de ${} syntax kan je javascript typen, zonder dat je de quotes van de string hoeft af te sluiten.
```
let value = 3
let txt = `Is de waarde ${value} groter dan 4 ${value > 4}?`
``` 

#  Reading list

- [Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
