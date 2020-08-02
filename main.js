function makeDrink() {
	// const ingredientsList = document.querySelector('footer');
	const ul = document.querySelector('.allIngredients');
	const drinksList = document.querySelector('.drinks');

	for (drink of drinks) {
		// Create div for each drink
		const div = document.createElement('div');
		div.classList.add('drink');
		div.innerHTML += `<h3>${drink.name}</h3>`;
		div.innerHTML += `<img src="./img/drinks/${drink.name}.jpg">`;
		div.innerHTML += `<p>${drink.description}</p>`;
		for (ing of drink.ingredients) {
			div.innerHTML += `<li>${ing}</li>`;
		}
		div.innerHTML += `</ul>`;
		drinksList.appendChild(div);

		// if (drink.missingIngredients.length > 0) {
		// 	div.style.backgroundColor = 'red';
		// }
	}

	for (ing of ingredients.sort()) {
		ul.innerHTML += `<li>${ing.name}</li>`;
		console.log(ing.name);
	}
}

// function checkIngredients() {
// 	const drinks = document.querySelectorAll('.drink');
// 	for (drink of drinks) {
// 		for (ing of allMissingIngredients) {
// 			if (drink.innerHTML.indexOf(ing) !== -1) {
// 				// drink.innerHTML[drink.innerHTML.indexOf(ing)].style.backgroundColor = 'black';
// 				// drink.innerHTML.indexOf(ing).style.backgroundColor = 'green';
// 				drink.style.backgroundColor = 'red';
// 			} else {
// 				console.log(drink.innerHTML.indexOf(ing));
// 				drink.style.backgroundColor = 'green';
// 			}
// 		}
// 	}

// 	const lis = document.querySelectorAll('li');
// 	for (ing of allMissingIngredients) {
// 		for (li of lis) {
// 			if (ing.includes(li.textContent)) {
// 				li.classList.add('lineThrough');
// 				// li.style.textDecoration = 'line-through';
// 			} else {
// 				li.classList.remove('lineThrough');
// 			}
// 		}
// 	}
// 	// Select any li (main and footer?) that matches an allMissingIngredient and crossthrough
// 	// if (allMissingIngredients.indexOf(ing) != -1) {
// 	// 	div.classList.add('red');
// 	// }
// }

makeDrink();
// checkIngredients();
// Loop through drink objects and create a div for each one with name, photo, description and
// ingredient list

// FOOTER
// Loop through all ingredients arrays in each drink, reduce to one large array, remove duplicates
// List these in alphabetical order in the footer
// OnClick of ingredient - toggle strikethrough on list in footer and each drink that contains
// that ingredient, and change background to red and adjust opacity

const lis = document.querySelectorAll('.allIngredients li');

for (li of lis) {
	li.addEventListener('click', () => {
		// event.target.classList.toggle('lineThrough');
		if (allMissingIngredients.indexOf(event.target.textContent) === -1) {
			allMissingIngredients.push(event.target.textContent);
		} else {
			allMissingIngredients.pop(event.target.textContent);
		}
		checkIngredients();
	});
}
