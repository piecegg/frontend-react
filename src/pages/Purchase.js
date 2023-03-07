import React from "react";
import nft from "../assets/nft.png";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { fadeInDown, fadeInUp, staggerContainer } from "./variants";
import { useNavigate } from "react-router-dom";
function Purchase() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const navigate=useNavigate();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        <motion.div variants={fadeInUp} className="mt-5 ">
          <h1 className=" mt-24 text-center font-extrabold font-opensans text-3xl text-darkbrown">
            Purchase Complete
          </h1>
        </motion.div>
        <motion.div variants={fadeInUp} className=" flex justify-center mt-10">
          <img className="hover:scale-105 ease-out transition-all  hover:shadow-lg w-64" src={nft} alt="nft" />
        </motion.div>

        <motion.div variants={fadeInUp} className=" flex justify-center mt-5">
          <p className="font-opensans text-lg font-bold text-darkbrown">#32958</p>
        </motion.div>

        {isTabletOrMobile&&<motion.div variants={fadeInUp} className="flex justify-center mt-12">
          <button onClick={() => navigate("/pieces")} className=" hover:scale-105 ease-out transition-all  hover:shadow-lg font-opensans w-fit mx-auto rounded-md px-32 py-4 hover:bg-opacity-100 text-stone-200 bg-fadeochre">
            View my pieces
          </button>
        </motion.div>}
        {isDesktopOrLaptop && <motion.div variants={fadeInUp} className="flex justify-center mt-12">
        <button onClick={() => navigate("/pieces")} className=" hover:scale-105 ease-out transition-all  hover:shadow-lg font-opensans w-fit mx-auto rounded-md px-14 py-3 hover:bg-opacity-100 text-stone-200 bg-fadeochre">
          View my pieces
        </button>
      </motion.div>}
      </motion.div>
    </>
  );
}

export default Purchase;
