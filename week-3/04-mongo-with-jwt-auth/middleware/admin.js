// Middleware for handling auth

const jwt = require("jsonwebtoken");
const {JWT_SECRET} =require("../config");


function adminMiddleware(req, res, next) {
    const token=req.headers.authorization;
    const words=token.split(" ");
    const jwttoken=words[1];
    try{
        const jwtdecord=jwt.verify(jwttoken,JWT_SECRET);
        if(jwtdecord.username){
            next();
        
    } else {
        res.status(403).json({
            msg: "You are not authenticated"
        })
    }
} catch(e) {
    res.json({
        msg: "Incorrect inputs"
    })
}
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;