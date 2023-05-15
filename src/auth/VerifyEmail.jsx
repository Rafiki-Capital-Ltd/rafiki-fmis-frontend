import React from 'react'

function VerifyEmail() {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col items-center justify-center h-screen ">
        <div className="bg-white shadow-md p-20 m-5">
          <div className="flex items-center justify-center text-green-500 text-2xl pb-10  ">
            RAFIKI FARMERS
          </div>
          <div className=" flex justify-center items-center text-2xl">
            Please Verify Your Email Address
          </div>
          <div className=" flex justify-center items-center text-md pt-10 text-gray-500">
            Please click the link to verify your Email Address
          </div>
          <div className=" flex justify-center items-center text-md  text-gray-500">
           Thank you for work with us . 
          </div>

          <button className='bg-green-500 w-full mt-5 flex justify-center items-center p-5 text-white font-semibold'> Verify Email</button>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail