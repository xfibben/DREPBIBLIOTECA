import { getCsrfToken } from "next-auth/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignIn({ csrfToken }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const signInUser = async (e) => {
    e.preventDefault();
    let options = { redirect: false,email, password };
    console.log(options);
    const res = await signIn("credentials", options);
    setMessage(null);
    if (res?.error) {
      setMessage(res.error);
    }
    console.log(res)
    router.push('/');

  };
  const signupUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let data = await res.json();
    if (data.message) {
      setMessage(data.message);
    }
    if (data.message == "registrado correctamente") {
      let options = { redirect: false, email, password };
      const res = await signIn("credentials", options);
    }
    return router.push("/");
  };
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

      <div className="flex justify-evenly bg-gray-600 my-3 p-10 rounded-2xl shadow-2xl h-96 w-screen">
        <form
          className=" h-full  grid content-evenly"
          name="email"
          method="post"
          action="/api/auth/signin/email"
        >
          <h1 className={" text-5xl w=full flex justify-center text-white"}>
            Ingresar
          </h1>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label className="flex justify-end">
            <h2 className="text-2xl text-white">Correo Electronico: </h2>
            <input type="email" id="email" name="email" />
          </label>
          <button
            type="submit"
            className={"text-white bg-blue-700 w-24 mx-auto py-3 rounded-2xl"}
          >
            Ingresar
          </button>
        </form>

        <form
          action="/api/auth/signin/credentials"
          name="datos"
          className="h-full  grid content-evenly"
        >
          <h1 className={"text-white text-3xl w=full flex justify-center"}>
            Ingresar con correo electronico
          </h1>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label className={"flex justify-center"}>
            <h1 className={"text-2xl text-white"}>Correo: </h1>
            <input
              id="email"
              type={"email"}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={"flex justify-center"}>
            <h1 className={"text-2xl text-white"}>Contraseña: </h1>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p style={{ color: "red" }}> {message}</p>
          <button
            onClick={(e) => signInUser(e)}
            className={"text-white bg-blue-700 w-24 mx-auto py-3 rounded-2xl"}
          >
            Ingresar
          </button>
          <button
            onClick={(e) => signupUser(e)}
            className={"text-white bg-blue-700 w-24 mx-auto py-3 rounded-2xl"}
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
