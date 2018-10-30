const userRoutes = require('./userRoutes')
const taskRoutes = require('./taskRoutes')
const supporterRoutes = require('./supporterRoutes')
const supportRoutes = require('./supportRoutes')
const actionRoutes = require('./actionRoutes')
const meetingRoutes = require('./meetingRoutes')

const restricted = require('../../auth/restricted')

// removing restricted middleware to make development and testing easier
module.exports = app => {
  app.use('/api/users', restricted, userRoutes)
  app.use('/api/tasks', restricted, taskRoutes)
  app.use('/api/supporters', restricted, supporterRoutes)
  app.use('/api/support', restricted, supportRoutes)
  app.use('/api/actions', restricted, actionRoutes)
  app.use('/api/meetings', restricted, meetingRoutes)
}
