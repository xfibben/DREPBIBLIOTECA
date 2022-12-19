import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import NavbarUser from "../../components/navbarUser";
import Sidebar from "../../components/sidebar";

export default function Index() {
  const { data: session, status } = useSession();
  const [book, setBook] = useState({
    title: "",
    autor: "",
    image: "",
    descripcion:"",
  });
  const { query, push } = useRouter();
  const getBook = async () => {
    const res = await fetch("http://localhost:8080/api/books/" + query.id);
    const data = await res.json();
    setBook({
      title: data.title,
      autor: data.autor,
      image: data.image,
      descripcion:data.descripcion,
    });
  };
  useEffect(() => {
    if (query.id) getBook();
    console.log(query.id);
  }, []);
  console.log(book)
  if (status == "loading") {
    return <Loading />;
  }
  if (session?.user.name) {
    return (
      <div className={"h-full"}>
        <NavbarUser></NavbarUser>
        <div className={"w-full grid md:flex mt-5"}>
          <Sidebar></Sidebar>
          <div className={'bg-gray-100 rounded-2xl w-full  shadow-2xl'}>
            <div className={'w-full '}>
              <img src={book.image} className={'m-5  h-80 w-full object-cover '}/>
              <h1 className={'text-8xl font-bold text-blue-500  m-10 -mt-72'}> {book.title} </h1>
              <h1 className={'text-3xl mx-24 font-bold'}> Autor: {book.autor}</h1>
              <h1 className={'text-2xl mx-24  font-normal my-5'}> Descripcion : {book.descripcion}</h1>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
