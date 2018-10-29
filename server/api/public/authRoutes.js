const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const restricted = require('../../auth/restricted')
const User = require('../../models/User')

const router = express()

router.get('/', restricted, (req, res) => {
  res
    .status(200)
    .json({ msg: "Congrats. You've hit the restricted test route" })
})

router.post('/login', (req, res) => {
  const credentials = req.body
  const { email, password } = credentials

  User.findOne({ email }).then(user => {
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Incorrect credentials' })
    }
    const token = jwt.sign(email, keys.jwt)

    return res.json({ user, token })
  })
})

router.post('/register', (req, res) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.password ||
    !req.body.email
  ) {
    return res.status(403).json({
      error: 'Missing required field'
    })
  }
  const hashed = bcrypt.hashSync(req.body.password, 8)
  const user = new User({
    ...req.body,
    password: hashed
  })
  user
    .save()
    .then(user => {
      const token = jwt.sign(user.email, keys.jwt)

      return res.status(201).json({ user, token })
    })
    .catch(err => res.status(500).json(err))
})

module.exports = router
