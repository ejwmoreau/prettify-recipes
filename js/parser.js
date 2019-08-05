/**
 * Extract the relevant parts of the recipe to be used i.e. ingredients and
 * directions.
 * @param  {string} data The html of the url.
 * @param  {string} url The given url.
 * @return {Object} Returns the recipe ingredents and directions.
 */
function extractData(data, url) {
	cleaned_data = {};

	cleaned_data['title'] = extractTitle(data);
	cleaned_data['ingredients'] = extractIngredients(data);
	cleaned_data['directions'] = extractDirections(data);

	return cleaned_data;
}

function extractTitle(data) {
	regex = /<title>(.*)<\/title>/;
	title = data.match(regex)[1];
	// console.log(title);

	return title;
}

// NOTE: Only tested on Serious Eats so far.
function extractIngredients(data) {
	// Method 1: Use itemprop = ingredients.
	regex = /itemprop="ingredients">(.*)<\/li>/g;
	ingredients = [];
	ingredient = regex.exec(data);
	while (ingredient) {
		ingredients.push(ingredient[1]);
		ingredient = regex.exec(data);
	}

	return ingredients;
}

// NOTE: Not yet working.
function extractDirections(data) {
	// Method 1: Use itemprop = recipeInstructions.
	regex = /itemprop="recipeInstructions">(.*)<\/ol>/g;
	directionsPart = regex.exec(data);
	console.log(directionsPart);
	regex = /<p>(.+)<\/p>/g;
	directions = [];
	direction = regex.exec(directionsPart);
	console.log(direction);
	while (direction) {
		directions.push(direction[1]);
		direction = regex.exec(directionsPart);
	}
	console.log(directions);

	return directions;
}