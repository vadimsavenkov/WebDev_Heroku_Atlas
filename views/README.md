This is a project to create multi-page website using Express, Ejs and Mongoose to deploy Destination Gallery to Heroku and MongoDB Atlas. This project is an assignment 3(Node Final) for SAIT CPRG-210-XM1.

## Project Title

Dynamic multi-page database-driven "Travel Experts" Website. 

## Scope of work

1. Create dynamic HTML endpoint handlers (GET/destinations/ :id) and render a view with single destination with desctription.
2. Return all destinations from ATLAS using JSON API enpoint.
3. Use fetch() to retrieve the object of arrays from JSON enpoint
4. Define Mongoose Schema in /models directory and move /seed/destinations.js to MongoDB collection.
5. Deploy your final version of website through Heroku application 

## Project setup


1. Add more functionality to registration and login forms:
(Email validation, user privacy, enforce proper formating for all fields?
2. Create an array of objects to build an image gallery. Loop through the array using foreach function.
Define image url, image text and working link to a popular travel website.
3. Add hamburger menu with menue toggle for devices in landscape orientation(optional).

## Technologies/Software

JavaScript, HTML/CSS, Git, VSCode, Codepen, Node, Pug/Ejs, MongoDB Atlas, Heroku
 
## Backend helpful links

https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
https://kaloraat.com/articles/how-to-use-mongodb-atlas
https://www.sitepoint.com/managing-dates-times-using-moment-js/
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

## Process

# Node initialization and preparation

The first step was to get ready an Express web server (localhost:3000) to serve static Travel Experts website which was used as a template for this assignment. I initialized a new project using npm and installed dependencies(express, ejs, dotenv, mongoose, cors, moments, etc.). Installation has been required on every single step of the process. Also, in order to connect with MongoDB the .env file was used for authentication. 

As a result of initialization I created travel custom website where:

1. Style and Scrypt assets were served from a public directory.
2. All static html files are replaced with EJS templates and stored in /views derectory
3. Endpoint handlers were created to serve each page template.
4. I created additional gallery.ejs page for destionations. 
5. The unique title was set for each page
6. 404 error was tested to return custom 404 page when end point couldn't be found.    
7. I have added header_log.ejs, header_reg.ejs and header_gal.ejs to highlight global navigation tabs when on current page.

# Model definition and MongoDB seed.

Once I made global changes and initialized staic travel experts website on localhost:3000 I defned Destinations Mongoose Schema in a dedicated /models directory. 

Before connecting to database I have created ATlas account and made a changes in my Destinations Object of arrays. I added text description for each destination while displaying a destination on single image web page. 

After successful connecting to MongoDB database I had established a larger version of the each gallery image,
with page heading and longer description than the main gallery.
 
# Deploying Heroku application.

The next step was to create GET /destinations/:id endpoint handler in Express application. I used model.find() to return all destination images from Atlas and then return a JSON list when fetched.The JSON rendered to an identical array that was returned by my connected database.

I have setup Heroku account and created https://cprg210-travel.herokuapp.com application. Instead of looping locally defined object of arrays to display my travel destinations I used fetch() to retrieve the same array from a remote JSON endpoint hosted by my app. Once I setup Heroku application I created GitHub repo: https://github.com/vadimsavenkov/WebDev_Heroku_Atlas to connect and successfully deploy dynamic Travel Experts website to Heroku and MongoDB Atlas.


## Acknowledgements

Tony Grimes - adjunct instructor at SAIT. 





















