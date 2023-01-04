import {useRouter} from "next/router";
import {useUser} from "@auth0/nextjs-auth0/client";




export default function NavbarUser(){
    const { user,status,isLoading } = useUser();
    const router =useRouter();
    return(
        <div name="navbar" className="bg-white-900 py-3 flex justify-between rounded-xl">
            <div className="grid content-center mx-10">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/64/64673.png?w=360"
                    className="h-10" 
                ></img>

            </div>
            <div>
                <button className="bg-blue-500 my-4 mx-2 px-1 rounded-xl hover:bg-blue-700 hover:text-white" onClick={()=>(router.push('/search'))}> Buscar Libro</button>
            </div>
            <div>
                
            </div>
        </div>
    )

}