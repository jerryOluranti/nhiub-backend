const {Router} = require("express");
const {login, register, getRecipes, updateRecipes} = require("../controllers/user.controller");

const router = Router();

router.post("/login", login);
router.post("/register", register);

router.route("/:id/recipes")
    .get(getRecipes)
    .patch(updateRecipes);

// router.get("/recipes");
// router.patch("/recipes");

module.exports = {
    userRouter: router
}