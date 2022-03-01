const express = require('express')
const User = require('../models/user')

const router = new express.Router()

router.post('/superadmin', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.send(req.body)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router