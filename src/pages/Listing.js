import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import piece from "../assets/piece.png";
import nft from "../assets/nft.png";
import certified from "../assets/certified.png";
import { useNavigate } from "react-router-dom";
function Listing() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [salesEnded,setSalesEnded]=useState(false);
  const navigate=useNavigate();
  return (
    <>
      {isTabletOrMobile && (
        <div>
          <div className=" flex justify-between w-full px-6 py-8">
            <img src={piece} alt="logo" className="h-6 w-20" />
            <div className=" flex gap-5">
              <a className=" cursor-pointer hover:scale-105 ease-out transition-all" onClick={()=>navigate("/")}>
                <p className=" font-opan text-lg font-semibold">Log in</p>
              </a>
            </div>
          </div>

          <div className=" flex justify-center mt-6">
            <img className=" min-w-max" src={nft} alt="nft" />
          </div>

          <div className=" mt-7 ml-8 mb-7 flex justify-between">
          <p className="font-mono text-md font-bold text-darkbrown">
            Piece #32958
         </p>
            <div className="flex pr-8">
          
              <img
                src={certified}
                alt="certified"
                className=" h-4 w-4 ml-3 mt-1"
              />
              <p className=" font-mono font-bold ml-1 text-md text-fadebrown">
                Certified
              </p>
            </div>
          </div>
          {!salesEnded &&
            <div>
          <div className="flex justify-center mt-4">
            <button className=" w-fit mx-auto rounded-md bg-opacity-70 px-36 py-4 hover:bg-opacity-100 text-stone-200 bg-fadeochre">
              Collect ($1)
            </button>
          </div>
           <div className="mt-3">
          <p className="ml-6 font-mono text-md text-darkbrown ">3hr 15 min left | 122 Collected</p>
          <div className=' mx-5 border-t-4 border-white'></div>
          <div className=' mx-5 -mt-1 border-t-4 w-28 rounded-md border-fadebrown'></div>
          </div>
        </div>}

          {salesEnded && <div className="mt-3">
          <p className="ml-6 font-mono text-md text-darkbrown ">Sale Ended | 122 Collected</p>
          </div>}

        </div>
      )}
    </>
  );
}

export default Listing;
