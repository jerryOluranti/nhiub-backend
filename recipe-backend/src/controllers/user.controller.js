const {UserModel} = require("../models/user.model");

async function login(req, res) {
    const user = await UserModel.findOne({username: req.body.username});

    if (!user) return res.send("User not found!!").end();

    if (user.password !== req.body.password) return res.send("Password incorrect!!").end();

    res.json(user).end();
}

async function register(req, res) {
    await UserModel.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    })

    res.send("User created!!").end();
}

module.exports = {
    login,
    register
}