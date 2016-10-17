module.exports = {
  // Secret key for JWT signing and encryption
  'secret': 'abcde',
  // Database connection information
  'database': 'mongodb://mongodb:27017',
  // Setting port for server
  'port': process.env.PORT || 3000
}
