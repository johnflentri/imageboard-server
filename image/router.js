const { Router } = require("express")
const Image = require("./model")

const router = new Router

router.get("/image", (req, res, next) => {
  Image.findAll()
    .then(image => {
      res.json(image)
    })
    .catch(next)
})

module.exports = router