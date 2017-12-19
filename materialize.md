# CLE materialize

Getting started using Materialize CSS

## Containers
Een container is het basis element waarin je tekstcontent plaatst. Een container schaalt automatisch mee met het scherm, maar tot een maximale breedte - dit bevordert de leesbaarheid van de tekst op hele brede schermen. 

Om het effect te zien van een container kan je deze een andere achtergrondkleur geven dan de body. Als je een full-width afbeelding wil gebruiken plaats je die juist niet in een container:

Kopieer de [lege HTML start page](./css_materialize/home.md) en plaats een container:

```
<body>
	<div class="container white">Deze tekst staat in een container</div>
    <img class="responsive-img" src="images/mountain.jpg">
</body>
```

## Content
Je kan tekstcontent en [Materialize componenten]() in de container plaatsen:
```
<body>
	<div class="container">
        <div>Dit is een gewone ouderwetse div</div>

        <ul class="collection">
            <li class="collection-item">Leonardo</li>
            <li class="collection-item">Donatello</li>
            <li class="collection-item">Michelangelo</li>
            <li class="collection-item">Raphael</li>
        </ul>
    </div>
</body>
```

## Kleur
Je kan de naam van achtergrondkleur en tekst meegeven als class names. Deze div heeft een witte achtergrondkleur en zwarte tekst:
`<div class="white text-black">Boink</div>`

## Grid system
Een grid is een manier om responsive te werken met rijen en kolommen.

In de container plaats je rows. Binnen een row kan je kolommen met content plaatsen. Een kolom kan een breedte van 1 tot 12 hebben, waarbij 1 staat voor 1/12 van de beschikbare breedte, en 12 staat voor alle beschikbare breedte.

Je kan per device aangeven hoe breed elke kolom moet zijn. Daarbij staat `s` voor mobile, `m` voor tablet, en `l` voor desktop. In dit voorbeeld is een kolom 12 breed op mobile (`s12`). Op tablet en desktop passen er twee kolommen naast elkaar (`m6`).

```
<div class="container">
    <div class="row white">
        <div class="col s12 m6">
              <p>Dit is een kolom</p>
        </div>
        <div class="col s12 m6 grey">
              <p>Dit is een kolom</p>
        </div>
    </div>
</div>
```

## Afbeeldingen in een kolom
Omdat een kolom padding heeft krijgt een afbeelding witte randen. Als je dit niet wil kan je de kolom een achtergrondafbeelding en een hoogte geven:

HTML
```
<div class="col s12 m6 mountain"></div>
```
CSS
```
.mountain {
	background-image: url("../images/mountain.jpg");
	background-size: cover;
	height:400px;
}
```

## Grid is breder dan container

Als je een grid binnen een container plaatst moet je er rekening mee houden dat de grid iets **breder** is dan de parent container. Dit kan soms opvallen als je ook content hebt die niet in een grid staat.