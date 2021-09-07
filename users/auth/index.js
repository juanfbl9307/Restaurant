const tokenService = require("./jwt");
const auth = require("../controller/user");

const login = async (req, res, next) => {

    const userCheck = await auth.validate(req, res, next);
    const userData = { _id: userCheck._id, password: userCheck.password }

    if (userCheck.password != null) {
        const token = await tokenService.getToken(userData);
        return res.json({ token })
    }
    else {
        return res.send("Invalid information")
    }

}

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;
    const tokenCheck = await tokenService.checkToken(token);
    if (tokenCheck) {
        req.user = tokenCheck;
        return next();
    }
    else {
        return res.send('Invalid Token');
    }

}

module.exports = {
    login,
    verifyToken,

}