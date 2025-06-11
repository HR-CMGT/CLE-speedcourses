import { Actor, Engine, Vector, Physics, EdgeCollider, Line, CollisionType, Shape, CompositeCollider } from "excalibur"



export class ColliderGroup extends Actor {
    
    onInitialize(engine) {
        let landscape = new CompositeCollider([
            Shape.Edge(new Vector(0, 0), new Vector(120, 30)),
            Shape.Edge(new Vector(120, 30), new Vector(240, 50)),
            Shape.Edge(new Vector(240, 50), new Vector(320, 10)),
            Shape.Edge(new Vector(320, 10), new Vector(430, 35))
        ])
        this.body.collisionType = CollisionType.Fixed
        this.collider.set(landscape)
        this.pos = new Vector(400, 350)
    }
}


// group aanmaken in constructor is minder leesbaar
// export class ColliderGroup extends Actor {
//     constructor() {
//         super({
//             pos: new Vector(400, 350),
//             collider: new CompositeCollider([
//                 Shape.Edge(new Vector(0, 0), new Vector(120, 30)),
//                 Shape.Edge(new Vector(120, 30), new Vector(240, 50)),
//                 Shape.Edge(new Vector(240, 50), new Vector(320, 10)),
//                 Shape.Edge(new Vector(320, 10), new Vector(430, 35))
//             ]),
//             collisionType: CollisionType.Fixed
//         })
//     }
// }