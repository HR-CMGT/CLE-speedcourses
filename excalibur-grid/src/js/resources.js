import { ImageSource, Sound, Resource, FontSource, Loader, ImageWrapping } from 'excalibur'

const Resources = {
    Bird: new ImageSource('images/bird.png'),
    Ork: new ImageSource('images/ork.png'),
    Sheep: new ImageSource('images/sheep.png'),
    PixelFont: new FontSource('fonts/PressStart2P-Regular.ttf', 'PressStart'),
    Grass: new ImageSource('images/grass.jpg', { wrapping: ImageWrapping.Repeat }),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }