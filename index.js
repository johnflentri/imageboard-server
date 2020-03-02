const express = require("express")
const app = express()
const imageRouter = require("./image/router")

const db = require("./db")
const Image = require("./image/model")
const port = process.env.PORT || 4000

app.use(imageRouter)

app.listen(port, () => console.log("Listening on port:", port))
