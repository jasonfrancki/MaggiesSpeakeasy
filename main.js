function makeDrink() {
	// const ingredientsList = document.querySelector('footer');
	const ul = document.querySelector('.allIngredients');
	const drinksList = document.querySelector('.drinks');

	for (drink of drinks) {
		// Create div for each drink
		const div = document.createElement('div');
		let drinkIngredients = `<ul>`;
		for (ing of drink.ingredients.sort()) {
			console.log(ing);
			drinkIngredients += `<li>${ing}</li>`;
		}
		div.classList.add('drink');
		div.innerHTML = `
			<div class="flip-card">
				<div class="flip-card-inner">
		  			<div class="flip-card-front">
					<h3>${drink.name}</h3>
					<img src="./img/drinks/${drink.name}.jpg">
				</div>
				<div class="flip-card-back">
					<h5>${drink.description}<h5>
					${drinkIngredients}
				</div>
			</div>
		`;
		div.addEventListener('click', () => {
			if (div.classList.contains('flip-card-click')) {
				div.classList.remove('flip-card-click');
			} else {
				if (document.querySelector('.flip-card-click')) {
					document.querySelector('.flip-card-click').classList.remove('flip-card-click');
				}
				div.classList.add('flip-card-click');
			}
		});
		drinksList.appendChild(div);

		// if (drink.missingIngredients.length > 0) {
		// 	div.style.backgroundColor = 'red';
		// }
	}

	// for (ing of ingredients.sort()) {
	// 	ul.innerHTML += `<li>${ing.name}</li>`;
	// 	console.log(ing.name);
	// }
}
makeDrink();
