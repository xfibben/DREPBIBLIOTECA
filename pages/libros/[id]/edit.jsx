import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import NavbarAdmin from "../../components/navbar";
import Loading from "../../components/Loading";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function BookFormPage() {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const { query, push } = useRouter();
  const [newBook, setNewBook] = useState({
    title: "",
    autor: "",
    path: "",
    descripcion: "",
    fecha: "",
    calificacion: "",
    categoria: "",
    hojas: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    autor: "",
    image: "",
  });
  const [image, setImage] = useState(null);
  const [ImageInput, setImageInput] = useState(null);
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImageInput(file);
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      setImage(e.target.result);
      console.log(e.target.result);
    };
    fileReader.readAsDataURL(file);
  };
  const getBook = async () => {
    const res = await fetch("http://localhost:8080/api/books/" + query.id);
    const data = await res.json();
    setNewBook({
      title: data.title,
      autor: data.autor,
      path: data.path,
      descripcion: data.descripcion,
      fecha: data.fecha,
      categoria: data.categoria,
      hojas: data.hojas,
    });
  };
  useEffect(() => {
    if (query.id) {
      getBook();
      console.log(query.id);
    } else {
      console.log("No se obtuvieron datos de libros");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault()


    await updateBook();
    await console.log("libro agregado ")
    await (router.push('/admin'))

  };

  const updateBook = async () => {
    try {
      await fetch("http://localhost:8080/api/books/" + query.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });
    } catch (error) {
      console.error(error);
    }

  };
  const deleteBook = async () => {
    const { id } = query;
    console.log("http://localhost:8080/api/books/" + query.id);
    try {
      await fetch("http://localhost:8080/api/books/" + query.id, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = () => {
    deleteBook().then(alert("Eliminado correctamente"));
    close();

    router.push("/admin");
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
  console.log(newBook);

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (user) {
    return (
      <div className="bg-gray-20 h-screen">
        <NavbarAdmin></NavbarAdmin>
        <div name={"body"} className={"bg-gray-20 h-screen w-screen  "}>
          <div
            name={"cuerpo"}
            className={
              "bg-gray-100 my-10 rounded-2xl shadow-2xl w-full md:w-3/4 h-3/4 flex mx-auto p-5"
            }
          >
            <div name={"izquierda"} className={"w-2/6 hidden md:block"}>
              <h1 className={"text-xl ml-3 my-5"}>Agregar Libros</h1>
              <h2 className={"ml-8 text-l"}>Recuerda:</h2>
              <h2 className={"ml-10 text-l"}>
                - Llenar todos los datos.<br></br>- Verificar que los datos sean
                correctos.
              </h2>
              <img
                src={"http://std.drepuno.gob.pe/images/login_Puno.gif"}
                className={"w-5/6 mt-10 mx-auto my-auto"}
              />
            </div>
            <div
              name={"drecha"}
              className={"w-full grid md:ml-10 content-start"}
            >
              <h1 className={"my-5 text-2xl"}>Ingrese los datos del libro: </h1>
              <form className={" w-full grid"} onSubmit={handleSubmit}>
                <label className={"w-full my-3"}>
                  <input
                    name={"title"}
                    value={newBook.title}
                    className={"w-full h-10"}
                    onChange={handleChange}
                  ></input>
                  <div className={"bg-gray-600 h-1"}></div>
                </label>
                <label className={"w-full my-3"}>
                  <input
                    name={"autor"}
                    value={newBook.autor}
                    placeholder={"Autor"}
                    className={"w-full h-10"}
                    onChange={handleChange}
                  ></input>
                  <div className={"bg-gray-600 h-1"}></div>
                </label>
                <label className={"w-full my-3 flex"}>
                  <input
                    type={"file"}
                    name={"image"}
                    placeholder={"Imagen"}
                    className={"w-full h-10"}
                    onChange={handleImage}
                  ></input>
                  ook{" "}
                  <img
                    src={`http://localhost:3000/${newBook.path}`}
                    className={"w-10"}
                  />
                  <div className={"bg-gray-600 h-1"}></div>
                </label>
                <label className={"w-full my-3 flex"}>
                  <input
                    type={"file"}
                    name={"pdf"}
                    placeholder={"Imagen"}
                    className={"w-full h-10"}
                    onChange={handleImage}
                  ></input>
                  ook
                  <div className={"bg-gray-600 h-1"}></div>
                </label>

                <label className={"w-full my-3"}>
                  <input
                    name={"descripcion"}
                    value={newBook.descripcion}
                    value={newBook.descripcion}
                    placeholder={"Descripcion"}
                    className={"w-full h-10"}
                    onChange={handleChange}
                  ></input>
                  <div className={"bg-gray-600 h-1"}></div>
                </label>
                <label className={"w-full my-3"}>
                  <input
                    name={"fecha"}
                    type={"date"}
                    value={newBook.fecha}
                    className={"w-full h-10"}
                    onChange={handleChange}
                  ></input>
                  <div className={"bg-gray-600 h-1"}></div>
                </label>
                <label className={"w-full my-3"}>
                  <select
                    name={"categoria"}
                    placeholder={"Categoria"}
                    value={newBook.categoria}
                    className={"w-full h-10"}
                    defaultValue={" ola"}
                    onChange={handleChange}
                  >
                    <option value={"medicina"}>Medicina</option>
                    <option value={"matematica"}>Matematica</option>
                    <option value={"historia"}> Historia</option>
                    <option value={"topografia"}> topografia</option>
                  </select>
                  <div className={"bg-gray-600 h-1"}></div>
                </label>
                <label className={"w-full my-3"}>
                  <input
                    name={"hojas"}
                    type={"number"}
                    placeholder={"Hojas"}
                    value={newBook.hojas}
                    className={"w-full h-10"}
                    onChange={handleChange}
                  ></input>
                  <div className={"bg-gray-600 h-1"}></div>
                </label>

                <button
                  type="submit"
                  className={
                    "bg-blue-800 h-10 w-20 mx-auto rounded-2xl text-white "
                  }
                >
                  Editar
                </button>
              </form>
              <button
                onClick={handleDelete}
                className={
                  "bg-red-800 h-10 w-20 mx-auto rounded-2xl text-white "
                }
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    router.push("/signin");
  }
}
