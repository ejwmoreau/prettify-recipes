function processRecipe(url) {
	var request = new XMLHttpRequest();
	request.open('GET', url);
	//request.responseType = '???';

	request.onerror() = function() {
		console.log("Couldn't load recipe from: " + url)
	}
	request.onload() = function() {
		console.log("Recipe was loaded successfully.");
		console.log(request.responseText);
		cleanAndSendRecipe(request.responseText, url);
	}
	request.send();
}

function grabData(data, url) {
	cleaned_data = {}

	// Grab a title/name for the recipe.

	// Grab the ingredients and save under cleaned_data['ingredients'].

	// Grab the directions and save under cleaned_data['directions'].

	// NOTE: May need to grab differently depending on website.
}

function cleanAndSendRecipe(data, url) {
	cleaned_data = grabData(data, url);

	// Convert data to pretty formatted markdown for Trello.
	// Also include the url as source for recipe.

	// Send data to Trello via API.
	var request = new XMLHttpRequest();
	// TODO: Other parts of request.

	request.onerror() = function() {
		console.log("Could not talk to Trello.");
	}
	request.onload() = function() {
		console.log("Recipe was saved to Trello successfully.")
		// Show a successful message to website user.
		// TODO: Probably also show a message for any errors that
		// happened along the way.
	}
	request.send();
}