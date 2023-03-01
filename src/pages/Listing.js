import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import piece from "../assets/piece.png";
import nft from '../assets/mock_piece.png'
import certified from "../assets/certified.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInDown, fadeInUp, staggerContainer } from "./variants";
function Listing() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [salesEnded, setSalesEnded] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        <div className=" flex justify-between w-full px-6 py-8">
          <motion.div variants={fadeInDown}><img src={piece} alt="logo" className="h-7 w-20" /></motion.div>
          <div className=" flex gap-5">
            <motion.a variants={fadeInDown}
              className=" cursor-pointer hover:scale-105 ease-out transition-all"
              onClick={() => navigate("/")}
            >
              <p className=" font-opensans text-lg font-bold lg:mr-5">Log in</p>
            </motion.a>
          </div>
        </div>

        <motion.div variants={fadeInUp} className=" flex justify-center mt-6">
          <img className=" min-w-max" src={nft} alt="nft" />
        </motion.div>

        <motion.div variants={fadeInUp} className=" mt-7 ml-8 mb-7 flex justify-between lg:justify-center lg:gap-24">
          <p className="font-opensans text-md font-bold text-darkbrown">
            Piece #32958
          </p>
          <div className="flex pr-8">
            <img
              src={certified}
              alt="certified"
              className=" h-4 w-4 ml-3 mt-1"
            />
            <p className=" font-opensans font-bold ml-1 text-md text-fadebrown">
              Certified
            </p>
          </div>
        </motion.div>
        {!salesEnded && (
          <div>
            <motion.div variants={fadeInUp} className="flex justify-center mt-4">
              <button  onClick={() => navigate("/buy")} className=" hover:scale-105 transition-all ease-out font-opensans w-fit mx-auto rounded-md bg-opacity-70 px-36 py-4 hover:bg-opacity-100 text-stone-200 bg-fadeochre">
                Collect ($1)
              </button>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-5 lg:text-center">
              <p className="ml-6 font-opensans text-md text-darkbrown ">
                3hr 15 min left | 122 Collected
              </p>
              <div className="lg:mx-auto  mx-5 border-t-4 w-60 rounded-md border-white"></div>
              <div className=" lg:mx-auto lg:pr-4 mx-5 -mt-1 border-t-4 w-28 rounded-md border-fadebrown"></div>
            </motion.div>
          </div>
        )}

        {salesEnded && (
          <motion.div variants={fadeInUp} className="mt-3">
            <p className="lg:mx-auto ml-6 font-opensans text-md text-darkbrown ">
              Sale Ended | 122 Collected
            </p>
          </motion.div>
        )}
      </motion.div>
      )
    </>
  );
}

export default Listing;
