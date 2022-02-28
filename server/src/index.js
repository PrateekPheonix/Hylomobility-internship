const express = require('express');
const cors = require('cors')

require('./db/mongoose')

const userRouter = require('./routers/user')

const app = express()

const port = process.env.PORT

app.use(cors({
    " Access-Control-Allow-Origin": "*"
}))
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log("SERVER IS UP ON PORT", port)
})
