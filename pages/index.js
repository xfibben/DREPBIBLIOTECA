import { useSession, signOut } from "next-auth/react";
import { Router, useRouter } from "next/router";
import Loading from "./components/Loading";
import NavbarUser from "./components/navbarUser"
import Sidebar from "./components/sidebar";
import Slider from "./components/slidebar";


export default function Home({books}) {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loading/>;
  }
  if(session?.user.name){
      console.log('ingresaste con google')
    return (
        <div className=" h-full">

          <NavbarUser></NavbarUser>
            <Slider/>
            <div className={'w-full grid lg:flex mt-5'}>
                <Sidebar></Sidebar>
                <div className={'bg-gray-100 rounded-2xl w-full lg:w-3/4  grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap4  mr-1 md:mr-10 shadow-2xl'}>
                    {books.map(book=>(
                        <div className={'my-4 mx-3 h-auto rounded-2xl bg-gray-500'} key={book._id} onClick={()=>router.push(`/libros/${book._id}`)}>
                            <h1 className={'text-xl grid content-center text-center h-20 flex justify-center'}>{book.title}</h1>
                            <img className='w-full h-40 mt-2' src={book.image}></img>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
  }else{
    router.push('/signin')
  }

}
export const getServerSideProps = async (ctx) => {
    const res = await fetch("http://localhost:8080/api/books");
    const books = await res.json();
    console.log('se tienen todos los libros');
    return {
        props: { books },
    };
};
