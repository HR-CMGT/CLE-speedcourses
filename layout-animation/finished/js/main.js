const button = document.querySelector("#add")
const albums = document.querySelector("#albums")

button.addEventListener("click", addAlbum)

function addAlbum() {
    const album = document.createElement("album")
    album.innerHTML = `<img src="images/cover1.jpg">
			<div>
				<h3>VHS Glitch</h3>
				<p>Land with no Future</p>
            </div>`
            
    albums.appendChild(album)
}

