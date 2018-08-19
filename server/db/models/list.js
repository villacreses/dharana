const Sequelize = require('sequelize')
const db = require('../db')

const List = db.define('list', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = List
