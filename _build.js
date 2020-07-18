const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const dbSeed = require('./seeds/destinations.js');
const Destination = require('./models/destination.js');

/*******************************/
/* Mongoose/MongoDB Connection */
/*******************************/

const dbURI = process.env.MONGODB_URL;
mongoose.connect(dbURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});
db.once('open', function() {
  console.log('Connected to DB...');
});

Destination.insertMany(dbSeed, function(error, destinatioin) {
  console.log('Data import completed.')
});