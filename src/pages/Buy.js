import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import nft from "../assets/nft.png";
import apple2 from "../assets/apple2.png";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
const stripePromise = loadStripe("pk_test_51Mg5OdSF3WP5DzSyRT0uf0LrF4AD0qfykJqnUdp0hTlGJOLLiOiEhNQ7zTmRP2xhFrbvix10LoZ66THIOJVU9ERI00Yz6Luprs");
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
        // navigate("/");
      });
  }, []);
  return (
    <>
      {isTabletOrMobile && (
        <div>
          <ArrowLeftIcon className="h-8 w-8 mt-5 ml-4" />
          <div className="flex justify-center mt-5">
            <img className="h-44 w-44" src={nft} alt="nft" />
          </div>
          <div className="text-center mt-5">
            <p className="font-mono text-xl font-bold text-darkbrown">#32958</p>
            <p className="font-mono text-lg text-darkbrown">$1</p>
          </div>
          <div className="flex justify-center mt-7">
            <button className="w-96 rounded-md px-4 py-4 bg-opacity-90 text-stone-200 bg-black ">
              <img src={apple2} className="h-6 w-5 -mb-5 ml-32" />
              <p className="text-white font-mono">Pay</p>
            </button>
          </div>

          <div className="mt-10 ml-3 mr-3 border-t-2 border-ochredark">
            <div className="h-8 w-fit font-normal mx-auto px-3 text-ochredark bg-ochre -mt-4 ">
              <p>Or Pay with card</p>
            </div>
          </div>

          <div>
            <p className="mt-6 ml-5 text-lg font-mono text-darkbrown">Card info</p>
            <div>
              <form method="GET" id="my_form"></form>
              <Elements stripe={stripePromise}>
               <PaymentForm/>
          </Elements>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Buy;
