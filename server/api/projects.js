const router = require('express').Router();
const Project = require('../db/models/project');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const userId = req.user.id;
    const {title} = req.body;

    const projects = await Project.findAll({where: { userId }});
    res.json(projects);
  } catch (err) {
    next(err);
  }
});
