import { getCsrfToken } from "next-auth/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "./components/Loading";

export default function SignIn({ csrfToken }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const signInUser = async (e) => {
    e.preventDefault();
    let options = { redirect: false, email, password };
    console.log(options);
    const res = await signIn("credentials", options);
    setMessage(null);
    if (res?.error) {
      setMessage(res.error);
    }
    console.log(res);
    router.push("/");
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

      <div className="flex  bg-gray-200 w-96  my-3  rounded-2xl shadow-2xl  ">
        <button
          onClick={() => signIn("google")}
          className={
            "text-white bg-blue-700  text-4xl mx-auto py-3 rounded-2xl flex"
          }
        >
          <h1 className={'w-1/2 grid h-full content-center'}>Ingresar con Gmail</h1>
          <img className={'w-14 mx-auto my-auto '} src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"/>
        </button>
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
