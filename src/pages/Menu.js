
import React from 'react';
import { useMediaQuery } from 'react-responsive'

import create from '../assets/create.png'
import arrowRight from '../assets/arrowRight.png'
import Payments from '../assets/Payments.png'
import list from '../assets/listing.png'
import wallet from '../assets/wallet.png'
import logo from '../assets/logo.png'
import myPiece from '../assets/myPiece.png'
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate =useNavigate();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return (<>

        {isTabletOrMobile && <>

            <nav className=" flex flex-wrap items-center font-Montserrat justify-between  w-full py-4 md:py-0 px-5 lg:py-4 lg:px-20  ">


                <img src={logo} alt="logo" />
                <XMarkIcon className='h-8  ' onClick={()=>navigate(-1)} />


            </nav>

            <div className="  text-[#312E2A]  font-Montserrat">

                <div className="flex justify-center">
                    <ul className="w-screen  h-[80vh] p-1  ">
                        <li
                            className="w-full  px-4  ">

                            <div className='  grid-cols-4 border-b  py-7 border-[#D3C5B0] flex justify-between '>

                                <div className='flex col-span-3 items-center text-[#312E2A] text-[16px] font-[400]' >
                                    <img src={create} className="h-12 mr-3 flex sm:h-9" alt="Flowbite Logo" />Create
                                </div>
                                <div className='flex items-center grid-col'>
                                    <img src={arrowRight} className="h-3  " alt="Flowbite Logo" />

                                </div>
                            </div>
                        </li>
                        <li
                            className="w-full px-4">

                            <div className='  grid-cols-4 border-b   py-7  border-[#D3C5B0] flex justify-between '>

                                <div className='flex col-span-3 items-center text-[#312E2A] text-[16px] font-[400]'>
                                    <img src={myPiece} className="h-12 mr-4 sm:h-9" alt="Flowbite Logo" />My Pieces
                                </div>
                                <div className='flex items-center grid-col'>
                                    <img src={arrowRight} className="h-3  " alt="Flowbite Logo" />

                                </div>
                            </div>

                        </li>
                        <li
                            className="w-full px-4">

                            <div className='  grid-cols-4 border-b   py-7  border-[#D3C5B0] flex justify-between '>

                                <div className='flex col-span-3 items-center text-[#312E2A] text-[16px] font-[400]'>
                                    <img src={Payments} className="h-12 mr-4 sm:h-9" alt="Flowbite Logo" />Payments
                                </div>
                                <div className='flex items-center grid-col'>
                                    <img src={arrowRight} className="h-3  " alt="Flowbite Logo" />

                                </div>
                            </div>

                        </li>
                        
                        <li
                            className="w-full px-4">

                            <div className='  grid-cols-4 border-b  py-7  border-[#D3C5B0] flex justify-between '>

                                <div className='flex col-span-3 items-center text-[#312E2A] text-[16px] font-[400]'>
                                    <img src={list} className="h-12 mr-4 sm:h-9" alt="Flowbite Logo" />Listing defaults
                                </div>
                                <div className='flex items-center grid-col'>
                                    <img src={arrowRight} className="h-3  " alt="Flowbite Logo" />

                                </div>
                            </div>
                        </li>
                        <li
                            className="w-full px-4">

                            <div className='  grid-cols-4   py-7  border-[#D3C5B0] flex justify-between '>


                                <div className='flex col-span-3 items-center text-[#312E2A] text-[16px] font-[400]'>
                                    <img src={wallet} className="h-12 mr-4 sm:h-9" alt="Flowbite Logo" />Connect NFT Wallet
                                </div>
                                <div className='flex items-center grid-col'>
                                    <img src={arrowRight} className="h-3  " alt="Flowbite Logo" />

                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="    px-5 ">


                    <div className='w-full pt-0 pb-5 text-[16px] font-regular'>
                        email@mail.com
                    </div>



                </div>
                <div className=" w-full  h-[7vh] px-3 flex justify-center ">
                    <button className="border border-[#312E2A]  w-full m-2 mt-0  font-bold">
                        Log out
                    </button>
                </div>

            </div>

        </>

        }





    </>);
}

export default Menu;