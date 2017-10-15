/**
 * Query the url and grab the html.
 */
function grabRecipe() {
	url = $("#recipe-url").val();

	// Ensures the url is valid.
	if (!url || !(url.startsWith('http://') || url.startsWith('https://'))) {
		return;
	} else if (url.startsWith('http://')) {
		url = 'https://cors-anywhere.herokuapp.com/' + url;
	}

	$("#return-msg").text("Loading...");

	data = {}
	$.get(url, function(data) {
		// console.log(data);
		formatAndSendRecipe(data);
	})
	.fail(function(msg) {
		console.log(msg);
		$("#return-msg").text("Sorry, I couldn't load that recipe url :(");
	});
}

/**
 * Extract the relevant parts of the recipe to be used i.e. ingredients and
 * directions.
 * @param  {string} data The html of the url.
 * @param  {string} url The given url.
 * @return {Object} Returns the recipe ingredents and directions.
 */
function extractData(data, url) {
	cleaned_data = {};

	// Grab a title/name for the recipe.
	// Grab the ingredients and save under cleaned_data['ingredients'].
	// Grab the directions and save under cleaned_data['directions'].

	// NOTE: May need to grab differently depending on website.
	return cleaned_data;
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
