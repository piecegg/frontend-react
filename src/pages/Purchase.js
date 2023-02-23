import React from 'react';
import nft from "../assets/nft.png"
import { useMediaQuery } from 'react-responsive';
function Purchase() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (  <>
   {isTabletOrMobile && <div>
    <div className="mt-5 ">
    <h1 className=' mt-24 text-center font-extrabold font-mono text-3xl text-darkbrown'>Purchase Complete</h1>
    </div>
          <div className=" flex justify-center mt-10">
            <img className=" w-64" src={nft} alt="nft" />
          </div>

          <div className=" flex justify-center mt-5">
            <p className="font-mono text-lg font-bold text-darkbrown">
              #32958
            </p>
          </div>

          <div className="flex justify-center mt-12">
            <button className=" w-fit mx-auto rounded-md px-32 py-4 hover:bg-opacity-100 text-stone-200 bg-fadeochre">
              View my pieces 
            </button>
          </div>

          
    </div>}
    </>);
}

export default Purchase;