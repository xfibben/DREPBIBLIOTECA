import {signOut,useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useUser} from "@auth0/nextjs-auth0/client";

export default function NavbarAdmin(){
    const { user,status,isLoading } = useUser();
    const router =useRouter();
    return(
        <div name="navbar" className="bg-gray-900 py-3 flex justify-between rounded-xl">
            <div className="grid content-center mx-10">
                <img
                    src="https://1.bp.blogspot.com/-m_V7SVYx_KY/X5oVT7yWvHI/AAAAAAABlmg/AAEmKBdzPek_tjQSOUlvi77wYX22XPLvACLcBGAsYHQ/s174"
                    className="h-10" onClick={()=>(router.push('/admin'))}
                ></img>
            </div>
            <div name="foto usuario" className="w-96 mx-10 flex justify-evenly">
                <button
                    onClick={() => router.push("/usuarios")}
                    className="bg-blue-500 my-4 mx-2 px-1 rounded-xl hover:bg-blue-700 hover:text-white"
                >
                    Administrar Usuario
                </button>
                <button
                    onClick={() => router.push("/libros/new")}
                    className="bg-blue-500 my-4 mx-2 px-1 rounded-xl hover:bg-blue-700 hover:text-white"
                >
                    Crear Libro
                </button>
                <a href="api/auth/logout"

                    className="bg-blue-500 my-4 mx-2 px-1 rounded-xl hover:bg-blue-700 hover:text-white"
                >
                    Cerrar sesion
                </a>
                <h1 className="grid content-center text-white">
                    {user.name}
                </h1>
                <img src={user.image} className="w-12 h-12"></img>
            </div>
        </div>
    )
}