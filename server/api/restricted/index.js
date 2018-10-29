const userRoutes = require('./userRoutes')
const taskRoutes = require('./taskRoutes')
const restricted = require('../../auth/restricted')

// removing restricted middleware to make development and testing easier
module.exports = app => {
  app.use('/api/users', userRoutes)
  app.use('/api/tasks', taskRoutes)
}
