const {UserModel} = require("../models/user.model");
const bcrypt = require("bcrypt");

async function login(req, res) {
    const user = await UserModel.findOne({username: req.body.username});

    if (!user) return res.send("User not found!!").end();

    if (bcrypt.compareSync(req.body.password, user.password)) return res.send("Password incorrect!!").end();

    res.json(user).end();
}

async function register(req, res) {
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(req.body.password, salt);

    await UserModel.create({
        name: req.body.name,
        username: req.body.username,
        password: encryptedPassword,
        role: req.body.role
    })

    res.send("User created!!").end();
}

async function getRecipes(req, res) {
    const user = await UserModel.findById(req.params.id);

    res.json(user.recipes).end();
}

async function updateRecipes(req, res) {
    await UserModel.updateOne({_id: req.params.id}, {
        $push: {
            recipes: {$each: req.body.recipes}
        }
    });

    res.send("recipes added").end();
}

module.exports = {
    login,
    register,
    getRecipes,
    updateRecipes
}