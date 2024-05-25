import React from "react";
import { Link } from "react-router-dom";
import { TiArrowRightThick } from "react-icons/ti";
const Apply = () => {
  return (
    <section className="align-element w-7xl mt-10  gap-5 flex  flex-col md:flex-row  justify-between">
      <div className=" flex flex-col gap-10 w-full md:w-1/2">
        <div className=" flex flex-col gap-2">
            <h1 className="  text-blue-800 font-semibold text-md ">
            BENEFITS OF ENROLLING IN OUR COURSE
            </h1>
          <h1 className=" text-3xl md:text-4xl font-semibold">
            JOIN THE MOST SIMPLIFIED TRADING COURSE FROM TIA (TRADE INDIA WITH ATIN)
          </h1>
        </div>
        <div className="">
          <p className="  text-base md:text-lg font-semibold md:font-medium">
            {" "}
            our trading course can provide you to learn about the
            stock market from the basics, where you get to learn how does a
            market operates to how can you earn simply by putting all the
            logical thinking into the action. Our simplified strategies will
            precisely guide you on understanding earning and achieving financial
            independence efficiently and effectively
          </p>
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" flex gap-2">
            <TiArrowRightThick size={28}  classname=" text-blue-700" color="darkblue"/>
            <h1 className=" text-lg font-semibold">Revision Classes</h1>
          </div>
          <div className=" flex gap-2">
            <TiArrowRightThick size={28}  classname=" text-blue-700" color="darkblue"/>
            <h1 className=" text-lg font-semibold">5 Star Trading Setup</h1>
          </div>
          <div className=" flex gap-2">
            <TiArrowRightThick size={28}  classname=" text-blue-700" color="darkblue"/>
            <h1 className=" text-lg font-semibold">Booming Bulls Facebook Stock Selection Group</h1>
          </div>
          <div className=" flex gap-2">
            <TiArrowRightThick size={28}  classname=" text-blue-700" color="darkblue"/>
            <h1 className=" text-lg font-semibold">Trading System Development</h1>
          </div>
          <div className=" flex gap-2">
            <TiArrowRightThick size={28}  classname=" text-blue-700" color="darkblue"/>
            <h1 className=" text-lg font-semibold">Trading Psychology</h1>
           </div>
          <div className=" flex gap-2">
            <TiArrowRightThick size={28}  classname=" text-blue-700" color="darkblue"/>
            <h1 className=" text-lg font-semibold">Ultimate Trader's Checklist</h1>
          </div>
        </div>
      </div>
      <div className="w-full    flex justify-center items-center md:w-1/2">
        <div className=" flex justify-center">
          <img className="  w-3/4 h-3/4 " src="/market.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Apply;
