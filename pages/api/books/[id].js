import connectDB from "../lib/connectDB";
import Books from "../../models/bookModel";
connectDB();

export default async (req, res) => {
  const {
    query: { id },
  } = req;
  switch (req.method) {
    case "GET":
      try {
        const book = await Books.findById(id);

        if (!book) {
          return res.status(404).json({ message: "libro no encontrado" });
        }else{
          return res.status(200).json(book);
        }

      } catch (error) {
        return res.status(500).json({ message: "error.message" });
      }
    case "PUT":
      try {
        const book = await Books.findByIdAndUpdate(id, req.body, { new: true });
        if (!book) {
          return res.status(404).json({ message: "No hay libro " });
        } else {
          return res.status(200).json(book);
        }
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    case "DELETE":
      try {
        const deletedBook = await Books.findByIdAndDelete(id);
        if (!deletedBook) {
          return res.status(404).json({ message: "libro no encontrado" });
        } else {
          return res.status(204).json(deletedBook);
        }
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    default:
      return res.status(400).json({ message: "metodo no soportado" });
  }
};
