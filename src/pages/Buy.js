import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import nft from "../assets/nft.png";
import apple2 from "../assets/apple2.png";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { motion } from "framer-motion";
import { fadeInDown, fadeInUp, staggerContainer } from "./variants";
const stripePromise = loadStripe(
  "pk_test_51Mg5OdSF3WP5DzSyRT0uf0LrF4AD0qfykJqnUdp0hTlGJOLLiOiEhNQ7zTmRP2xhFrbvix10LoZ66THIOJVU9ERI00Yz6Luprs"
);
function Buy() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const navigate = useNavigate();
  const [authenticate, setAuthincate] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then((responseJson) => {
        setAuthincate(true);
        setUserData(responseJson.user);
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
 
      });
  }, []);
  return (
    <>
      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        <ArrowLeftIcon className="h-8 w-8 mt-5 ml-4" />
        <motion.div variants={fadeInUp} className="flex justify-center mt-5">
          <img
            className="h-44 w-44 hover:scale-105 hover:shadow-lg"
            src={nft}
            alt="nft"
          />
        </motion.div>
        <motion.div variants={fadeInUp} className="text-center mt-5">
          <p className="font-opensans text-xl font-bold text-darkbrown">
            #32958
          </p>
          <p className="font-opensans text-lg text-darkbrown">$1</p>
        </motion.div>
        <motion.div variants={fadeInUp} className="flex justify-center mt-7">
          <button className=" hover:scale-105 transition-all ease-out font-opensans w-96 rounded-md px-4 py-4 bg-opacity-90 text-stone-200 bg-black ">
            <img src={apple2} className="h-6 w-5 -mb-5 ml-32" />
            <p className="text-white font-opensans">Pay</p>
          </button>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-10 ml-3 mr-3 border-t-2 border-ochredark">
          <div className="h-8 w-fit font-normal mx-auto px-3 text-ochredark bg-ochre -mt-4 ">
            <p className="font-opensans">Or Pay with card</p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <p className="lg:text-center font-bold lg:pl-88 lg:pr-80 mt-6 ml-5 text-lg font-opensans text-darkbrown">
            Card info
          </p>
          <div>
            <form method="GET" id="my_form"></form>
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
          </div>
        </motion.div>
      </motion.div>
      )
    </>
  );
}

export default Buy;
