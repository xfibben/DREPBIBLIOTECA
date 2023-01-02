const express = require("express");
const app = express();
const path = require("path");
const bp = require("body-parser");
const morgan = require("morgan");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const db = require("./backend/database");
//setings
app.set("port", process.env.PORT || 3000);
//midleware
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
    destination: (req, file, cb) => { // setting destination of uploading files
        if (file.fieldname === "image") { // if uploading resume
            cb(null, 'backend/public/img/uploads');
        } else { // else uploading image
            cb(null, 'backend/public/pdf/uploads');
        }
    },
    filename: (req, file, cb) => { // naming file
        cb(null, file.fieldname+"-"+uuidv4()+path.extname(file.originalname));
    }
});
app.use(express.urlencoded({ extended: false }));



app.use(
  multer({
    storage: storage,
  }).fields([
    { name: "image", maxCount: 1 },
    { name: "pdf", maxCount: 1 },
  ])
);


//Routes

app.use(require("./backend/routes/index"));

//static files\
app.use(express.static(path.join(__dirname, "backend/public")));
app.listen(app.get("port"), () => {
  console.log(`server on port : ${app.get("port")}`);
});
