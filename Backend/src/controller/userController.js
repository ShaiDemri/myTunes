const userModel = require('../model/userModel');

// const login = (req,res,next)=>{
//     const {user} = req.ctx;
//     userModel.setUser(user);
//     res.status(200).send({ message: "success",user:user});
// };

const signup = (req,res,next)=>{
    const {user} = req.ctx;
    userModel.setUser(user);
    res.status(200).send({ message: "success",user:user});
};
const logout = (req,res,next)=>{
    userModel.setUser(null);
    res.status(200).send({ message: "success",user:null});
};

module.exports = {
    logout,
    signup
};