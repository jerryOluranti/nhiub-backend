const {model, Schema} = require("mongoose");

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
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }]
})

const UserModel = model('User', userSchema);

module.exports = {
    UserModel
}