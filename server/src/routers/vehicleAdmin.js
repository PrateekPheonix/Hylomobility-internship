const express = require('express')
const Vehicle = require('../models/vehicle')

const router = new express.Router()


router.post('/vehicleadmin', async (req, res) => {
    const vehicle = new Vehicle(req.body)

    try {
        await vehicle.save()
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

router.put('/vehicleadmin', async (req, res) => {

    await Vehicle.findOneAndUpdate({ _id: req.body.id }, req.body, {
        new: true,
        runValidators: true,
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