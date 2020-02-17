# Speed course Responsive HTML en CSS

Speed Course Responsive HTML and CSS

## Menu

- Menu bouwen met Flex, nav en div elementen
- Hover buttons
- Spring naar een section

## Responsive

- Responsive view in de browser
- Viewport tag
- Background image met cover
- Schalen met % en vw 
- Media Queries
- Menu layout
- Google fonts

## Form

- Frontend validatie van formuliervelden

# Workshop

## Navigatie

Maak het `nav` component een flex box. Geef de `div` tags in de nav een `flex grow` eigenschap, dit zorgt ervoor dat de buttons evenredig over de breedte verdeeld worden.

css
```css
nav {
    display:flex;
}
nav div {
    flex-grow: 1;
}
```
Om er echt mooie knoppen van te maken voegen we nog meer eigenschappen toe aan de divs in de nav bar:
```css
nav div {
    text-align: center;
    padding: 10px;
    background-color: rgba(94, 112, 135, 0.728);
    cursor: pointer;
    transition: all 0.4s ease-in;
}

nav div:hover {
    background-color: rgba(118, 149, 189, 0.728);
}
```
Bekijk `main.js` om te zien hoe je de menu buttons clickable kan maken. Bij click scroll je naar een element met een bepaalde id.

## Responsive

De meta tag zorgt voor juiste schaling in de browser.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Zorg dat het `main` element niet groter kan worden dan 1000px, maar wél kleiner.
```css
main {
    max-width: 1000px;
    margin: 0 auto;
}
```
## Afbeelding

Zorg dat de afbeeling in een section altijd net zo breed is als de section, met `%`:

```css
section img {
    width:100%;
}
```

### Media Queries

Met `media queries` kan je bepaalde CSS regels toepassen zodra het scherm een kleine afmeting heeft. In dit voorbeeld halen we de `flex` eigenschap weer van de `nav` af op kleine schermen:

```css
@media screen and (max-width: 600px) {
    nav {
        display: block;
    }
}
```

### Background image

Met `background-size cover` kan je een achtergrondafbeelding maken die altijd de beschikbare ruimte helemaal opvult, dit werkt goed voor header images.

Gebruik `vw` units om te zorgen dat de div altijd net zo breed is als de browser.

```html
<div id="header-image"></div>
```
css
```css
#header-image {
    width: 100vw;
    height: 50vh;
    background-image: url(../images/header.jpg);
    background-size: cover;
    background-position: center;
}
```
## Google font

Zoek een font uit op [google fonts](https://fonts.google.com), en kopieer de link tag naar `index.html`
```html
 <link href="https://fonts.googleapis.com/css?family=Oswald:400,700&display=swap" rel="stylesheet">
```
Nu kan je het font in CSS gebruiken
```css
body {
    font-family: 'Oswald', sans-serif;
}
```
# Form validatie

Met `required` en `type` kan je formulierinvoer automatisch controleren voordat het naar de server gestuurd wordt. 

```html
 <form action="/action_page.php">
    <input type="text" name="name" required placeholder="Naam"><br>
    <input type="email" name="email" required placeholder="Email"><br>
    <input type="submit" value="Verzenden">
</form>
```
Met CSS kan je een stijl toepassen die alleen geldt zo lang het veld niet correct is ingevuld.

```css
input[type=email]:invalid {
    border:2px dashed red;
}
```

## Links

- [Alles over Flex Box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Media Queries](https://www.w3schools.com/css/css3_mediaqueries_ex.asp)
- [Oefenen met CSS Selectors](https://flukeout.github.io/)

## Eindresultaat

![result](./images/result.png)