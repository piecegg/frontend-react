import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {ArrowLeftIcon} from "@heroicons/react/24/outline"
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import apple from "../assets/apple.png"
import twitter from "../assets/twitter.png"
import logo from "../assets/logo.png"
function Login() {
    const [input, setInput]=useState("");
    const [magicLink,setMagicLink]=useState(false);
    const inputHandler=(event)=>[
        setInput(event.target.value),
        setMagicLink(true)

    ]
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return ( <>
        {isTabletOrMobile && 
        <div><div className="mt-5 ml-4">
        <img src={logo} alt="logo"/>
        <h1 className=' mt-10 text-left font-extrabold font-mono text-4xl text-darkbrown'>Log in to Purchase</h1>
        </div>
        
        <div className='grid mt-4'>
          <div className=' flex cursor-pointer -mb-5 transition-all ease-out shadow-md mt-10 mx-auto gap-3 border-2 rounded-md border-slate-900 w-96 pl-24  py-4'>
          <img src={google} className="h-5 w-5 my-auto"/>
          <p className=' font-mono font-semibold'>Sign in with Google</p>
          </div>

          <div className=' flex cursor-pointer -mb-5 transition-all ease-out shadow-md mt-10 mx-auto gap-3 border-2 rounded-md border-slate-900 w-96 pl-24  py-4'>
          <img src={twitter} className="h-5 w-5 my-auto"/>
          <p className=' font-mono font-semibold'>Sign in with Twitter</p>
          </div>
          
          <div className='mt-12 ml-3 mr-3 border-t-2 border-ochredark'>
          <div className='h-8 w-fit font-normal mx-auto px-3 text-ochredark bg-ochre -mt-4 '><p>Or use email</p></div>
          </div>

          <div className='grid gap-3 justify-items-center'>
          <input  onClick={inputHandler} type="email" className='w-96 px-3 py-4 border-gray-400 border-2 rounded-md' placeholder='Enter email'/>
         <button className={magicLink? 'w-80 rounded-md px-4 py-4 bg-opacity-90 text-stone-200 bg-fadeochre':'w-96 rounded-md px-4 py-4 bg-opacity-40 text-stone-200 bg-fadeochre'}>Send Verification Link</button>
          </div>
        </div>
    </div>}
    </>);
}

export default Login;