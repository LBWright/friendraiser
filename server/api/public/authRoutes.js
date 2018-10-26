const express = require('express');
const User = require('../../models/User')

const router = express();

router.get('/', (req, res) => {
    res.status(200).json({msg: 'Auth'})
})

router.post('/login', (req, res) => {
})

router.post('/register', (req, res) => {
})

module.exports = router;