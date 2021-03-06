const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/projects', require('./projects'))
router.use('/lists', require('./lists'))
router.use('/tasks', require('./tasks'))


router.use((req, res, next) => {
  console.log(req)
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
