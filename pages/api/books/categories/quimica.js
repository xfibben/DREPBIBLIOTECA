
import connectDB from "../../lib/connectDB";
import Books from "../../../models/bookModel";
connectDB();



export default async function handler(req, res) {
  const{method,body}=req;
  switch (method) {
    case "GET":
      try {
        const books = await Books.find({categoria:"quimica"});
        return res.status(200).json(books);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    default:
      return res.status(400).json({ message: "this method is not supported" });
  }

}