import { getCsrfToken } from "next-auth/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import {useUser} from "@auth0/nextjs-auth0/client";
import Loading from "./components/Loading";

export default function SignIn({ csrfToken }) {
  const router = useRouter();
  const { data: session, status } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  console.log(status);
  if (session) {
    router.push("/");
  }
  return (
    <div
      name="login"
      className="grid content-center  w-full h-screen  justify-center"
    >
      <div className="flex justify-center">
        <img
          src="https://1.bp.blogspot.com/-m_V7SVYx_KY/X5oVT7yWvHI/AAAAAAABlmg/AAEmKBdzPek_tjQSOUlvi77wYX22XPLvACLcBGAsYHQ/s1749/dre-puno.jpg"
          className="w-60"
        ></img>
      </div>

      <div className="flex  bg-gray-200 w-96  my-3  rounded-2xl shadow-2xl  ">
        <a href="api/auth/login"

          className={
            "text-white bg-blue-700  text-4xl mx-auto py-3 rounded-2xl flex"
          }
        >
          <h1 className={'w-1/2 grid h-full content-center'}>Iniciar Sesion</h1>

        </a>
      </div>
    </div>
  );
}



