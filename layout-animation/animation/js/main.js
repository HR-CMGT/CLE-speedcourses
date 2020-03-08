const button = document.querySelector("#add")
const albumContainer = document.querySelector("#albums")

window.addEventListener("load", () => startApp())
button.addEventListener("click", addAlbum)

function addAlbum() {
    const album = document.createElement("album")
    album.innerHTML = `<img src="images/cover1.jpg">
			<div>
				<h3>VHS Glitch</h3>
				<p>Land with no Future</p>
            </div>`
            
    albumContainer.appendChild(album)
}

function startApp() {
    for (let i = 0; i < 25; i++) {
        addAlbum()
    }
    createObserver()
}

function createObserver() {
    const config = {
        threshold: 0.5
    }
    observer = new IntersectionObserver((albums) => {
        for(let entry of albums) {
            console.log(entry.intersectionRatio)
            if (entry.intersectionRatio > 0.5) {
                entry.target.classList.add('visible');
            }
        }
    }, config)

    const albums = document.querySelectorAll('album');
    for (let a of albums) {
        observer.observe(a)
    }
}

// note: niet testen met live server, dom reloading werkt niet goed samen met intersection observer?
// http://localhost/CLE-speedcourses/layout-animation/animation/