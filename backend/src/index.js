'use strict';

const express = require('express');
const app = express();
  
const  bodyParser = require('body-parser');
const config = require('./config/config');


const seeddb = require('./db/seeds/index');
// mongo db connection
const mongoose = require('mongoose');
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};
console.log(config.mongoConnectionUri);
mongoose.connect(config.mongoConnectionUri, option).then(function(){
   console.log("Mongo connected successfully");
   // seed  
     seeddb.seeddb().then(()=>{
      console.log("Seeding complete");
     }).catch(err=>{
       console.log(err);
     });
}, function(err) {
    console.log(err);
    console.log("Mongo connection failed");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//register routes
var routes = require('./routes/routes');
routes(app);

//test url
app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(80);

console.log(' API server started on: ' + 80);

module.exports = app;