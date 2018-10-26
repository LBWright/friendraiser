const express = require('express')
const User = require('../../models/User')

const router = express()

router.get('/', (req, res) => {
  User.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  User.findOne({ _id: id })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

module.exports = router
