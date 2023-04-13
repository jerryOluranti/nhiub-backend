const {Router} = require("express");
const controller = require("../controllers/recipe.controller");
const {checkSousChef} = require("../middlewares/auth.middleware");

const router = Router();

// get all recipes
router.get('/', controller.getAllRecipes);

// get single recipe
router.get('/:recipeId', controller.getSingleRecipe);

// add new recipe
router.post('/', checkSousChef, controller.addRecipe);

// update recipe
router.patch('/:recipeId', checkSousChef, controller.udpateRecipe);

// delete recipe
router.delete('/:recipeId', checkSousChef, controller.deleteRecipe);

module.exports.recipesRouter = router;