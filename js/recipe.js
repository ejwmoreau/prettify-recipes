function cleanRecipe() {
	var ingredients = document.getElementById('ingredients').value;
	var ingredientArray = ingredients.split(/\n/);
	var formattedIngred = "";
	for(i = 0; i < ingredientArray.length; i++) {
		formattedIngred += "* " + ingredientArray[i] + "\n";
	}
	document.getElementById("formattedIngredients").innerHTML = formattedIngred;

	var recipeList = document.getElementById('instructions').value;
	var recipeSteps = recipeList.split(".");
	var formattedRecipe = "";
	var num = 1;

	for(i = 0; i < recipeSteps.length; i++) {
		// Ignores list numbers from the instructions.
		if(recipeSteps[i].length > 3) {
			formattedRecipe += num + ". " + recipeSteps[i] + ".\n";
			num++;
		}
	}
	document.getElementById("formattedInstructions").innerHTML = formattedRecipe;
}

/**
 * Converts the recipe data to a formatted markdown for Trello. Sends the
 * formatted recipe to the Trello API.
 * @param  {Object} data The source code of the recipe website.
 * @param  {string} url  The source url of the recipe.
 */
function formatAndSendRecipe(data, url) {
	cleaned_data = extractData(data, url);
	formatted_data = formatRecipe(cleaned_data, url);

	return;
	// Send data to Trello via API.
	var request = new XMLHttpRequest();
	// TODO: Other parts of request.

	request.onerror() = function() {
		console.log("Could not talk to Trello.");
	};

	request.onload() = function() {
		console.log("Recipe was saved to Trello successfully.")
		// Show a successful message to website user.
		// TODO: Probably also show a message for any errors that
		// happened along the way.
	};

	request.send();
}

/**
 * Formats the recipe into a markdown format.
 * @param  {Object} data The recipe data.
 * @param  {string} url  The url of the recipe.
 * @return {Object}      The markdown formatted recipe.
 */
function formatRecipe(data, url) {
	return {};
}
