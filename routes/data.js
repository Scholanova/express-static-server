var express = require('express')
var router = express.Router()
var faker = require('faker')

/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = faker.lorem.paragraphs(20, '|||')
    .split('|||')
    .map((text) => {
      return { 'text': text }
    })

  setTimeout(() => {
    res.send({ data })
  }, 2000)
})

module.exports = router
