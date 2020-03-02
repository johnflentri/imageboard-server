const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const authRouter = require("./server/auth/router")
const corsMiddleware = require("cors")
const imageRouter = require("./image/router")
const userRouter = require("./user/router")

app.use(corsMiddleware())
app.use(express.json())
app.use(imageRouter)
app.use(authRouter)
app.use(userRouter)

app.listen(port, () => console.log("Listening on port:", port))
