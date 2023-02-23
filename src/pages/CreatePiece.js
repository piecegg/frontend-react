
import React, { useState } from 'react';
import logo from '../assets/logo.png'
import message from '../assets/message.png'
import mail from '../assets/mail.png'
import twitter from '../assets/twitter.png'
import { useMediaQuery } from 'react-responsive'

import { Bars3Icon } from '@heroicons/react/24/solid'
import AlertBox from '../components/AlertBox';
import {  useNavigate } from 'react-router-dom';
function CreatePiece() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const [textCode, setTextCode] = useState(false);
    const inputHandler = (event) => [
        setInput(event.target.value),
        setTextCode(true)
    ]
    const [popupParam, setPopupParam] = useState({ open: false, });
    //otp verify code
    const resendCode = () => {
        //code for resending code
        console.log("resend")
    }
    const verifyCode = (codeText) => {
        //code for resending code
        console.log("code entered is " + codeText)

        //close the popup when verification done
        setPopupParam({ open: false})
    }

    const sendVerificationText = () => {

        setPopupParam({ open: true, bodyText: "We texted a code to " + input, resendCode: resendCode, verifyCode: verifyCode, codeText: "" })
    }
    return (<>


        {isTabletOrMobile && <>
            <AlertBox popupParam={popupParam} setPopupParam={setPopupParam} />

            <nav className=" flex flex-wrap items-center font-Montserrat justify-between  w-full py-4 md:py-0 px-5 lg:py-4 lg:px-20  ">


                <div className=" flex items-center justify-between font-[500] w-full">
                    <img src={logo} alt="logo" />
                    Create a Piece
                    <Bars3Icon className='h-8 ml-3 ' onClick={()=>navigate("/menu")} />

                </div>

            </nav>

            <div className=" grid text-[#312E2A]   font-Montserrat">

                <div className="row flex  px-5 ">
                    <div className='w-1/2   items-center flex border-[#D3C5B0] py-2  pt-5   text-[16px] font-[700]'>
                        <img src={mail} className="mr-4 h-4 font-[600]" /> Email
                    </div>

                    <div className='w-1/2   justify-end items-center flex border-[#D3C5B0] py-2  pt-5   text-[14px] font-[400]'>
                        email@mail.com
                    </div>


                </div>

                <div className="row flex  px-5 ">

                    <div className='w-full   justify-start items-center flex border-[#D3C5B0] pb-7  pt-3 border-b border-[#D3C5B0]    text-[16px] font-[400]'>
                        Email: create@piece.gg
                    </div>


                </div>
                <div className="row flex  px-5 ">
                    <div className='w-1/2   items-center flex border-[#D3C5B0] py-2  pt-5   text-[16px] font-[700]'>
                        <img src={twitter} className="mr-4 h-4 font-[600]" /> Twitter
                    </div>

                    <div className='w-1/2   justify-end items-end flex border-[#D3C5B0] py-2  pt-5   text-[14px] font-[400]'>
                        <div className=" w-full    flex justify-end ">
                            <button className="border border-[#312E2A] rounded  px-5 py-2 font-bold">
                                Link Twitter
                            </button>
                        </div>
                    </div>


                </div>

                <div className="row flex  px-5 ">

                    <div className='w-full   justify-start items-center flex border-[#D3C5B0] pb-7  pt-3 border-b border-[#D3C5B0]    text-[16px] font-[400]'>
                        Reply “@CreateAPiece” to your Tweet
                    </div>


                </div>

                <div className="row px-5 ">

                    <div className='w-full items-center flex border-[#D3C5B0] py-2  pt-5   text-[16px] font-[700]'>
                        <img src={message} className="mr-4 h-5 font-[600]" /> SMS
                    </div>
                    <div className='w-full py-2 flex  text-[14px] font-regular'>
                        Text 486554
                    </div>

                    <div className=' items-center flex justify-between  w-full  '>

                        <select className=" p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                            <option>+ 1</option>
                            <option>+ 2</option>
                            <option>+ 3</option>
                            <option>+ 4</option>
                        </select>

                        <input type="text" onChange={inputHandler} id="first_name" className=" w-5/6 rounded-md bg-white border border-gray-300 text-gray-900 text-sm  block   p-3  " placeholder="Enter phone number" required />
                        <div>


                        </div>
                    </div>
                    <div className=" w-full my-4   flex justify-center ">

                        <button className={textCode ? ' w-full p-3  bg-opacity-90 text-stone-200 bg-fadeochre' : 'w-full p-3  bg-opacity-40 text-stone-200 bg-fadeochre'} onClick={sendVerificationText}>Text verification code</button>

                    </div>
                </div>




            </div>

        </>

        }





    </>);
}

export default CreatePiece;