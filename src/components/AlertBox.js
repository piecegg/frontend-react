import React, { useEffect, useState } from "react";

import Popup from "reactjs-popup";
function AlertBox({ popupParam, setPopupParam }) {
  const contentStyle = {
    maxWidth: "600px",
    width: "90%",
  };
  return (
    <Popup
      modal
      open={popupParam.open}
      contentStyle={contentStyle}
      position=" center"
    >

      <div className="grid bg-white rounded">
        <div className=" grid text-[#312E2A]  p-4  font-Montserrat">


          <div className='w-full row  items-center flex border-[#D3C5B0] py-2     text-[16px] font-[700]'>
            Confirm verification code
          </div>
          <div className='w-full row   items-center flex border-[#D3C5B0] py-2   text-[14px] font-[400]'>
            {popupParam.bodyText}
          </div>
          <div className=" row w-full my-4   flex justify-center ">
            <input type="number" value={popupParam.codeText} onChange={(event) => setPopupParam({ ...popupParam, codeText: event.target.value })} id="first_name" className=" w-1/2 rounded-md m-1 bg-white border border-gray-300 text-gray-900 text-sm  block   p-3  " placeholder="Enter phone number" required />

            <button onClick={() => popupParam.verifyCode(popupParam.codeText)} className={popupParam.codeText ? ' w-1/2 p-3 m-1 bg-opacity-90 text-stone-200 bg-fadeochre' : 'w-1/2 p-3 m-1 bg-opacity-40 text-stone-200 bg-fadeochre'}>Confirm</button>

          </div>
          <div onClick={popupParam.resendCode} className='w-full row underline cursor-pointer justify-center flex border-[#D3C5B0] py-2   text-[14px] font-[400]'>
            Re-send code
          </div>
        </div>


      </div>

    </Popup>
  );
}

export default AlertBox;
