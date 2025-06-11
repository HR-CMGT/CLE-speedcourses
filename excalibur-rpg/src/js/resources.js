import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

const Resources = {
    Bird: new ImageSource('images/bird.png'),
    Tree: new ImageSource('images/tree.png'),
    Sword: new ImageSource('images/sword.png'),
    Sheep: new ImageSource('images/sheep.png'),
    Sleep: new ImageSource('images/sleep.png'),
    Grass: new ImageSource('images/grass.jpg', { wrapping: ImageWrapping.Repeat }),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }