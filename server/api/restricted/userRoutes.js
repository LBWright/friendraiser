const express = require('express')
const User = require('../../models/User')
const Task = require('../../models/Task')

const router = express()

router.get('/', (req, res) => {
  User.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  User.findOne({ _id: id })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => res.json(err))
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const updated = { ...req.body }

  User.findByIdAndUpdate(id, updated)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      res.status(201).json(user)
    })
    .catch(err => res.status(500).json(err))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  User.findOneAndDelete({ _id: id })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

// User -> Tasks Route

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params

  Task.find({ user: id })
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json(err))
})

module.exports = router
