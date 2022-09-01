const app = document.getElementById("app") 


for (let badge of badges) {
	let a = document.createElement('div')
	a.classList.add('animal')
	let t = `<p class="titlecolor"><strong>${badge.Title}</strong></p>
	<p class="titlecolor2"><strong>Duration: </strong>${badge.Duration}</p>
	<p><strong>Reward: </strong>${badge.SDropID}</p>
	<p><strong>Times you can get it: </strong>${badge.Times}</p>`
		for (let x of badge.type) {
		t += `<img class="pet-photo" src="../images/${x}.png">`
	}
	a.innerHTML = t
	app.appendChild(a)
}