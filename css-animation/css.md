# CSS basics 

- semantische tags
- flexbox
- responsive
- smart selections
- position absolute
- transform, transition and animation

### Semantic elements

Je HTML wordt leesbaarder door tags de naam te geven van de functie die ze hebben, in plaats van `<div>`. Je hebt dan ook geen `class` meer nodig om het element via CSS te selecteren. Als je element zich wel moet gedragen als een `<div>` moet je de display mode op `block` zetten:

HTML
```
<album>
    <h3>Ren and Stimpy</h3>
    <p>Happy happy joy joy</p>
<album>
```
CSS
```
album {
    display:block;
}
```

### Flex

Flexbox helpt om elementen in een div naast elkaar te positioneren. In dit voorbeeld wordt flex gebruikt om de menu buttons naast elkaar te zetten.

HTML
```
<nav>
    <div>Albums</div>
    <div>Artists</div>
</nav>
```
CSS
```
nav {
    display:flex;
}
```

### Responsive

Een responsive container is eigenlijk gewoon een vlak dat meegroeit met het scherm tot een maximale breedte. Om de container te centreren gebruik je margins.

HTML
```
<container>
    <h2>Albums of the year</h2>
    <p>Learn how to use flexbox</p>
</container>
```
CSS
```
container {
    max-width:780px;
    margin: 0 auto;
}
```

Om het menu responsive te maken haal je de `flex` eigenschap weer weg op kleine schermen, *of* je kan de flex direction verticaal maken:

```
@media screen and (max-width: 600px) { 
    nav {
        display:inline;
        /*flex-direction: column;*/
    }
}
```
### Smart selections

Je hebt niet altijd `class` en `id` nodig om je HTML elementen te selecteren. Hieronder een paar voorbeelden van slimme CSS selecties. 

```
nav div {
	/* alle divs in het nav element */
}

nav div:nth-child(1) {
	/* alleen de eerste div in het nav element */
}

nav div:nth-child(n + 2) {
	/* alle divs behalve de eerste in het nav element */
}
```

### Position absolute

Een element met absolute positioning wordt verwijderd uit de document flow. Je moet dan zelf aangeven waar het element geplaatst moet worden.  

Dit kan handig zijn voor popups of laadbalkjes, die boven je site komen te staan.

Je kan CSS `calc()` gebruiken om zelf uit te rekenen waar het element moet komen te staan. In dit voorbeeld staat de popup op 50% van de schermbreedte, min de helft van zijn eigen breedte.

HTML
```
<popup>
    <p>Alert!</p>
</popup>
```
CSS
```
popup {
    display:block;
    position:absolute;
    width:400px;
    left:calc(50vw - 200px);
    top:20vh;
}
```

### Transform

Transform is een techniek om een element een visueel effect te geven, *zonder* dat de document flow verstoord wordt. Je element blijft dus onderdeel van de responsive layout.

In dit voorbeeld wordt een element kleiner getekend dan het echt is.

HTML
```
<album>
    <p>Welcome to the jungle</p>
</album>
```
CSS
```
album {
    transform:scale(0.5);
}
```

### Transition

Een `transition` laat de overgang tussen twee states soepel verlopen. In dit voorbeeld geven we een button een achtergrondkleur on mouse hover.

De transition zorgt ervoor dat de kleuren geleidelijk in elkaar overlopen

HTML
```
<nav>
    <div>Albums</div>
    <div>Artists</div>
</nav>
```
CSS
```
nav div {
    background-color:black;
    transition: all 0.4s ease-out;
}

nav div:hover {
    background-color:white;
}
```
Transitions werken goed samen met transform. In dit voorbeeld groeit de div on mouse hover:
```
album {
	transition: all 0.3s ease-in-out;
}

album:hover {
	transform:scale(1.1);
}
```
### Animation

In tegenstelling tot een transition gaat een animation meteen spelen zodra de pagina geladen wordt. Je kan een begin en eindstate van je animation vastleggen met `@keyframes`.

In dit voorbeeld loopt het laadbalkje langzaam vol. Dit duurt twee seconden. 

HTML
```
loading div {
	background-color:white;
	animation:fillbar 2s forwards linear;
}
```

CSS
```
@keyframes fillbar {
  from { width: 0%; }
  to { width:100%; }
}
```

#  Reading list

- [CSS Diner - a guide to smart selectors](https://flukeout.github.io)
- [A complete guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
