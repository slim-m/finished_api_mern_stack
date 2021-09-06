
const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require ('mongoose'); 
const path = require('path');
const router = express.Router();
require('./linked/routes')


var app = express();


    mongoose.connect('mongodb://localhost:27017/articls', { useNewUrlParser: true});
    const db = mongoose.connection
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log('Connected to Database'));
/*     mongoose.Promise = global.Promise; */





// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use('/article' ,require('./linked/routes'))


/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}