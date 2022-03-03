const express = require('express')
const User = require('../models/user')

const router = new express.Router()

router.post('/login', async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send()
    }
})

module.exports = router