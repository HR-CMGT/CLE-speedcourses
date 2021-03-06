# Grid Layout

We maken een eenvoudig responsive grid, en voegen items toe via javascript. Download de files uit de `start` folder.

## Semantische tags

In plaats van `<div class="album"></div>` maken we onze eigen `<album></album>` tag. 

In CSS kan je deze tag de juiste layout geven met: 

```css
album {
    display:block;
    background-color:white;
}
```
In javascript kan je de albums terugvinden met
```javascript
const albums = document.querySelectorAll("album")
```

## CSS Grid

Een grid verdeelt elementen mooi uitgelijnd over de pagina. In dit voorbeeld zie je een grid met 3 kolommen. Elke kolom neemt 1/3 van het scherm in, dit bepaal je met de `fr` unit.

Dit grid gebruikt `grid-auto-rows` zodat het aantal rijen niet vast staat. De afmeting is hier `max-content`, dat is de hoogte van de items die in de row staan.

```css

#albums {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: max-content;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}
```

## CSS Media Queries

We geven het grid minder columns op kleinere schermen. In dit geval houden we rekening met tablets en telefoons:

```css
@media screen and (max-width: 750px) {
    #albums {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 550px) {
    #albums {
        grid-template-columns: 1fr;
    }
}
```

## CSS hover animatie

We geven de albums een iets andere layout als de muis erover heen beweegt. De overgang tussen de gewone state en de hover state kan je **animeren** met een `transition`.

```css
.album:hover {
    transform:scale(1.05);
	box-shadow: 0px 0px 45px rgba(0,0,0,0.5);
}

.album {
    transition: all 0.3s ease-in-out; 
}
```

## CSS Image Fit

Als je afbeeldingen verschillende afmetingen hebben is het mooier om ze te passen in de beschikbare ruimte:

```css
album img {
    width:100%;
    object-fit: cover;
}
```

## Albums toevoegen met Javascript

Je kan nieuwe album elementen aanmaken met `createElement`, en je plaatst deze in de DOM met `appendChild`. 

```javascript
const container = document.querySelector("#albums")
const newAlbum = document.createElement("album")
container.appendChild(newAlbum)

album.innerHTML = `<img src="images/cover1.jpg">
    <div>
        <h3>VHS Glitch</h3>
        <p>Land with no Future</p>
    </div>`
```

Plaats alle code in een `addAlbum()` functie, en roep die functie aan met de button:

```javascript
function addAlbum(){
   ...
}

const button = document.querySelector("#add")
button.addEventListener("click", addAlbum)
```

## Scroll animatie

In de map [animation](./animation) vind je een voorbeeld van *Fade in after scroll*. De albumhoezen verschijnen pas in beeld als je er naar toe scrolled.

## Links

- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid Garden - a game for learning CSS Grid](https://cssgridgarden.com)
- [Image Fit to container](https://css-tricks.com/almanac/properties/o/object-fit/)
- [Fade in after Scroll - Animation](https://alligator.io/js/intersection-observer/)