import React from 'react'
import Header from './Header'
import { useState } from 'react'

function Login() {
    const [isLogin,setLogin] = useState(true);
    
    const [fullName,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


 function LoginHandler(){
       setLogin(prev=>!prev)
 }

 function getInputDataHandler(e){
    e.preventDefault();
    console.log(fullName,email,password);
    setFullName("");
    setEmail("");
    setLogin("");

 }
 
  return (
    <div>
        <Header></Header>
        <div className='absolute'>
           <img className='h-[100vh] w-[100vw]' src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg" alt="bg" />
        </div>
        <form onSubmit={getInputDataHandler} className='flex items-center p-10 justify-center flex-col w-3/12 my-28 mx-auto  left-0 right-0 absolute bg-black opacity-85 rounded-md'>
            <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
            <div className='flex flex-col'>
                {
                    !isLogin &&  (<input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />)
                }
               
                <input onChange={(e)=>setEmail(e.target.value)} type="email"  value={email} placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
                 <button className='bg-red-600 mt-8 text-white text-xl py-1 rounded-sm'>{isLogin ? "Login" : "Signup"}</button>
                <p className='text-white mt-1'>{isLogin ? "New to Netflix" : "Already have an account?"} <span className='ml-1 text-blue-900 hover:cursor-pointer font-medium' onClick={LoginHandler}>{isLogin ? "Signup" : "Login"}</span></p>
            </div>
        </form>
    </div>
  )
}

export default Login