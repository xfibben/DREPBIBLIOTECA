const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {type: String },
  autor: {type: String },
  image: {type: String },
  descripcion:{type: String },
  fecha:{type:Date,default:Date.now()},
  calificacion:{type:String,min:0,max:5},
  categoria:{type: String },
  hojas:{type: Number },
  path:{type:String},
  size:{type:Number}



},{
  timestamps:true,
  versionKey:false
});

let Dataset= mongoose.models.books || mongoose.model('books',bookSchema);
export default Dataset;
