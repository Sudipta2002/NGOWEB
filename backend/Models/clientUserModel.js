const bcrypt = require('bcryptjs/dist/bcrypt');
const mongoose = require('mongoose');
//creating userModel
const clientUserSchema = mongoose.Schema({
    //name
    //email
    //password
    //pic(may or may not)
    name: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
}, { timestamps: true });
clientUserSchema.methods.matchPassword = async function(enteredPassword) {

    return await bcrypt.compare(enteredPassword, this.password);
}

//salt and hashing password
//encrypting the password
clientUserSchema.pre('save', async function(next) {
    if (!this.isModified) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const clientUser = mongoose.model("clientUser", clientUserSchema);

module.exports = clientUser;