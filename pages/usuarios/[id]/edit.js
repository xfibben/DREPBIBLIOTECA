import {useEffect, useState} from "react";
import { useRouter } from "next/router";
import NavbarAdmin from "../../components/navbar";
import Loading from "../../components/Loading";
import {useUser} from "@auth0/nextjs-auth0/client";
export default function UserFormPage(){
    const router=useRouter();
    const {user,error,isLoading}=useUser();
    const {query,push}=useRouter();
    const [newUser,setNewUser]=useState({
        email:""
    });
    useEffect()
    const getUser=async()=>{
        const res=await fetch("http://localhost:8080/api/users"+query.id);
        const data=await res.json();
        setNewUser({
            email:data.email,
        });

    }
}