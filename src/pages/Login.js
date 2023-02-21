import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {ArrowLeftIcon} from "@heroicons/react/24/outline"
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import apple from "../assets/apple.png"
import twitter from "../assets/twitter.png"
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
        <ArrowLeftIcon className='h-6 w-6'/>
        <h1 className=' mt-4 text-left font-extrabold font-mono text-3xl text-slate-900'>Log in</h1>
        </div>
        
        <div className='grid'>
          <div className=' flex cursor-pointer -mb-5 transition-all ease-out shadow-md mt-10 mx-auto gap-3 border-2 rounded-md border-slate-900 w-80 px-14 py-2'>
          <img src={google} className="h-5 w-5 my-auto"/>
          <p className=' font-mono font-semibold'>Sign in with Google</p>
          </div>
          <div className=' flex cursor-pointer -mb-5 transition-all ease-out shadow-md mt-10 mx-auto gap-3 border-2 rounded-md border-slate-900 w-80 px-12 py-2'>
          <img src={facebook} className="h-5 w-5 my-auto"/>
          <p className=' font-mono font-semibold'>Sign in with Facebook</p>
          </div>
          <div className=' flex cursor-pointer -mb-5 transition-all ease-out shadow-md mt-10 mx-auto gap-3 border-2 rounded-md border-slate-900 w-80 px-16 py-2'>
          <img src={apple} className="h-5 w-5 my-auto"/>
          <p className=' font-mono font-semibold'>Sign in with Apple</p>
          </div>
          <div className=' flex cursor-pointer -mb-5 transition-all ease-out shadow-md mt-10 mx-auto gap-3 border-2 rounded-md border-slate-900 w-80 px-14 py-2'>
          <img src={twitter} className="h-5 w-5 my-auto"/>
          <p className=' font-mono font-semibold'>Sign in with Twitter</p>
          </div>
          
          <div className='mt-12 ml-3 mr-3 border-t-2 border-ochredark'>
          <div className='h-8 w-fit font-normal mx-auto px-3 text-ochredark bg-ochre -mt-4 '><p>Or use email</p></div>
          </div>

          <div className='grid gap-3 justify-items-center'>
          <input  onClick={inputHandler} type="email" className='w-80 px-3 py-2 border-gray-400 border-2 rounded-md' placeholder='Enter email'/>
         <button className={magicLink? 'w-80 rounded-md px-4 py-4 bg-opacity-90 text-stone-200 bg-fadeochre':'w-80 rounded-md px-4 py-4 bg-opacity-40 text-stone-200 bg-fadeochre'}>Enter a magic link</button>
          </div>
        </div>
    </div>}
    </>);
}

export default Login;