const {Router}=require('express');
const router=Router();



const Book = require("../models/image")

router.get('/',(req,res)=>{
  res.send('Index Page')
})

router.get('/upload',async (req,res)=>{
  const images=await Book.find();
   res.status(200).json(images);//

})

router.post('/upload',async (req,res)=>{
  const image=new Book();

  image.title=req.body.title;
  image.autor=req.body.autor;
  image.descripcion=req.body.descripcion;
  image.fecha=req.body.fecha;
  image.calificacion=req.body.calificacion;
  image.categoria=req.body.categoria;
  image.hojas=req.body.hojas;
  image.filename=req.file.filename;
  image.path='/img/uploads/' + req.file.filename;
  image.mimetype=req.file.mimetype;
  image.size=req.file.size;
  await image.save();
  console.log(image)
  res.redirect("http://localhost:8080/admin")

})



router.get("/upload/:id", async (req, res) => {
  const { id } = req.params;
  const newBook = await Book.findById(id);
  return res.status(200).json(newBook);
});
router.put("/upload/:id", async (req, res) => {
  const { id } = req.params;
  await Book.updateOne({ id }, req.body);
  const updatedDog = await Book.findByIdAndUpdate(id);
  console.log()
  return res.status(200).json(updatedDog);
});
router.delete('/image/:id/delete',(req,res)=>{
  res.send('Image deleted')
})


module.exports=router;