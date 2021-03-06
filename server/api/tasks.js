const router = require('express').Router()
const {Task} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const tasks = await Task.findAll({
      where: {userId},
    })

    let payload = {}
    tasks.forEach(task => {
      payload[task.id] = task
    })
    res.json(payload)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const userId = req.user.id

    const task = await Task.build({
      ...req.body,
      userId
    }).save()


    res.status(201).json(task)
  } catch (err) {
    next(err)
  }
})

router.put('/toggle/:id', async (req, res, next) => {
  try {
    const userId = req.user.id
    const {id} = req.params

    const task = await Task.find({
      where: {id, userId}
    })

    const updatedTask = await task.update({checked: !task.checked})
    res.send(202)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const userId = req.user.id
    const {id} = req.params

    const task = await Task.find({
      where: {id, userId}
    })

    const updatedTask = await task.update(req.body)
    res.status(202).json(updatedTask)
  } catch (err) {
    next(err)
  }
})
