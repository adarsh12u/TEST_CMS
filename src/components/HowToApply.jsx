import React from "react";
import { Link } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import { TiArrowRightThick } from "react-icons/ti";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { MdOutlineConfirmationNumber } from "react-icons/md";
const HowToApply = () => {
  return (
    <section className="align-element w-7xl mt-10  gap-5 flex  flex-col md:flex-row  justify-between">
      <div className=" flex flex-col gap-16 w-full md:w-1/2">
        <div className=" flex flex-col gap-2">
            <h1 className="  text-blue-800 font-semibold text-md ">
            INFORMATION
            </h1>
          <h1 className=" text-3xl md:text-4xl font-semibold">
          How to Apply?
          </h1>
        </div>
      
        <div className=" flex flex-col gap-7">
          <div className=" flex w-full gap-12">
            <div className=" w-[15%] md:w-[10%]">

            <div className=" h-20 w-20  rounded-full flex justify-center items-center bg-blue-800 text-white">

            <SiTicktick size={28}  classname=" text-blue-700" color="white"/>
            </div>

            </div>
            <div className="  w-[80%]">
            <h1 className=" text-xl md:text-2xl font-semibold">Register & Enrollment</h1>
                 <p className="  text-base md:text-lg text-gray-600  font-normal">Complete the registration process by paying the amount of registration, and take a screenshot of the successful payment..</p>
            </div>
          </div>
          <div className=" flex w-full gap-12">
            <div className="w-[15%] md:w-[10%]">

            <div className=" h-20 w-20  rounded-full flex justify-center items-center bg-blue-800 text-white">

            <FaBookOpenReader size={28}   classname=" text-blue-700" color="white"/>
            </div>

            </div>
            <div className="  w-[80%]">
            <h1 className=" text-xl md:text-2xl font-semibold">Download & Read Brochure</h1>
                 <p className="text-base md:text-lg text-gray-600  font-normal">Download our Brochure , Read it carefully. All the answers to your questions are provided in the brochure.</p>
            </div>
          </div><div className=" flex w-full gap-12">
            <div className="w-[15%] md:w-[10%]">

            <div className=" h-20 w-20  rounded-full flex justify-center items-center bg-blue-800 text-white">

            <MdOutlineConfirmationNumber size={28}  classname=" text-blue-700" color="white"/>
            </div>

            </div>
            <div className="  w-[80%]">
            <h1 className= " text-xl md:text-2xl font-semibold">Confirmation</h1>
                 <p className="  text-base md:text-lg text-gray-600  font-normal">Send the screenshot of successful payment on WhatsApp (+91-8602000209).</p>
            </div>
          </div><div className=" flex w-full gap-12">
            <div className=" w-[15%] md:w-[10%]">

            <div className=" h-20 w-20  rounded-full flex justify-center items-center bg-blue-800 text-white">

            <MdVerifiedUser size={28}  classname=" text-blue-700" color="white"/>
            </div>

            </div>
            <div className="  w-[80%]">
            <h1 className=" text-xl md:text-2xl font-semibold">Verification</h1>
                 <p className="  text-base md:text-lg text-gray-600  font-normal">As soon as your payment is verified, you will receive details of your assigned Relationship Manager</p>
            </div>
          </div>
        

          
           
                  </div>
      </div>
      <div className="w-full    flex justify-center items-center md:w-1/2">
        <div className=" flex justify-center">
          <img className="  h-3/4 w-3/4 " src="/Educator.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
