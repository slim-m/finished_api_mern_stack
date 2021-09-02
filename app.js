
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require ('mongoose'); 
const path = require('path')


var app = express();

try {
    mongoose.connect('mongodb://localhost:27017/articls', { useNewUrlParser: true });
    console.log('conected moongodb on database')
  }
  catch(err) {
    console.log('err')
  }




// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.use('/' ,require('./linked/routes'))


/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}