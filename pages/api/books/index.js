import connectDB from "../lib/connectDB";
import Books from "../../models/bookModel";
import multer from 'multer';
connectDB();
const upload=multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,path.join(process.cwd(),"public","images"))
    },
    filename:function (req,file,cb){
      cb(null,new Date().getTime()+"-"+file.orginalname);
    }
  })
})
export default async function handler(req, res) {
  const{method,body}=req;
  switch (method) {
    case "GET":
      try {
        const books = await Books.find();
        return res.status(200).json(books);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "POST":
      try {
        const newBook = new Books(body);
        const savedBook = await newBook.save();
        return res.status(201).json(savedBook);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ message: "this method is not supported" });
  }

}
