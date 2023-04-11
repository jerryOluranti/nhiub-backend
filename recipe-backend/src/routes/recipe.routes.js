const {Router} = require("express");
const controller = require("../controllers/recipe.controller");

const router = Router();

// get all recipes
router.get('/', controller.getAllRecipes);

// get single recipe
router.get('/:recipeId', controller.getSingleRecipe);

// add new recipe
router.post('/', controller.addRecipe);

// update recipe
router.patch('/:recipeId', controller.udpateRecipe);

// delete recipe
router.delete('/:recipeId', controller.deleteRecipe);

module.exports.recipesRouter = router;