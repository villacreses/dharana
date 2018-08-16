const User = require('./user')
const Project = require('./project')
const Task = require('./task')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasMany(Project, {foreignKey: 'userId', sourceKey: 'id'})
Project.belongsTo(User, {foreignKey: 'userId', targetKey: 'id'})

User.hasMany(Task, {foreignKey: 'userId', sourceKey: 'id'})
Task.belongsTo(User, {foreignKey: 'userId', targetKey: 'id'})

Project.hasMany(Task, {foreignKey: 'projectId', sourceKey: 'id'})
Task.belongsTo(Project, {foreignKey: 'projectId', targetKey: 'id'})

module.exports = {
  User,
  Project,
  Task
}
