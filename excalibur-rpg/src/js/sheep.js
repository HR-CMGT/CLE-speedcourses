import { Actor, Engine, Vector, CollisionType, Shape, Ray } from "excalibur"
import { Resources } from './resources'
import { Chicken } from "./chicken"
import { Game } from "./game"
import { Tree } from "./tree"

export class Sheep extends Actor {

    state = "idle"

    constructor() {
        super({ width: Resources.Sheep.width, height: Resources.Sheep.height })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Sleep.toSprite())
        this.pos = new Vector(200, 120)
        this.pos = new Vector(Math.random() * 2000, Math.random() * 1200)
        this.body.collisionType = CollisionType.Active

    }

    onPreUpdate(engine) {

        const distance = Vector.distance(engine.chicken.pos, this.pos)
        const vectorToChicken = engine.chicken.pos.sub(this.pos)
        const direction = vectorToChicken.normalize()  // .negate() // wegrennen van speler
        const speed = direction.scale(2)

        switch (this.state) {
            case "idle":
                if (distance < 200) {
                    this.state = "following"
                    this.graphics.use(Resources.Sheep.toSprite())
                }
                break;
            case "following":
                // walk to player
                this.pos = this.pos.add(speed)
                this.graphics.flipHorizontal = (direction.x > 0)


                // check LOS
                const ray = new Ray(this.pos, direction)
                const hits = this.scene.physics.rayCast(ray, {
                    maxDistance: distance,
                    searchAllColliders: true,
                    filter: (potentialHit) => {
                        return potentialHit.collider.owner instanceof Tree
                    }
                })

                if (hits.length > 0) {
                    this.state = "idle"
                    this.graphics.use(Resources.Sleep.toSprite())
                }
                break;
        }
    }

}


