const { Router } = require("express")
const User = require("./model")
const bcrypt = require("bcrypt")

const router = new Router()

router.post("/user", (req, res, next) => {
  const userInfo = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  }
  User.create(userInfo)
    .then(user => {
      res.send(user)
    })
    .catch(next)
})

module.exports = router