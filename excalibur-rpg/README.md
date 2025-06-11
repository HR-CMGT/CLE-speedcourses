# CLE Speedcourse Top Down RPG

- Topdown map waarop je kan rondlopen
- Tiling background
- Custom hitbox zodat je achter een boom langs kan lopen
- Camera volgt speler, camera gaat niet buiten beeld
- Enemy gaat je volgen zodra je in de buurt bent via [Vector distance](https://excaliburjs.com/docs/vector/)
- Enemy stopt met volgen als je je verstopt achter een boom (Er is geen *Line-of-Sight* meer). [RayCast](https://excaliburjs.com/docs/ray/). 
- Wapens oppakken en gebruiken

<br><br><br>

# Code Snippets

Alle snippets om de workshop te kunnen afronden

<br><br><br>

## Repeating tiles

Een stukje gras eindeloos laten herhalen

```js
const Resources = {
    Background: new ImageSource('images/grass.png', { wrapping: ImageWrapping.Repeat}),
}
```

```js
export class Background extends Actor {
    onInitialize(engine) {
        let sprite = new Sprite({
            image: Resources.Grass,
            sourceView: {x: 0, y: 0, width: 2000, height: 1200},
        })
        this.anchor = Vector.Zero
        this.graphics.use(sprite)
    }
}
```

<br><br><br>


## Custom hitbox

```js
export class Tree extends Actor {
    onInitialize(engine) {
        this.graphics.use(Resources.Tree.toSprite())
        this.body.collisionType = CollisionType.Fixed
        const customHitbox = Shape.Box(90,70, Vector.Half, new Vector(0,30))  // w,h,anchor,offset
        this.collider.set(customHitbox)
    }
}
```

<br><bR><br>

## Vectoren

```js
// afstand tussen twee vectoren
const distance = Vector.distance(engine.chicken.pos, this.pos)

// richting van een actor naar een andere actor
const vectorToChicken = engine.chicken.pos.sub(this.pos) 
const direction = vectorToChicken.normalize()

// tegenovergestelde richting
direction = direction.negate()

// richting vermenigvuldigen om een snelheid te krijgen
const speed = direction.scale(2)

// snelheid optellen bij positie
this.pos = this.pos.add(speed)
```


<br><br><br>

## 🤯 Line of Sight met Raycast

Zie ook [Vector math voorbeeld](#vector-math-voorbeeld)

### Alle objecten op een ray testen

Je kan vanuit de wereld een *raycast* doen, dit is een lijn die *alle* colliders toont waar de lijn doorheen gaat. Een `Ray` heeft een `startpunt` (Vector) en een `direction` (Vector). De `rayCast` heeft een `length` (number). 

Met `Vector.distance` kan je zien hoe ver het doel van het startpunt is. Met `Vector.sub` kan je het verschil tussen twee vectoren uitrekenen. Dat gebruik je dan weer voor de `direction` om vanaf het startpunt het doel te bereiken.

> *In dit voorbeeld start de `Ray` in de sheep, en gaat door *tot* de chicken. Als daar een `Tree` tussen zit stopt het schaap met het volgen van de kip. `🐑 ------🌳--🌳------> 🐓`*

SHEEP.JS
```js
onPreUpdate(engine){
    const distance = Vector.distance(engine.chicken.pos, this.pos)
    const vectorToChicken = engine.chicken.pos.sub(this.pos) 
    const direction = vectorToChicken.normalize()

    const ray = new Ray(this.pos, direction)
    const hits = this.scene.physics.rayCast(ray, {
        maxDistance: distance,
        searchAllColliders: true,
    })
}
```

Met `filter` kan je specifieke colliders accepteren als obstakel. Dit is nodig omdat anders de kip en het schaap ook als obstakel worden gezien.

```js
const hits = this.scene.physics.rayCast(ray, {
    maxDistance: distance,
    searchAllColliders: true,
    filter: (potentialHit) => {
        return potentialHit.collider.owner instanceof Tree
    }
})
```

- [Ray documentatie](https://excaliburjs.com/docs/ray/)
- [PhysicsWorld documentatie](https://excaliburjs.com/api/class/PhysicsWorld/)
- [Parameters to filter in or out objects](https://excaliburjs.com/api/interface/RayCastOptions/)
- [The returned hits](https://excaliburjs.com/api/interface/RayCastHit/)
- [CollisionGroups](https://excaliburjs.com/docs/collisiongroups) 

<br><Br><br>

### Check of een ray één doel raakt

In onderstaand voorbeeld cast je de ray niet in de wereld maar op een Actor. Je krijgt terug *waar* de ray die actor raakt. Dit kan `null` zijn. 

```js
const distanceToChicken = this.chicken.pos.sub(this.sheep.pos)
const direction = distanceToChicken.normalize()
const ray = new Ray(this.sheep.pos, direction)
const point = this.chicken.collider.get().rayCast(ray)
if (point) {
    console.log(`ray hits chicken at ${point}`)
}
```

<br><br><br>

## Camera volgt speler

GAME.JS
```js
export class Game extends Engine {
    startGame(){
        // camera volgt kip
        // this.currentScene.camera.strategy.lockToActor(this.chicken)
        // camera met vertraging
        this.currentScene.camera.strategy.elasticToActor(this.chicken, 0.2, 0.6)
        // camera kan niet buiten het level kijken
        let boundingBox = new BoundingBox(0, 0, 2000, 1200);
        this.currentScene.camera.strategy.limitCameraBounds(boundingBox)
    }
}

```

- [camera strategies](https://excaliburjs.com/docs/cameras/#camera-strategies)

<br><br><br>

## Vector math voorbeeld

```js
// afstand tussen ship en enemy
let distance = Vector.distance(ship.pos, enemy.pos)
// verschil in vector tussen ship en enemy
let vectorDifference = enemy.pos.sub(player.pos) 
// direction van ship naar enemy
let direction = vectorDifference.normalize()
// elk frame de direction naar enemy optellen bij ship
ship.pos = ship.pos.add(direction)
```

