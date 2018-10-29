const express = require('express')
const Meeting = require('../../models/Meeting')

const router = express()

router.post('/', (req, res) => {
  const meeting = new Meeting(req.body)

  meeting
    .save()
    .then(meeting => res.json(meeting))
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  Meeting.findOne({ _id: id })
    .then(meeting => res.json(meeting))
    .catch(err => res.status(500).json(err))
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const updated = req.body

  Meeting.findOneAndUpdate({ _id: id }, updated)
    .then(meeting => res.json(meeting))
    .catch(err => res.status(500).json(err))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  Meeting.findOneAndDelete({ _id: id })
    .then(meeting => res.json(meeting))
    .catch(err => res.status(500).json(err))
})

module.exports = router
