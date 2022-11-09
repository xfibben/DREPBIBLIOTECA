import { useSession, signOut } from "next-auth/react";
import { Router, useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading....</p>;
  }
  if(session){
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
                  onClick={() => router.push('/admin')}
                  className="bg-blue-500 my-4 px-1 rounded-xl hover:bg-blue-700 hover:text-white"
              >
                Administrar Libros
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
        </div>
    );
  }else{
    router.push('/signin')
  }

}
