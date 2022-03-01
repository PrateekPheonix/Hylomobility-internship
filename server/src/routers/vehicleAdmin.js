const express = require('express')
const Vehicle = require('../models/vehicle')

const router = new express.Router()


router.post('/vehicleadmin', async (req, res) => {
    const user = new Vehicle(req.body)

    try {
        await user.save()
        res.send(req.body)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/vehicleadmin', async (req, res) => {

    await Vehicle.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(400).send(err)
        });
})

router.patch('/vehicleadmin', async (req, res) => {

    await Vehicle.findOneAndUpdate({ _id: req.body.id }, req.body, {
        new: true
    })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(400).send(err)
        });

})

router.delete('/vehicleadmin', async (req, res) => {
    await Vehicle.deleteOne({ _id: req.body.id })
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(400).send(err)
        });
})


module.exports = router