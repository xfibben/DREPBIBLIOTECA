const { Router } = require("express");
const router = Router();

const Book = require("../models/image");
const {id_ID} = require("timeago.js/lib/lang");


router.get("/", (req, res) => {
  res.send("Index Page");
});

router.get("/upload", async (req, res) => {
  const images = await Book.find();
  res.status(200).json(images); //
});

router.post("/upload", async (req, res) => {
  const image = new Book();

  image.title = req.body.title;
  image.autor = req.body.autor;
  image.descripcion = req.body.descripcion;
  image.fecha = req.body.fecha;
  image.calificacion = req.body.calificacion;
  image.categoria = req.body.categoria;
  image.hojas = req.body.hojas;
  image.filename = req.files.image.filename;
  image.path = "/img/uploads/" + req.files.image[0].filename;
  image.mimetype = req.files.image.mimetype;
  image.size = req.files.image.size;
  image.pdfpath="/pdf/uploads/" + req.files.pdf[0].filename
  await image.save();
  console.log(image);
    res.redirect("http://localhost:8080/admin");
});

router.get("/upload/:id", async (req, res) => {
  const { id } = req.params;
  const newBook = await Book.findById(id);
  return res.status(200).json(newBook);
});
router.put("/upload/:id", async (req, res) => {
    const { id } = req.params;
    const body=req.body;
    let newBook = await Book.findById(id);
    newBook.title=body.title
    console.log(newBook.title)

    newBook.update({id},{$set:body}).then(console.log('actualizado')).catch(console.log('Nose se actualizo'))
    await newBook.save();
    return res.status(200).json(newBook);
});

router.delete("/upload/:id/", async (req, res) => {

    const { id } = req.params;

    const newBook = await Book.findByIdAndDelete(id);
    res.send('eliminado')

});


module.exports=router;