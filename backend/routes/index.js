const {Router}=require('express');
const router=Router();



const Book = require("../../backend/models/image")

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
  image.description=req.body.description;
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
router.get('/image/:id',(req,res)=>{
  res.send('profile image')
})
router.delete('/image/:id/delete',(req,res)=>{
  res.send('Image deleted')
})


module.exports=router;