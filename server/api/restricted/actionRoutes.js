const express = require('express')
const Action = require('../../models/Action')

const router = express()

router.post('/', (req, res) => {
  const action = new Action(req.body)

  action
    .save()
    .then(action => res.json(action))
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  Action.findOne({ _id: id })
    .then(action => res.json(action))
    .catch(err => res.status(500).json(err))
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const updated = req.body

  Action.findOneAndUpdate({ _id: id }, updated)
    .then(action => res.json(action))
    .catch(err => res.status(500).json(err))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  Action.findOneAndDelete({ _id: id })
    .then(action => res.json(action))
    .catch(err => res.status(500).json(err))
})

module.exports = router
