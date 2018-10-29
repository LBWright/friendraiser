const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

const restricted = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, keys.jwt, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Token was not decoded', err })
      }
      next()
    })
  } else {
    res.send({ message: 'No token recieved' })
  }
}

module.exports = restricted
