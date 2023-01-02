const {Schema,model}=require('mongoose');
const imageSchema=new Schema({
  title: {type: String },
  autor: {type: String },
  descripcion:{type: String },
  fecha:{type:Date,default:Date.now()},
  calificacion:{type:String,min:0,max:5},
  categoria:{type: String },
  hojas:{type: Number },
  filename:{type:String},
  path:{type:String},
  originalName:{type:String},
  mimetype:{type:String},
  size:{type:Number},
  created_at:{type:Date,default:Date.now()},
  pdfpath:{type:String}


})
module.exports=model("books",imageSchema);

