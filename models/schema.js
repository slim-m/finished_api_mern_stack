const mongoose = require ('mongoose'); 
const { Schema } = mongoose;

const articls = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
 
});
module.exports = articls