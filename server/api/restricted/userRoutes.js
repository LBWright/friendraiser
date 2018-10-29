const express = require('express')
const User = require('../../models/User')
const Task = require('../../models/Task')
const Supporter = require('../../models/Supporter')
const Support = require('../../models/Support')
const Meeting = require('../../models/Meeting')
const Action = require('../../models/Action')

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
  // Need to add validation for user to update their password
  const { id } = req.params
  const updated = req.body

  User.findOneAndUpdate({ _id: id }, updated)
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

// User -> Supporters Route
router.get('/:id/supporters', (req, res) => {
  const { id } = req.params

  Supporter.find({ user: id })
    .then(supporters => res.status(200).json(supporters))
    .catch(err => res.status(500).json(err))
})

// User -> Support Route
router.get('/:id/support', (req, res) => {
  const { id } = req.params

  Support.find({ user: id })
    .then(support => res.json(support))
    .catch(err => res.status(500).json(err))
})

// User -> Meetings Route

router.get('/:id/meetings', (req, res) => {
  const { id } = req.params

  Meeting.find({ user: id })
    .then(meetings => res.json(meetings))
    .catch(err => res.status(500).json(err))
})

// User -> Actions Route

router.get('/:id/actions', (req, res) => {
  const { id } = req.params

  Action.find({ user: id })
    .then(actions => res.json(actions))
    .catch(err => res.status(500).json(err))
})

module.exports = router
