const User = require("../models/user");


//Siging up user
exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err: "NOT able to save user in DB"
            });
        }
        res.json({
            name: user.name,
            email: user.email,
            id: user._id
        });
    });
};

//Signout Auth logic
exports.signout = (req, res) => {
    res.json({
        message: "User Signout successful"
    });
};