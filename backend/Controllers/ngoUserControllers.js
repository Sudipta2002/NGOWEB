const asyncHandler = require('express-async-handler');
const generateToken = require('../Config/generateToken');
const ngoUser = require('../Models/ngoUserModel');
const registerUser = asyncHandler(async(req, res) => {
    const { name, city, district, state, country, email, password, web, pic } = req.body;
    if (!name || !email || !password || !city || !district || !state || !country || !web) {
        res.status(400);
        throw new Error("Please Enter all the fields");
    }
    const userExist = await ngoUser.findOne({ email }); //query my database whether it exists or not from  user model
    if (userExist) {
        res.status(400);
        throw new Error("User already Exists");
    }
    const user = await ngoUser.create({
        name,
        city,
        district,
        state,
        country,
        email,
        password,
        web,
        pic,
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            city: user.city,
            district: user.district,
            state: user.state,
            country: user.country,
            email: user.email,
            pic: user.pic,
            web: user.web,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to Create the User");
    }
});

const authUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    const user = await ngoUser.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            city: user.city,
            district: user.district,
            state: user.state,
            country: user.country,
            email: user.email,
            pic: user.pic,
            web: user.web,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to Create the User");
    }
});
module.exports = { registerUser, authUser };