import {signOut} from "next-auth/react";

export const navbar=()=>{
    return(
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
    )
}