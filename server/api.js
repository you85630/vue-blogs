const express = require('express')
const router = express.Router()
const db = require('./db')

// 查询
router.get('/topNav', (req, res) => {
  db.topNav.find({}, (err, doc) => {
    if (err) {
      res.send(err)
    } else {
      res.send(doc)
    }
  })
})

module.exports = router
