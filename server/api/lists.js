const router = require('express').Router()
const {List, Task} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const lists = await List.findAll({
      where: {userId},
      include: {model: Task, attributes: ['id']}
    })

    let payload = {}
    lists.forEach(list => {
      payload[list.id] = list
    })

    res.json(payload)
  } catch (err) {
    next (err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const title = req.body.title || 'List'

    const list = await List.build({...req.body, title, userId}).save()
    res.status(201).json(list)
  } catch (err) {
    next(err)
  }
})
