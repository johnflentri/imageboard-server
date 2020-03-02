const express = require("express")
const app = express()

const corsMiddleware = require("cors")

app.use(corsMiddleware())

// const parserMiddleware = express.json()
app.use(express.json())

const imageRouter = require("./image/router")
const port = process.env.PORT || 4000

app.use(imageRouter)

app.listen(port, () => console.log("Listening on port:", port))
