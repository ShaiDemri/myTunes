const mongoose = require("mongoose");
const userSchema = require("../model/db/userDbModel");

mongoose.set("useCreateIndex", true);

const signupToDb = (req, res, next) => {
    let user = new userSchema();
    const {email, password, firstName, surName} = req.body;

    user.email = email;
    user.password = password;
    user.firstName = firstName;
    user.surName = surName;

    user.save(err => {
        if (err) {
            next(err);
        } else {
            req.ctx = {...req.ctx,user};
            next()
        }
    });
};

const loginToDb = (req, res, next) => {
    const {email, password} = req.body;
    userSchema.findOne({email: email}, (err, user) => {
        if (err) {
            next(err)
        }
        else if (!user) {
            next("NO USER FOUND")
        }
        else if (password !== user.password) {
            next("PASSWORD MISMATCH")
        }else {
            req.ctx = {...req.ctx,user};
            next()
        }
    });
};

module.exports = {
     signupToDb,
     loginToDb,

};
