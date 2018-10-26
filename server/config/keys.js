if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')
} else {
  // Change to dev env
  module.exports = require('./local')
}