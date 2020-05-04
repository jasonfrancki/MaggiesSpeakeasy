const drinks = [
	{
		name: 'Rum and Coke',
		img: 'https://www.umami.site/wp-content/uploads/2016/03/rum-coke-2.jpg',
		description: 'Smooth and sweet!',
		ingredients: [ 'White Rum', 'Cola' ],
		missingIngredients: []
	},
	{
		name: 'Mai Tai',
		img:
			'data:image/jpeg;base64,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',
		description: 'A Tiki Favorite',
		ingredients: [ 'White Rum', 'Dark Rum', 'Orange Curacao', 'Lime Juice', 'Orgeat' ],
		missingIngredients: []
	}
];

const allIngredients = [];
const allMissingIngredients = [ 'Cola' ];

// MAIN

function makeDrink() {
	// const ingredientsList = document.querySelector('footer');
	const ul = document.querySelector('.allIngredients');
	const drinksList = document.querySelector('.drinks');

	for (drink of drinks) {
		// Create div for each drink
		const div = document.createElement('div');
		div.classList.add('drink');
		div.innerHTML += `<h3>${drink.name}</h3>`;
		div.innerHTML += `<img src="${drink.img}">`;
		div.innerHTML += `<p>${drink.description}</p>`;
		div.innerHTML += `<ul>`;
		for (ing of drink.ingredients) {
			div.innerHTML += `<li>${ing}</li>`;
		}
		div.innerHTML += `</ul>`;
		drinksList.appendChild(div);

		// Add ingredients to master ingredients array
		drink.ingredients.forEach(function(ingredient) {
			if (allIngredients.indexOf(ingredient) === -1) {
				allIngredients.push(ingredient);
			}
		});

		// if (drink.missingIngredients.length > 0) {
		// 	div.style.backgroundColor = 'red';
		// }
	}

	for (ing of allIngredients.sort()) {
		ul.innerHTML += `<li>${ing}</li>`;
	}
}

function checkIngredients() {
	const drinks = document.querySelectorAll('.drink');
	for (drink of drinks) {
		for (ing of allMissingIngredients) {
			if (drink.innerHTML.indexOf(ing) !== -1) {
				// drink.innerHTML[drink.innerHTML.indexOf(ing)].style.backgroundColor = 'black';
				// drink.innerHTML.indexOf(ing).style.backgroundColor = 'green';
				drink.style.backgroundColor = 'red';
			} else {
				console.log(drink.innerHTML.indexOf(ing));
				drink.style.backgroundColor = 'green';
			}
		}
	}

	const lis = document.querySelectorAll('li');
	for (ing of allMissingIngredients) {
		for (li of lis) {
			if (ing.includes(li.textContent)) {
				li.classList.add('lineThrough');
				// li.style.textDecoration = 'line-through';
			} else {
				li.classList.remove('lineThrough');
			}
		}
	}
	// Select any li (main and footer?) that matches an allMissingIngredient and crossthrough
	// if (allMissingIngredients.indexOf(ing) != -1) {
	// 	div.classList.add('red');
	// }
}

makeDrink();
checkIngredients();
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
