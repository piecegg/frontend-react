import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {ArrowLeftIcon} from "@heroicons/react/24/outline" 
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
        <ArrowLeftIcon className='h-8 w-8 mt-5'/>
        <h1 className=' mt-72 text-left font-extrabold font-mono text-4xl text-darkbrown'>Log in to Purchase</h1>
        </div>
        
        
         

          <div onClick={()=>  window.open(process.env.REACT_APP_TWITTER_AUTH_LOGIN_LINK, "_self")} className=' flex cursor-pointer -mb-5 transition-all ease-out shadow-md mt-6 mx-auto gap-3 border-2 rounded-md border-slate-900 w-96 pl-24  py-4'>
          <img src={twitter} className="h-5 w-5 my-auto -ml-20"/>
          <p className=' font-mono font-semibold'>Sign in with Twitter</p>
          </div>
          
     
    </div>}
    </>);
}

export default Login;