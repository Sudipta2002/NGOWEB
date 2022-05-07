const asyncHandler = require('express-async-handler');
const generateToken = require('../Config/generateToken');
const clientUser = require('../Models/clientUserModel');
const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password, pic } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the fields");
    }
    const userExist = await clientUser.findOne({ email }); //query my database whether it exists or not from  user model
    if (userExist) {
        res.status(400);
        throw new Error("User already Exists");
    }
    const user = await clientUser.create({
        name,
        email,
        password,
        pic,
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to Create the User");
    }
});
const authUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    const user = await clientUser.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to Create the User");
    }
});
module.exports = { registerUser, authUser };