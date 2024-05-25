import React from "react";
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";

const Footers = () => {

  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid  pt-8   px-8 pb-8 w-full grid-cols-1  gap-10 justify-between  md:grid-cols-4">
          <div className=" flex flex-col gap-5 justify-center items-center">
            <div>
              <h1 className=" text-white text-2xl font-medium">
                Trade India With Atin
              </h1>
            </div>
            <div className=" flex gap-2">
              <div className=" bg-slate-700 rounded-lg p-2">
                <Link to={'https://t.me/TRADEINDIAWITHATINTELEGRAMLINK'}>
                  <FaTelegram size={25} color="white" />
                </Link>
              </div>
              <div className=" bg-slate-700 rounded-lg p-2">
                <Link to={'https://www.instagram.com/share_market_indore?utm_source=qr&igsh=MWoyNGw3MGllNms4Nw%3D%3D'}>
                  <FaSquareInstagram size={25} color="white" />
                </Link>
              </div>
              <div className=" bg-slate-700 rounded-lg p-2">
                <Link>
                  <FaYoutube size={25} color="white" />
                </Link>
              </div>
              <div className=" bg-slate-700 rounded-lg p-2">
                <Link>
                  <FaFacebook size={25} color="white" />
                </Link>
              </div>
              <div className=" bg-slate-700 rounded-lg p-2">
                <Link>
                  <IoLogoLinkedin size={25} color="white" />
                </Link>
              </div>
            </div>

            <div>
              <img src="/tia.jpg" className=" rounded-full w-44" alt="" />
            </div>
          </div>

<div className=" md:hidden flex justify-between">
<div className="flex flex-col gap-5  md:items-center">
            <FooterTitle title="Contact " className=" text-xl  text-white" />
            <FooterLinkGroup col>
              <Link className=" text-base  font-light  text-slate-100" to="https://www.instagram.com/share_market_indore?utm_source=qr&igsh=MWoyNGw3MGllNms4Nw%3D%3D">Instagram</Link>
              <Link className=" text-base  font-light  text-slate-100" to="https://t.me/TRADEINDIAWITHATINTELEGRAMLINK">Telegram</Link>
              <Link className=" text-base  font-light  text-slate-100" >Facebook</Link>
              <Link className=" text-base  font-light  text-slate-100" >Youtube</Link>
            </FooterLinkGroup>
          </div>

          <div className="flex flex-col gap-5 md:items-center">
            <FooterTitle title="legal policies" className=" text-xl  text-white" />
            <FooterLinkGroup col>
              <Link className=" text-base  font-light  text-slate-100" to="/privacyPolicy">Privacy Policy</Link>
              <Link className=" text-base  font-light  text-slate-100" >Licensing</Link>
              <Link className=" text-base  font-light  text-slate-100" to="/termsandconditions">Terms &amp; Conditions</Link>
            </FooterLinkGroup>
          </div>
</div>
          <div className=" hidden md:flex flex-col gap-5  md:items-center">
            <FooterTitle title="Contact " className=" text-xl  text-white" />
            <FooterLinkGroup col>
              <Link className=" text-base  font-light  text-slate-100" to="https://www.instagram.com/share_market_indore?utm_source=qr&igsh=MWoyNGw3MGllNms4Nw%3D%3D">Instagram</Link>
              <Link className=" text-base  font-light  text-slate-100" to="https://t.me/TRADEINDIAWITHATINTELEGRAMLINK">Telegram</Link>
              <Link className=" text-base  font-light  text-slate-100" >Facebook</Link>
              <Link className=" text-base  font-light  text-slate-100" >Youtube</Link>
            </FooterLinkGroup>
          </div>

          <div className=" hidden md:flex flex-col gap-5 md:items-center">
            <FooterTitle title="legal policies" className=" text-xl  text-white" />
            <FooterLinkGroup col>
              <Link className=" text-base  font-light  text-slate-100" to="/privacyPolicy">Privacy Policy</Link>
              <Link className=" text-base  font-light  text-slate-100" to="/termsandconditions">Terms &amp; Conditions</Link>
            </FooterLinkGroup>
          </div>

          <div className=" flex flex-col gap-5  ">
            <FooterTitle title="Address" className=" text-xl  text-white" />
             <div className=" flex flex-col gap-3">
                 <div className=" flex gap-2"> <CiLocationOn  className="  min-w-6" size={25} color="white" /><h1 className=" text-base  font-light  text-slate-100"> 1102,Block-A,Prakrati Corporate Opposite Shani Mandir Malwa Mill Indore (M.P)</h1></div>
                 <div className=" flex gap-2"> <SiMinutemailer  className="  min-w-6" size={25} color="white" /><h1 className=" text-base  font-light  text-slate-100">atinagrrawal@gmail.com</h1></div>
                 <div className=" flex gap-2"><IoMdContact  className="  min-w-6" size={25} color="white" /><h1 className=" text-base  font-light  text-slate-100">+91 8602000209</h1></div>
             </div>
          </div>

          
        </div> 
 
        {/* nichla */}

        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright  by="Trade India with Atin All Rights Reserved" year={2024} className="  text-white  text-base md:text-lg  font-normal"  />
          {/* <div className=" flex gap-2 justify-center">
              <div className=" bg-slate-700 rounded-lg p-2">
                <Link to={'https://t.me/TRADEINDIAWITHATINTELEGRAMLINK'}>
                  <FaTelegram size={25} color="white" />
                </Link>
              </div>
              <div className=" bg-slate-700 rounded-lg p-2">
                <Link to={'https://www.instagram.com/share_market_indore?utm_source=qr&igsh=MWoyNGw3MGllNms4Nw%3D%3D'}>
                  <FaSquareInstagram size={25} color="white" />
                </Link>
              </div>
              <div className=" bg-slate-700 rounded-lg p-2">
                <Link>
                  <FaYoutube size={25} color="white" />
                </Link>
              </div>
              <div className=" bg-slate-700 rounded-lg p-2">
                <Link>
                  <FaFacebook size={25} color="white" />
                </Link>
              </div>
              <div className=" bg-slate-700 rounded-lg p-2">
                <Link>
                  <IoLogoLinkedin size={25} color="white" />
                </Link>
              </div>
            </div> */}

            <div>
                <a href="https://mahat.in/">
                   <h1 className=" text-center text-white">Developed By Mahat Technology</h1>
                  </a>
            </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
