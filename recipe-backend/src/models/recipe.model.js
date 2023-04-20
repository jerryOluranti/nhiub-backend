const {Schema, model} = require("mongoose");

const recipeSchema = Schema({
    name: {
        type: String,
        unique: true
    },
    process: {
        type: String,
        default: "Boil water"
    },
    duration: {
        type: Number,
        default: 30
    }
})

const RecipeModel = model("Recipe", recipeSchema);

module.exports = {
    RecipeModel
}