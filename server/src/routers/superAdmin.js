const express = require('express')
const User = require('../models/user')
const sendEmail = require('../utils/mail')

const router = new express.Router()

router.post('/superadmin', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/sendemail', async (req, res) => {
    const { name, email, password, role } = req.body

    const from = "hylomobility987super@gmail.com"
    const to = email

    const subject = "You have been assigned a admin role"

    const output = `
    <h1>Admin Role</h1>
    <h2>Congratulations ${name}</h2>
    <h3>Details</h3>
    <p>You have been assigned a rolse of <b>${role}</b>.</p>
    <p>Your Login Credentials are as follows:</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Password:</b> ${password}</p>
    <p><b>Note:</b> Don't share your login credentials.</p>
    `

    sendEmail(to, from, subject, output)

    // res.redirect('/booktable')
})

module.exports = router