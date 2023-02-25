import React from "react";
import piece from "../assets/piece.png";
import flow from "../assets/flow.png";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import collect from "../assets/collect.png";

function Landing() {
  return (
    <>
      <div className="flex flex-col">
        <div className="mt-5 ml-5">
          <img className="h-7 w-20" src={piece} alt="piece" />
          <h1 className=" mt-12 text-4xl font-extrabold text-darkbrown font-mono">Turn Tweets into collectibles</h1>
          <p className="mt-10 text-xl font-mono text-darkbrown">Sell any Tweet in seconds.</p></div>
          <div className="flex justify-center mt-6">
            <button  onClick={()=> {
              localStorage.setItem("fromPage","landing")
              window.open(process.env.REACT_APP_TWITTER_AUTH_LOGIN_LINK, "_self")
              }} 
              className=" w-fit mx-auto rounded-md bg-opacity-70 px-32 py-4 hover:bg-opacity-100 text-stone-200 bg-fadeochre shadow-lg ease-out duration-150 transition-all hover:scale-105 ">
              Create a piece
            </button>
          </div>
          <img className="mx-auto mt-14" src={flow} alt="flow" />
        
          <div>
          <h1 className="ml-4 lg:text-center mt-14 text-3xl font-extrabold text-darkbrown font-mono">One dollar, zero friction</h1>
          <p className="mt-6 ml-5 text-xl font-mono text-darkbrown lg:text-center">Each Piece is automatically listed as a certified open edition:$1 for 24hrs</p>
          <img className="mx-auto mt-5" src={collect} alt="collect" />
          </div>

        <div>
          <h1 className=" mt-12 ml-4 lg:text-center text-4xl font-extrabold text-darkbrown font-mono">Own the moment</h1>
        </div>
        <div>
          <p className="mt-6 ml-5 text-md font-bold font-mono text-darkbrown lg:text-center">Iconic moments & news</p>
          <div className="flex gap-5 justify-center mt-5">
            <img className="rounded-lg" src={pic1} alt="pic1" />
            <img className="rounded-lg" src={pic2} alt="pic2" />
          </div>
        </div>

        <div>
          <p className="mt-6 ml-5 text-md font-bold font-mono text-darkbrown lg:text-center">Fan engagement & presales</p>
          <div className="flex gap-5 justify-center mt-5">
            <img className="rounded-lg" src={pic3} alt="pic3" />
            <img className="rounded-lg" src={pic4} alt="pic4" />
          </div>
        </div>

        <div>
          <p className="mt-6 ml-5 text-md font-bold font-mono text-darkbrown lg:text-center">Predictions</p>
          <div className="flex gap-5 justify-center mt-5">
            <img className="rounded-lg" src={pic5} alt="pic5" />
            <img className="rounded-lg" src={pic6} alt="pic6" />
          </div>
        </div>

        <div>
          <p className="mt-6 ml-5 text-md font-bold font-mono text-darkbrown lg:text-center">Written artforms</p>
          <div className="flex gap-5 justify-center mt-5">
            <img className="rounded-lg" src={pic7} alt="pic7" />
            <img className="rounded-lg" src={pic8} alt="pic8" />
          </div>
        </div>

        <div>
          <h1 className="lg:text-center ml-5 mt-14 text-4xl font-extrabold text-darkbrown font-mono">Make digital moments real</h1>
          <div className="flex justify-center mt-6">
            <button  onClick={()=> {
              localStorage.setItem("fromPage","landing")
              window.open(process.env.REACT_APP_TWITTER_AUTH_LOGIN_LINK, "_self")
              }} className=" w-fit mx-auto rounded-md bg-opacity-70 px-32 py-4 hover:bg-opacity-100 text-stone-200 bg-fadeochre shadow-lg ease-out duration-150 transition-all hover:scale-105 ">
              Create a piece
            </button>
          </div>
          <div className="flex justify-center gap-12 mt-8 mb-8">
            <img src={company1} alt="flow" />
            <img src={company2} alt="stripe" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
