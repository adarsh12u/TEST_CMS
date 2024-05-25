import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { SiMinutemailer } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
const AddressDetails = () => {
  return (
    <div className="  flex  flex-col w-full md:w-1/2  gap-12">
      <div className=" flex flex-col gap-3">
        <h1 className=" text-4xl font-semibold text-[#423383]">Get in touch</h1>
        <p className=" text-base font-normal md:text-lg">
          Have any queries? or want to know more? Contact us and we will be
          happy to help.
        </p>
      </div>
      <div className=" flex w-full items-center gap-6">
        <div className=" w-[15%] md:w-[10%]">
          <div className=" h-16 w-16  rounded-full flex justify-center items-center bg-blue-800 text-white">
            <CiLocationOn size={25} color="white" cla />
          </div>
        </div>
        <div className=" ">
          <h1 className=" text-xl md:text-2xl font-medium ">Our Address</h1>
          <p className="text-sm font-normal md:text-lg">
            1102,Block-A,Prakrati Corporate Opposite Shani Mandir Malwa Mill Indore (M.P)
          </p>
        </div>
      </div>
      <div className=" flex w-full items-center gap-6">
        <div className=" w-[15%] md:w-[10%]">
          <div className=" h-16 w-16  rounded-full flex justify-center items-center bg-blue-800 text-white">
            <SiMinutemailer size={25} color="white" cla />
          </div>
        </div>
        <div>
          <h1 className=" text-xl md:text-2xl font-medium ">E-mail</h1>
          <p className="text-sm font-normal md:text-lg">
          General Enquiry: atinagrrawal@gmail.com
          </p>
        </div>
      </div>{" "}
      <div className=" flex w-full items-center gap-6">
        <div className=" w-[15%] md:w-[10%]">
          <div className=" h-16 w-16  rounded-full flex justify-center items-center bg-blue-800 text-white">
            <IoMdContact size={25} color="white" cla />
          </div>
        </div>
        <div>
          <h1 className=" text-xl md:text-2xl font-medium ">Contact</h1>
          <p className=" text-sm font-normal md:text-lg">
          Mobile: +91 8602000209
          </p>
        </div>
      </div>{" "}
      <div className=" flex w-full items-center gap-6">
        <div className=" w-[15%] md:w-[10%]">
          <div className=" h-16 w-16  rounded-full flex justify-center items-center bg-blue-800 text-white">
            <FaRegClock size={25} color="white" cla />
          </div>
        </div>
        <div>
          <h1 className=" text-xl md:text-2xl font-medium ">Hours of Operation</h1>
          <p className=" text-sm font-normal md:text-lg">
          Everyday : 10:00 AM - 07:00 PM IST
          </p>
        </div>
      </div>
     
    </div>
  );
};

// Get in Touch
// Have any queries? or want to know more?
// Contact us and we will be happy to help.

// Our Address
// Office No.-301, H-74, Sec-63, Noida 201301

// E-mail
// General Enquiry: info@boomingbulls.com

// Business Enquiry: deals@boomingbulls.com

// Contact
// Mobile: + 91 81302-45100

// Hours of Operation
// Everyday : 10:00 AM - 07:00 PM IST
export default AddressDetails;
