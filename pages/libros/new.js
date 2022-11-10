import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function BookFormPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [newBook, setNewBook] = useState({
    title: "",
    autor: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    autor: "",
    image: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) {
      return setErrors(errors);
      console.log('hay error causia')
    }
    console.log("libro agregado paaa");
     createBook();


  };
  const createBook = async () => {
    try {
      await fetch("http://localhost:8080/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });
    } catch (error) {console.log(error)}
  };
  const validate = () => {
    const errors = {};
    if (!newBook.title) {
      errors.title = "se requiere un titulo pa";
    }
    if (!newBook.autor) {
      errors.title = "se requiere un autor pa";
    }
    if (!newBook.image) {
      errors.title = "metele una imagen pa";
    }
    return errors;
  };
  const handleChange = (e) =>
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  console.log(newBook)

  if (status === "loading") {
    return <p>Loading....</p>;
  }
  if (session?.user.email == "eyck.artur@gmail.com") {
    return (
      <div className="bg-gray-700 h-screen">
        <div name="navbar" className="bg-gray-900 py-3 flex justify-between">
          <div className="grid content-center mx-10">
            <img
              src="https://1.bp.blogspot.com/-m_V7SVYx_KY/X5oVT7yWvHI/AAAAAAABlmg/AAEmKBdzPek_tjQSOUlvi77wYX22XPLvACLcBGAsYHQ/s174"
              className="w-20"
            ></img>
          </div>
          <div name="foto usuario" className="w-80 mx-10 flex justify-evenly">
            <button
              onClick={() => router.push("/adminusers")}
              className="bg-blue-500 my-4 px-1 rounded-xl hover:bg-blue-700 hover:text-white"
            >
              Administrar Usuario
            </button>
            <button
              onClick={() => signOut()}
              className="bg-blue-500 my-4 px-1 rounded-xl hover:bg-blue-700 hover:text-white"
            >
              Cerrar sesion
            </button>
            <h1 className="grid content-center text-white">
              {session?.user?.name}
            </h1>
            <img src={session?.user?.image} className="w-16"></img>
          </div>
        </div>
        <div name={"body"} className={"grid"}>
          <h1 className={"flex justify-center text-white text-6xl"}>
            Crear un Libro
          </h1>
          <form
            onSubmit={handleSubmit}
            className={"bg-gray-800 grid px-12 mx-64 my-10 p-12 rounded-2xl"}
          >
            <h1 className={"flex justify-center text-white text-3xl"}>
              {" "}
              Titulo
            </h1>
            <input
              name={"title"}

              className={"py-4 rounded-2xl"}
              onClick={handleChange}
            ></input>
            <h1 className={"flex justify-center text-white text-3xl"}>Autor</h1>
            <input
              name={"autor"}
              className={"py-4 rounded-2xl"}
              onClick={handleChange}
            ></input>
            <h1 className={"flex justify-center text-white text-3xl"}>

              Imagen
            </h1>
            <input

              name={"image"}
              className={"py-4 rounded-2xl"}
              onClick={handleChange}
            ></input>
            <button
              type="submit"
              className={"mx-auto bg-blue-300 px-6 py-2 my-4 rounded-3xl"}
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    router.push("/signin");
  }
}
