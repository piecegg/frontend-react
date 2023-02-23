import React from "react";
import { useMediaQuery } from "react-responsive";
import piece from "../assets/piece.png";
import nft from "../assets/nft.png";
import certified from "../assets/certified.png";
function Listing() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {isTabletOrMobile && (
        <div>
          <div className=" flex justify-between w-full px-6 py-8">
            <img src={piece} alt="logo" className="h-6 w-20" />
            <div className=" flex gap-5">
              <a>
                <p className=" font-mono text-lg font-semibold">Create</p>
              </a>
              <a>
                <p className="font-mono text-lg font-semibold">Log in</p>
              </a>
            </div>
          </div>

          <div className=" flex justify-center mt-6">
            <img className=" min-w-max" src={nft} alt="nft" />
          </div>

          <div className=" mt-7 ml-6">
            <p className="font-mono text-3xl font-bold text-darkbrown">
              #32958
            </p>
            <div className="flex">
              <p className=" font-mono text-md text-darkbrown ">
                by 0x23...74 on 1/1/2023
              </p>
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

          <div className="flex justify-center mt-4">
            <button className=" w-fit mx-auto rounded-md bg-opacity-70 px-36 py-4 hover:bg-opacity-100 text-stone-200 bg-fadeochre">
              Collect ($1)
            </button>
          </div>

          <div className="mt-3">
          <p className="ml-6 font-mono text-md text-darkbrown ">3hr 15 min left | 122 Collected</p>
          <div className=' mx-5 border-t-4 border-white'></div>
          <div className=' mx-5 mt-1 border-t-4 w-28 rounded-md border-fadebrown'></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Listing;
