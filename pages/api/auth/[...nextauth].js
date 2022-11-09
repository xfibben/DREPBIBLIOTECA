import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from '../../models/userModel'
import bcrypt from "bcrypt";
import connectDB from "../lib/connectDB";
connectDB();
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await Users.findOne({ email });
        if (!user) {
          throw new Error("Aun no se ha registrado");
        }
        if (user) {
          return signInUser({ password, user });
        }
      },
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages:{signIn:'/signin'},
  adapter: MongoDBAdapter(clientPromise),
  secret: "secret",
  database: process.env.MONGODB_URI,
};
const signInUser = async ({ password, user }) => {
  if (!user.password) {
    throw new Error("Ingrese una contraseña");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Contraseña incorrecta");
  }

  return user;
};
export default NextAuth(authOptions)