
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'
import info from '../assets/info.png'
import twitter from '../assets/twitter.png'
import { useMediaQuery } from 'react-responsive'
import flow from "../assets/flow.png";
import { Bars3Icon } from '@heroicons/react/24/solid'
import AlertBox from '../components/AlertBox';
import { useNavigate } from 'react-router-dom';
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
        setPopupParam({ open: false })
    }

    const sendVerificationText = () => {

        setPopupParam({ open: true, bodyText: "We texted a code to " + input, resendCode: resendCode, verifyCode: verifyCode, codeText: "" })
    }


    const [authenticate, setAuthincate] = useState(false)
    const [userData, setUserData] = useState({})
    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL, {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then(response => {
                if (response.status === 200) return response.json();
                throw new Error("failed to authenticate user");
            })
            .then(responseJson => {
                //console.log(responseJson.user)
                setAuthincate(true)
                setUserData(responseJson.user)

            })
            .catch(error => {
                 navigate('/')

            });
    }, [])
    return (<>


        {isTabletOrMobile && <>
            <AlertBox popupParam={popupParam} setPopupParam={setPopupParam} />

            <nav className=" flex flex-wrap items-center font-Montserrat justify-between  w-full py-4 md:py-0 px-5 lg:py-4 lg:px-20  ">


                <div className=" flex items-center justify-between font-[500] w-full">
                    <img src={logo} alt="logo" />

                    <Bars3Icon className='h-8 ml-3 ' onClick={() => navigate("/menu")} />

                </div>

            </nav>

            <div className=" grid text-[#312E2A]   font-Montserrat">



                <div className="row flex  px-5 ">
                    <div className='w-1/2 pt-0 mt-7 pb-3 flex tracking-[1px] items-center text-[16px]  font-regular opacity-60'>
                        <img src={twitter} className="h-4 mr-2 " />{userData.screenName && "@" + userData.screenName}
                    </div>



                </div>
                <div className="row flex  px-5 ">
                    <div className="">

                        <h1 className=" mt-3 text-4xl font-extrabold text-darkbrown font-mono">Create a Piece</h1>
                    </div>
                </div>

                <div className="row flex  px-5 ">

                    <div className='w-full  tracking-[1px] justify-start items-center flex   pb-3  pt-5  text-[16px] font-[300]'>
                        Reply “@CreateAPiece” to any of your text-only Tweets, and we'll create a Pieace that anyone can collect for $1 for 24hrs.
                    </div>


                </div>

                <div className="row px-5 items-center flex ">
                    <img className="mx-auto mt-10" src={flow} alt="flow" />
                </div>
                <footer className=" inset-x-0 bottom-0 fixed   px-5 ">
                    <div className=" w-full my-4  p-3 tracking-[1px] flex justify-center bg-[#E7D8C4] items-center text-[12px] font-[300] ">
                        <img className="mx-auto h-10 mr-3" src={info} alt="flow" />
                        Only text tweets are supported at this time. We do not yet support threads or images.
                    </div>
                </footer>




            </div>

        </>

        }





    </>);
}

export default CreatePiece;