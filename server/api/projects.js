const router = require('express').Router()
const {Project, List} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const projects = await Project.findAll({
      where: {userId},
      attributes: {exclude: ['userId']},
      include: {model: List, attributes: ['id']}
    })

    let payload = {}
    projects.forEach(proj => {
      payload[proj.id] = proj
    })
    res.json(payload)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const {title} = req.body

    const project = await Project.build({
      title,
      userId
    }).save()

    res.status(201).json(project)
  } catch (err) {
    next(err)
  }
})
