import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import NavbarAdmin from "../components/navbar";
import Loading from "../components/Loading";
import {useUser} from "@auth0/nextjs-auth0/client";

export default function BookFormPage() {
  const router = useRouter();
  const {user,error,isLoading } = useUser();
  const [image,setImage]=useState(null)
  const [ImageInput,setImageInput]=useState(null)
  const handleImage=(e)=>{
    const file=e.target.files[0];
    setImageInput(file);
    const fileReader=new FileReader();
    fileReader.onload=function(e){
      setImage(e.target.result);
      console.log(e.target.result)
    }
    fileReader.readAsDataURL(file);
  }
  const [newBook, setNewBook] = useState({
    title: "",
    autor: "",
    image: "",
    descripcion:"",
    fecha:"",
    calificacion:"",
    categoria:"",
    hojas:""
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
      console.log('hay error ')
    }
    console.log("libro agregado ");
     createBook();

     router.push('/admin')

  };
  const createBook = async () => {
    try {
      await fetch("http://localhost:3000/upload", {
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
      errors.title = "se requiere un titulo ";
    }
    if (!newBook.autor) {
      errors.title = "se requiere un autor ";
    }
    if (!newBook.image) {
      errors.title = "metele una imagen ";
    }
    return errors;
  };
  const handleChange = (e) =>
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  console.log(newBook)

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (user) {
    return (
      <div className="bg-gray-20 h-screen">
        <NavbarAdmin></NavbarAdmin>
        <div name={'body'} className={'bg-gray-20 h-screen w-screen  '}>
          <div name={'cuerpo'} className={'bg-gray-100 my-10 rounded-2xl shadow-2xl w-full md:w-3/4 h-3/4 flex mx-auto p-5'}>

            <div name={'izquierda'} className={'w-2/6 hidden md:block'}>
              <h1 className={'text-xl ml-3 my-5'}>
                Agregar Libros
              </h1>
              <h2 className={'ml-8 text-l' }>
                Recuerda:
              </h2>
              <h2 className={'ml-10 text-l' }>
                - Llenar todos los datos.<br></br>
                - Verificar que los datos sean correctos.
              </h2>
              <img src={'http://std.drepuno.gob.pe/images/login_Puno.gif'}
              className={'w-5/6 mt-10 mx-auto my-auto'}/>

            </div>
            <div name={'drecha'} className={'w-full grid md:ml-10 content-start'}>
              <h1 className={'my-5 text-2xl'}>Ingrese los datos del libro:  < /h1>
              <form className={' w-full grid'}   action="http://localhost:3000/upload" method="POST" encType="multipart/form-data">
                <label className={'w-full my-3'}>
                  <input name={'title'} placeholder={'Titulo'} className={'w-full h-10'} onChange={handleChange}></input>
                  <div className={'bg-gray-600 h-1'}></div>
                </label>
                <label className={'w-full my-3'}>
                  <input name={'autor'} placeholder={'Autor'} className={'w-full h-10'} onChange={handleChange}></input>
                  <div className={'bg-gray-600 h-1'}></div>
                </label>
                <label className={'w-full my-3 flex'}>
                  <input type={'file'} name={'image'} placeholder={'Imagen'} className={'w-full h-10'} onChange={handleImage}></input>
                  <img src={image} className={'w-10'}/>
                  <div className={'bg-gray-600 h-1'}></div>
                </label>
                <label className={'w-full my-3 flex'}>
                  <input type={'file'} name={'pdf'}  className={'w-full h-10'} ></input>

                  <div className={'bg-gray-600 h-1'}></div>
                </label>
                <label className={'w-full my-3'}>
                  <input name={'descripcion'} placeholder={'Descripcion'} className={'w-full h-10'} onChange={handleChange}></input>
                  <div className={'bg-gray-600 h-1'}></div>
                </label>
                <label className={'w-full my-3'}>
                  <input name={'fecha'} type={'date'} placeholder={'Fecha'} className={'w-full h-10'} onChange={handleChange}></input>
                  <div className={'bg-gray-600 h-1'}></div>
                </label>
                <label className={'w-full my-3'}>
                  <select name={'categoria'} placeholder={'Categoria'} className={'w-full h-10'}  onChange={handleChange}>
                    <option value={'medicina'}>Medicina</option>
                    <option value={'matematica'}>Matematica</option>
                    <option value={'historia'}> Historia</option>
                    <option value={'topografia'}> topografia</option>

                  </select>
                  <div className={'bg-gray-600 h-1'}></div>
                </label>
                <label className={'w-full my-3'}>
                  <input name={'hojas'} type={'number'} placeholder={'Hojas'} className={'w-full h-10'} onChange={handleChange}></input>
                  <div className={'bg-gray-600 h-1'}></div>
                </label>

                <button type={'submit'} className={'bg-blue-800 h-10 w-20 mx-auto rounded-2xl text-white '}>Crear</button>



              </form>
            </div>
          </div>

        </div>

      </div>
    );
  } else {
    router.push("/signin");
  }
}
