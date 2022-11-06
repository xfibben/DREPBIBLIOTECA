import { getCsrfToken } from "next-auth/react"
import { signIn,useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignIn({ csrfToken }) {
  const router=useRouter();
const{data:session,status}=useSession();
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [message,setMessage]=useState('')
const signInUser=async (e)=>{
  e.preventDefault();
  let options={redirect:false,email,password}
  const res=await signIn('credentials',options)
  setMessage(null)
  if(res?.error){
    setMessage(res.error)
  }
  return router.push('/')
}
  if(status!=='loading' && status==='authenticated'){
    router.push('/')
}
  return (

    <div name='login'>

    
    <form  name='email' method="post" action="/api/auth/signin/email">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Email address
        <input type="email" id="email" name="email" />
      </label>
      <button type="submit">Sign in with Email</button>
    </form >

    <form  name='datos' >
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Correo
        <input type="email"  value={email} onChange={e=>setEmail(e.target.value)} />
      </label>
      <label>
        Contraseña
        <input type="password" id="password" value={password} onChange={e=>setPassword(e.target.password)}/>
      </label>
      <p> {message}</p>
      <button type="submit" onClick={(e)=>signInUser(e)}>Ingresar</button>
    </form >
    </div>
  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}

