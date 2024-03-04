const { expressjwt } = require("express-jwt")

const isAuthenticated = expressjwt({
    secret: process.env.TOKEN_SECRET,
    algorithms: ["HS256"],
    requestProperty: 'payload',
    getToken: getTokenFromHeaders
})


function getTokenFromHeaders(req) {

    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {

        const token = req.headers.authorization.split(" ")[1];
        return req.headers.authorization.split(" ")[1];
    }

    return null;
}

module.exports = {
    isAuthenticated
}