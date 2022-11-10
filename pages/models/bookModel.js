const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {type: String, required: [true, "se requiere un titulo"] },
  autor: {type:String,required:[true,'se require un autor']},
  image: {type:String,required:[true,'se require una imagen del libros']},

},{
  timestamps:true,
  versionKey:false
});

let Dataset= mongoose.models.books || mongoose.model('books',bookSchema);
export default Dataset;
