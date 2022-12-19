import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,

    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
      default:
        "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png",
    },
  },
  { timestamps: true }
);

let Dataset = mongoose.models.users || mongoose.model("users", userSchema);
export default Dataset;


    
    