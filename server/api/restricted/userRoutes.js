const express = require('express');
const User = require('../../models/User')

const router = express();

router.get('/', (req, res) => {
    User.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

router.post('/', (req, res) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.password || !req.body.email) {
        return res.status(403).json({message: 'firstName, LastName, password, email are required fields'})
    }
    const user = new User({
        ...req.body
    })

    user.save()
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json(err))
}) 

router.get('/:id', (req, res) => {
    const { id } = req.params;

    User.findOne({ _id: id })
        .then(user => res.json(user))
        .catch(err => res.json(err))
})

module.exports = router;