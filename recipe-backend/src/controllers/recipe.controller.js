const {RecipeModel} = require("../models/recipe.model");

// get all recipes
async function getAllRecipes(req, res) {
    // const recipe = recipes.find(r => r.id === req.params.recipeId);
    const recipes = await RecipeModel.find();

    res.json(recipes).end();
}

// get single recipe
async function getSingleRecipe(req, res) {
    // recipes.push({
    //     ...req.body,
    //     id: (recipes.length + 1).toString()
    // });
    const recipe = await RecipeModel.findById(req.params.recipeId);

    res.json(recipe).end();
}

// add new recipe
async function addRecipe(req, res) {
    // recipes.push({
    //     ...req.body,
    //     id: (recipes.length + 1).toString()
    // });

    await RecipeModel.create({
        name: req.body.name,
        process: req.body.process,
        duration: req.body.duration
    });

    res.send("recipe added").end();
}

// update recipe
async function udpateRecipe(req, res) {
    // recipes = recipes.map(r => {
    //     if (r.id === req.params.recipeId) {
    //         return {...r, ...req.body};
    //     }

    //     return r;
    // })

    await RecipeModel.updateOne({_id: req.params.recipeId}, {...req.body});

    res.send("recipe updated successfully!").end();
}

// delete recipe
async function deleteRecipe(req, res) {
    // recipes = recipes.filter(r => r.id !== req.params.recipeId);
    await RecipeModel.deleteOne({_id: req.params.recipeId});

    res.send("recipe deleted").end();
}

module.exports = {
    getAllRecipes,
    getSingleRecipe,
    addRecipe,
    udpateRecipe,
    deleteRecipe
}