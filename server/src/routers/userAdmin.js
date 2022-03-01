const express = require('express')
const User = require('../models/user')

const router = new express.Router()

router.post('/useradmin', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.send(req.body)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/useradmin', async (req, res) => {

    await User.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(400).send(err)
        });
})

router.put('/useradmin', async (req, res) => {

    await User.findOneAndUpdate({ _id: req.body.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(400).send(err)
        });

})

router.delete('/useradmin', async (req, res) => {
    await User.deleteOne({ _id: req.body.id })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(400).send(err)
        });
})

module.exports = router