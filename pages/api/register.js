import bcrypt from "bcrypt";

import Users from "../models/userModel";

export default async function handler(req, res) {
  const body = req.body
  const userExist = await Users.findOne({email:body.email});
  if (userExist) {
    res.status(200).json({ message: "ya esta registrado" })
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashpass = await bcrypt.hash(body.password, salt);
  const user = new Users({ email: body.email, password: hashpass });
  await user.save();
  res.status(200).json({ message: "registrado correctamente" });
}
