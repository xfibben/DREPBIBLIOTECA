import { useSession, signOut } from "next-auth/react";
import { Router, useRouter } from "next/router";
import Loading from "../components/Loading";
import NavbarAdmin from "../components/navbar"
import SidebarUsers from "../components/sidebarUsers";


export default function Home({users}) {
    const router = useRouter();
    const { data: session, status } = useSession();
    if (status === "loading") {
        return <Loading/>;
    }
    if(session?.user.name){
        console.log('ingresaste con google')
        return (
            <div className=" h-full">
                <NavbarAdmin></NavbarAdmin>
                <div className={'w-full grid md:flex mt-5'}>
                    <SidebarUsers></SidebarUsers>
                    <div className={'bg-gray-100 rounded-2xl w-full md:w-3/4  grid   mr-1 md:mr-10 shadow-2xl'}>
                        {users.map(user=>(
                            <div className={'grid mx-10 '} key={user._id} >
                                <div className={'mx-5 flex justify-between h-10'} >
                                    <h1 className={'text-xl h-20 flex justify-center'}>{user.email}</h1>
                                    <div className={'flex justify-between  w-52'}>
                                        <div className={'bg-green-500  h-8 w-20 grid justify-center rounded-2xl hover:bg-green-700'} onClick={()=>router.push(`/api/users/${user._id}`)}>Editar </div>
                                        <div className={'bg-red-500  h-8 w-20 grid justify-center rounded-2xl hover:bg-red-700'}>Eliminar </div>
                                    </div>
                                </div>


                                <div className={'bg-black h-1 w-full mx-5'}>

                                </div>


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
    const res = await fetch("http://localhost:8080/api/users");
    const users = await res.json();
    console.log('se tienen todos los usuarios');
    return {
        props: { users },
    };
};
