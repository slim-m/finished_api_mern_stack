const mongoose = require ('mongoose'); 
const  Schema  = mongoose.Schema;

const ArticlsSchema = new Schema({
  id:{
    type:Number,
    required:false
  },
  title: {
    type: String,
    required: true
  }, 
  author: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true
  },
  date: { 
    type: Date, 
    default: Date.now },
 
});
module.exports = mongoose.model('article',ArticlsSchema);