import {  useRouter } from "next/router";
import NavbarAdmin from './components/navbar'
import {useUser} from "@auth0/nextjs-auth0/client";
import Sidebar from "./components/sidebar";
import Loading from "./components/Loading";

export default function Admin({ books }) {

  const router = useRouter();
  const { user,status,isLoading } = useUser();

  if (isLoading) {
    return <Loading/>;

  }
  if (user) {


    return (
      <div className="bg-gray-700  ">
      <NavbarAdmin/>
        <div className={'lg:flex my-10'}>
          <Sidebar/>

          <div className={'grid  lg:w-3/4'}>
            {books.map(book=>(
                <div className={'m-5 h-10   w-full'} key={book._id} >
                  <div className={'w-full flex'}>
                    <h1 className={'text-2xl text-white flex justify-center'}>{book.title}</h1>
                    <img className='w-10 h-10' src={book.image}/>
                    <button className={'rounded-2xl mx-auto  mr-10 w-20 bg-green-500 '} onClick={()=>router.push(`libros/${book._id}/edit`)}>Editar</button>
                  </div>
                  <div className={'h-1 bg-white w-full mx-2'}></div>


                </div>


            ))}

          </div>
        </div>
      </div>
    );
  } else {
    router.push('/')

  }
}
export const getServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:8080/api/books");
  const books = await res.json();
  console.log("se obtuvieron todos los libros");
  return {
    props: { books },
  };
};
