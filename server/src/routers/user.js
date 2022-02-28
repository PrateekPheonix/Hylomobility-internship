const express = require('express')

const router = new express.Router()

router.get('/', (req, res) => {
    try {
        res.send("Hello")
    } catch (error) {
        res.send(error)
    }
})


module.exports = router