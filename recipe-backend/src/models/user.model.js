const {model, Schema} = require("mongoose");
const {recipeSchema} = require("./recipe.model");

const userSchema = new Schema({
    name: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        default: "CHEF",
        enum: ["CHEF", "SOUS_CHEF"]
    },
    recipes: [recipeSchema]
})

const UserModel = model('User', userSchema);

module.exports = {
    UserModel
}