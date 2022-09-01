const app = document.getElementById("app") 


for (let badge of badges) {
	let a = document.createElement('div')
	a.classList.add('animal')
	let t = `<p class="titlecolor"><strong> ${badge.Name}</strong></p>
	<p><strong>Obtainable through:</strong> ${badge.StageObtainWay}</p>
	<p><strong>Quality</strong><img class="pet-photo2" src="../images/${badge.Quality}.png"></p>`

	for (let x of badge.IconPath) {
		t += `<img class="pet-photo" src="../images/${x}.png">`
	}
	a.innerHTML = t
	app.appendChild(a)
}