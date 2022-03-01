const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID)

const sendEmail = (to, from, subject, html) => {
    const msg = {
        to,
        from,
        subject,
        html,
    }
    sgMail.send(msg, (err, result) => {
        if (err) {
            return console.log("Email not sent!")
        }
        console.log("Email sent successfully!")
    })
}
module.exports = sendEmail
