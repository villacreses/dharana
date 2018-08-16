const Sequelize = require('sequelize')
const db = require('../db')

const Task = db.define('task', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  checked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  due: {
    type: Sequelize.DATE
  },
  details: {
    type: Sequelize.TEXT,
  }
})

module.exports = Task;
