const express = require('express')
const Supporter = require('../../models/Supporter')
const Action = require('../../models/Action')
const Meeting = require('../../models/Meeting')

const router = express()

router.post('/', (req, res) => {
  const supporter = new Supporter(req.body)

  if (!supporter.name) {
    return res.status(403).json({ message: 'Name is required' })
  }

  if (!supporter.user) {
    return res.status(403).json({ message: 'User is required' })
  }

  supporter
    .save()
    .then(supporter => res.status(201).json(supporter))
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  Supporter.findOne({ _id: id })
    .then(supporter => res.json(supporter))
    .catch(err => res.status(500).json(err))
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const updated = req.body

  Supporter.findOneAndUpdate({ _id: id }, updated)
    .then(supporter => res.json(supporter))
    .catch(err => res.status(500).json(err))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  Supporter.findOneAndDelete({ _id: id })
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err))
})

router.get('/:id/meetings', (req, res) => {
  const { id } = req.params

  Meeting.find({ supporter: id })
    .then(meetings => res.json(meetings))
    .catch(err => res.status(500).json(err))
})

router.get('/:id/actions', (req, res) => {
  const { id } = req.params

  Action.find({ supporter: id })
    .then(actions => res.json(actions))
    .catch(err => res.status(500).json(err))
})

module.exports = router
