const {UserModel} = require("../models/user.model");

async function checkSousChef(req, res, next) {
    const user = await UserModel.findOne({username: req.body.username});

    if (!user || user.role !== "SOUS_CHEF") return res.send("Permission denied!").end();

    next();
}

module.exports = {
    checkSousChef
}

