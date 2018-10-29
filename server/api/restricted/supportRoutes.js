const express = require('express')
const Support = require('../../models/Support')

const router = express()

router.post('/', (req, res) => {
  const support = new Support(req.body)

  support
    .save()
    .then(support => res.json(support))
    .catch(err => res.status(500).json(err))
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const updated = req.body

  Support.findOneAndUpdate({ _id: id }, updated)
    .then(support => res.json(support))
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  Support.findOne({ _id: id })
    .then(support => res.json(support))
    .catch(err => res.status(500).json(err))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  Support.findOneandDelete({ _id: id })
    .then(support => res.json(support))
    .catch(err => res.status(500).json(err))
})

module.exports = router
