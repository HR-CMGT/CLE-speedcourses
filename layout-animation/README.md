# Layout en Animatie

We maken een eenvoudig responsive grid, en voegen items toe via javascript.

## Semantische tags

In plaats van `<div class="album"></div>` maken we onze eigen `<album></album>` tag. 

In CSS kan je deze tag de juiste layout geven met: 

```css
album {
    display:block;
    background-color:white;
}
```
In javascript kan je de een array van albums terugvinden met
```javascript
const albums = document.querySelectorAll("album")
```

## CSS Grid

Een grid verdeelt elementen mooi uitgelijnd over de pagina. In dit voorbeeld zie je een grid met 3 kolommen. Elke kolom neemt 1/3 van het scherm in, dit bepaal je met de `fr` unit.

In dit voorbeeld komen er automatisch nieuwe rijen in het grid als je items toevoegt, dankzij `grid-auto-rows`. Een rij is nu altijd 360 pixels hoog. 

```css

#albums {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 360px;
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

## CSS transities

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

## Elementen toevoegen met Javascript

Je kan nieuwe albums toevoegen met `createElement`. De inhoud van het album kan je toevoegen met `innerHTML`.

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

Plaats deze code in een `addAlbum()` functie, en roep de functie aan met de *add album* button.
```javascript
const button = document.querySelector("#add")
button.addEventListener("click", addAlbum)
```

## Links

- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid Garden - a game for learning CSS Grid](https://cssgridgarden.com)