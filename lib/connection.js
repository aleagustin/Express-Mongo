var mongoose = require('mongoose');
require('../models/employee');
require('../models/team');
var dbUrl = 'mongodb://127.0.0.1:27017';
mongoose.connect(dbUrl, {
  useNewUrlParser: true
});
// Close the Mongoose connection on Control+C
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected');
    process.exit(0);
  });
});
