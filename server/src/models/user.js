const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    password: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        enum: ['user', 'vehicleAdmin', 'userAdmin', 'superAdmin'],
        default: 'user',
    },
    token: {
        type: String,
        required: true
    }

})

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

userSchema.methods.matchPassword = async (enteredPassword) => {
    const user = this

    return await bcrypt.compare(enteredPassword, user.password)
}

// JWT
userSchema.methods.generateAuthToken = async function () {
    const user = this

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET)

    user.token = token
    await user.save()

    return token
}

// finding by credentials
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }
    return user
}

const User = mongoose.model('User', userSchema)

module.exports = User