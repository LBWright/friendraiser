const userRoutes = require('./userRoutes')
const restricted = require('../../auth/restricted')

module.exports = app => {
  app.use('/api/users', restricted, userRoutes)
}
