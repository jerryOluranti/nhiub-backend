let recipes = [];

// get all recipes
function getAllRecipes(req, res) {
    res.send(recipes).end();
}

// get single recipe
function getSingleRecipe(req, res) {
    const recipe = recipes.find(r => r.id === req.params.recipeId);
    res.send(recipe).end();
}

// add new recipe
function addRecipe(req, res) {
    recipes.push({
        ...req.body,
        id: (recipes.length + 1).toString()
    });
    res.send("recipe added").end();
}

// update recipe
function udpateRecipe(req, res) {
    recipes = recipes.map(r => {
        if (r.id === req.params.recipeId) {
            return {...r, ...req.body};
        }

        return r;
    })

    res.send("recipe updated successfully!").end();
}

// delete recipe
function deleteRecipe(req, res) {
    recipes = recipes.filter(r => r.id !== req.params.recipeId);
    res.send("recipe deleted").end();
}

module.exports = {
    getAllRecipes,
    getSingleRecipe,
    addRecipe,
    udpateRecipe,
    deleteRecipe
}