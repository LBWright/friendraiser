const userRoutes = require('./userRoutes')
const taskRoutes = require('./taskRoutes')
const supporterRoutes = require('./supporterRoutes')
const supportRoutes = require('./supportRoutes')
const actionRoutes = require('./actionRoutes')
const meetingRoutes = require('./meetingRoutes')

const restricted = require('../../auth/restricted')

// removing restricted middleware to make development and testing easier
module.exports = app => {
  app.use('/api/users', userRoutes)
  app.use('/api/tasks', taskRoutes)
  app.use('/api/supporters', supporterRoutes)
  app.use('/api/support', supportRoutes)
  app.use('/api/actions', actionRoutes)
  app.use('/api/meetings', meetingRoutes)
}
