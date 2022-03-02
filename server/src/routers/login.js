const express = require('express')
const auth = require('../middleware/auth')
const User = require('../models/user')

const router = new express.Router()

router.post('/login', async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({ user, token })
    } catch (error) {
        res.status(400).send()
    }
})

module.exports = router