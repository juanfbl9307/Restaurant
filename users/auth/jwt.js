const jwt = require('jsonwebtoken');
require('dotenv').config()


const secret = process.env.SECRET;

const getToken = async (data) => {
    const token = await jwt.sign(data, secret);
    return token;
};

const checkToken = async (token) => {
    try {
        let tokenAuth = token.replace('Bearer ', '');
        const tokenCheck = jwt.verify(tokenAuth, secret);
        return tokenCheck
    } catch {
        return false;
    }
}

module.exports = {
    checkToken,
    getToken,
}