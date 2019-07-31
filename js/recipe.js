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
