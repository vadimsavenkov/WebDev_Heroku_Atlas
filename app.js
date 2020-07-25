// import all modules
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

// const moment = require('moment');
// const today = moment(); 
// console.log(today.format('YYYY'));

// Our Model
const Destinations = require('./models/destinations.js');

// Hide creds from repo
const mongoDB = process.env.MONGODB_URL;

// Set up default mongoose connection
mongoose.connect(mongoDB, { useUnifiedTopology: true,useNewUrlParser: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set a callback to let us know we've successfully connected
db.once('open', function() {
  console.log('Connected to DB...');
});

// create express app
const app = express();
app.set('view engine', 'ejs');

// Cors origin URL - Allow inbound traffic from origin //
corsOptions = {
  origin: "https://cprg210-travel.herokuapp.com",
  optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));

// automatically check if requested file is found in /public. If yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Define an endpoint handlers for the home page to render 
app.get('/', function(request, response){
  response.render('index',{});
})

app.get('/login', function(request, response){
  response.render('login',{});
})

app.get('/register', function(request, response){
  response.render('register',{});
})

app.get('/gallery', function(request, response){
  response.render('gallery',{});
})

// Define an endpoint handler for the individual destination pages
app.get('/:id', function(request, response){

// model.findOne returns the first object it finds. It will always return an array, even if it only finds one. 
  Destinations.findOne({'id': request.params.id}, function(error, destinations) {
  
// Check for IDs that are not in our list
if (!destinations) {
  return response.send('Invalid ID.');
}

// Compile view and respond
response.render('destinations',destinations);
});
})

// Create a JSON (no EJS here) that returns the entire destination JSON
// This is the endpoint that the frontend gallery script calls (see: ./public/js/gallery.js).
app.get('/api/destinations', function(request, response){

// response.json(destinations);

Destinations.find(function(error, destinations) { 
  response.json(destinations);
});

})

// if no file or endpoint found, send a 404 error as a response to the browser
app.use(function(req, res, next) {
  res.status(404);
  res.render('404', {page:"404"});
});

// app.use((req, res, next)=>{
//   res.locals.moment = 2020;
//   next();
// });

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});