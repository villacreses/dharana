const router = require('express').Router()
const Project = require('../db/models/project')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const userId = req.user.id
    const projects = await Project.findAll({where: {userId}})
    res.json(projects)
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

    res.status(201).json(project);
  } catch (err) {
    next(err)
  }
})
