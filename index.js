const shopList = document.querySelectorAll('.shop-list')[0]
const listOfBuys = document.querySelectorAll('.shop-list li')

listOfBuys.forEach((element) => {
	element.addEventListener('mouseover', (event) => {
		let removeButton = event.target.querySelector('.remove')
		removeButton.classList.toggle('visible')
		console.log(removeButton)
		removeButton.addEventListener('click', (event) => {
			event.target.parentElement.remove()
		})
	})
})

console.log('hello, GitHub!')
console.log('another')
