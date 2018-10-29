const express = require('express')
const Task = require('../../models/Task')

const router = express()

router.post('/', (req, res) => {
  const task = new Task({ ...req.body })

  if (!task.user) {
    return res.status(403).json({ message: 'User not found' })
  }

  task
    .save()
    .then(task => res.status(201).json(task))
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  Task.findOne({ _id: id })
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => res.json(err))
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const updated = { ...req.body }

  Task.findByIdAndUpdate(id, updated)
    .then(task => {
      if (!task) {
        return res.status(404).json({ message: 'task not found' })
      }
      res.status(201).json(task)
    })
    .catch(err => res.status(500).json(err))
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  Task.findOneAndDelete({ _id: id })
    .then(task => res.status(200).json(task))
    .catch(err => res.status(500).json(err))
})

module.exports = router
