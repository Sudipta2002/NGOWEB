const bcrypt = require('bcryptjs/dist/bcrypt');
const mongoose = require('mongoose');
//creating userModel
const ngoUserSchema = mongoose.Schema({
    //name
    //email
    //password
    //pic(may or may not)
    name: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
}, { timestamps: true });
ngoUserSchema.methods.matchPassword = async function(enteredPassword) {

    return await bcrypt.compare(enteredPassword, this.password);
}

//salt and hashing password
//encrypting the password
ngoUserSchema.pre('save', async function(next) {
    if (!this.isModified) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const ngoUser = mongoose.model("ngoUser", ngoUserSchema);

module.exports = ngoUser;