import { useSession, signOut } from "next-auth/react";
import { Router, useRouter } from "next/router";
import NavbarAdmin from './components/navbar'

export default function Admin({ books }) {

  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading....</p>;

  }
  if (session?.user?.email) {


    return (
      <div className="bg-gray-700 h-screen">
      <NavbarAdmin/>

        <div className={'grid grid-cols-5 gap-5'}>
          {books.map(book=>(
              <div className={'m-5'} key={book._id} onClick={()=>router.push(`/libros/${book._id}/edit`)}>
                <h1 className={'text-2xl text-white flex justify-center'}>{book.title}</h1>
                <img className='w-full h-full' src={book.image}></img>
              </div>
          ))}

        </div>
      </div>
    );
  } else {
    router.push("/signin");
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
