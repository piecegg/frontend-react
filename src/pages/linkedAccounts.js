
import React, { useState } from 'react';
import link from '../assets/link.png'
import { useMediaQuery } from 'react-responsive'
 
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
function LinkedAccounts() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [input, setInput] = useState("");
    const [textCode, setTextCode] = useState(false);
    const inputHandler = (event) => [
        setInput(event.target.value),
        setTextCode(true)

    ]

    return (<>


        {isTabletOrMobile && <>

            <nav className=" flex flex-wrap items-center font-Montserrat justify-between  w-full py-4 md:py-0 px-5 lg:py-4 lg:px-20  ">


                <div className=" flex items-center font-[500]">
                    <ChevronLeftIcon className='h-3 mr-3 ' /> Back

                </div>

            </nav>

            <div className="  text-[#312E2A] h-[70vh] font-Montserrat">
                <div className="row  ">
                    <div className='w-full py-2 md:py-0 px-5  pb-5 text-[32px] font-[800]'>
                        Linked accounts
                    </div>
                </div>
                <div className="row   px-5 ">

                    <div className='w-full border-t  border-[#D3C5B0] py-2  pt-5   text-[14px] font-[700]'>
                        SMS
                    </div>
                    <div className='w-full py-2  text-[14px] font-regular'>
                        Allows creating a Piece by sending text to 000000
                    </div>
                    <div className=" w-full mb-4   flex justify-center ">

                        <button className={textCode ? ' w-full p-3  bg-opacity-90 text-stone-200 bg-fadeochre' : 'w-full p-3  bg-opacity-40 text-stone-200 bg-fadeochre'}>Text a code</button>

                    </div>
                    <div className=' items-center flex justify-between  w-full  '>

                        <select className=" p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                            <option>+ 1</option>
                            <option>+ 2</option>
                            <option>+ 3</option>
                            <option>+ 4</option>
                        </select>

                        <input type="text" onClick={inputHandler} id="first_name" className=" w-5/6 rounded-md bg-white border border-gray-300 text-gray-900 text-sm  block   p-3  " placeholder="Enter phone number" required />
                        <div>


                        </div>
                    </div>
                </div>


                 

            </div>

        </>

        }





    </>);
}

export default LinkedAccounts;