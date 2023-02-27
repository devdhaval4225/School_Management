const jwt = require('jsonwebtoken');
const User = require("../models/student_model");

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // check json web token exists & is verified
    if (token) {
        jwt.verify(token, process.env.STUDENT_KEY, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.redirect(" ");
    }
};

// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.STUDENT_KEY, async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            }
            else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        next();
    }
};


module.exports = { requireAuth, checkUser };