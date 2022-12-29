const express = require("express");
const app = express();
const path = require("path");
const bp = require('body-parser')
const morgan = require("morgan");
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const db=require('./backend/database')
//setings
app.set("port", process.env.PORT || 3000);
//midleware
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
  destination: path.join(__dirname, "backend/public/img/uploads"),
  filename: (req, file, cb, filename) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});
app.use(express.urlencoded({ extended: false }));
const pdfStorage = multer.diskStorage({
  destination: path.join(__dirname, "backend/public/img/uploads"),
  filename: (req, file, cb, filename) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

app.use(
  multer({
    storage: storage
  }).single("image")
);

//Routes

app.use(require("./backend/routes/index"));

//static files\
app.use(express.static(path.join(__dirname,'backend/public')))
app.listen(app.get("port"), () => {
  console.log(`server on port : ${app.get("port")}`);
});
