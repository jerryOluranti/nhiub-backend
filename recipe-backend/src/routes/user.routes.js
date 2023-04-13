const {Router} = require("express");
const {login, register} = require("../controllers/user.controller");

const router = Router();

router.post("/login", login);
router.post("/register", register);

module.exports = {
    userRouter: router
}
