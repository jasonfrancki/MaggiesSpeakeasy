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

function changeColor() {
	let root = document.body;
	root.addEventListener('click', (e) => {
		console.log('clicked');
		root.style.setProperty('--primary-color', 'pink');
	});
}

function initialize() {
	makeDrink();
	// changeColor();
}

initialize();

// :root {
// 	--primary-color: red;
// 	--secondary-color: white;
// 	--tertiary-color: blue;
// }

const button = document.querySelector('i');
let isDark = false;
button.addEventListener('click', () => {
	// Change colors - more near black/gray and white
	// nav bar black background with white letters, body the reverse
	let root = document.body;
	if (!isDark) {
		root.style.setProperty('--primary-color', '#1f1f1f');
		root.style.setProperty('--secondary-color', '#444');
		root.style.setProperty('--tertiary-color', '#1e1e1e');
		root.style.setProperty('--text-color', '#bb86fc');
		isDark = true;
		// button.textContent = 'Light Mode';
	} else {
		console.log('else' + button.textContent);
		root.style.setProperty('--primary-color', 'rgb(255, 192, 245)');
		root.style.setProperty('--text-color', '#444');
		root.style.setProperty('--tertiary-color', 'rgb(255, 192, 245)');
		root.style.setProperty('--secondary-color', '#0d0d0d');
		isDark = false;
		// button.textContent = 'Dark Mode';
	}
});

// Light Mode
// --primary-color: #6200ee;
// --secondary-color: #ebe0fc;
// --tertiary-color: #ffffff;
// --text-color: #0d0d0d;

// Dark Mode
// --primary-color: #1f1f1f;
// --secondary-color: #121212;
// --tertiary-color: #1e1e1e;
// --text-color: #bb86fc;
