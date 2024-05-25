import React, { useState } from "react";
import Footer from "./Footer";
import { GiLaptop } from "react-icons/gi";
import { BsClockHistory } from "react-icons/bs";
import { BiRevision } from "react-icons/bi";
import AddressDetails from "./AddressDetails";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import Map from "./Map";
import Payment from "./Payment";

const link=  [
  { name:"Home", link:"/" },
  { name:"About", link:"/about" },
  { name:"Blogs", link:"/blogs" },
 
  { name:"Courses", link:"/courses" },
  { name:"SignIn", link:"/Signin" },
  { name:"SignUp", link:"/Signup" },
]
const About = () => {
  return (

    <div>
 <div className=' md:hidden flex   h-[40px] align-element  items-center mt-3'>
           <div className=' flex  gap-16  overflow-x-scroll  scrollbar-thumb-slate-200
               '>
           {
       link.map((val,  i)=>{
       return val.link.includes('#') ? <a href={val.link} > <p onClick={()=>setOpen(!open)} className=' text-base   text-black font-normal'>{val.name}</p> </a> :
       <Link key={i}  to={val.link}> <p onClick={()=>setOpen(!open)} className=' text-base   text-black font-normal'>{val.name}</p></Link>})
     }
           </div>
      </div>
    <div className="   flex flex-col gap-20">
     
      <div className=" bg-[#423383] h-52   flex  flex-col  items-center justify-center ">
        <h1 className=" text-2xl font-bold text-white">About Us</h1>
      </div>

      <div className=" w-full flex flex-col justify-center items-center gap-10">
        <div className=" flex flex-col md:flex-row  gap-10">
          <img
            src="/a1.jpg"
            alt=""
            className=" object-cover dd  h-52 w-52 md:h-96 md:w-96"
            />
          <img
            src="/a2.jpg"
            alt=""
            className=" object-cover ddd h-52 w-52 md:h-96 md:w-96"
            />
        </div>
        <div className=" flex flex-col md:flex-row gap-10">
          <img
            src="/a3.jpg"
            alt=""
            className="  object-cover dddd h-52 w-52 md:h-96 md:w-96"
            />
          <img
            src="/a4.jpg"
            alt=""
            className=" object-cover ddddd h-52 w-52 md:h-96 md:w-96"
            />
        </div>
      </div>

      <div className=" align-element">
        <div className="  flex flex-col justify-center items-center">
          <h1 className=" text-xl md:text-3xl font-semibold mt-10">
            WELCOME TO TIA-SHARE MARKET KI PAATHSHAALA{" "}
          </h1>
          <div className=" hidden md:block h-1 w-20 mt-1 bg-[#423383] rounded-lg"></div>
        </div>
        <p className="  mt-10  font-medium text-slate-800">
          Welcome to the leading and one of the best Stock Market Institutes
          that offers you the Best Offline and Online Stock Market courses for
          financial stability and to impart deep knowledge of the stock market
          and trading. It is an initiative for every generation keenly
          interested in becoming financially independent. Our Stock Market
          courses cover everything related to the stock market, from the basics
          to the advanced level.
        </p>

        <p className="  mt-10  font-medium text-slate-800">
          Trade India with Atin (TIA)" is the leading Stock Market Institute in
          Indore, India's No.1 cleanest city. We provide a smooth and easy
          learning environment for our students by offering Lifetime Mentorship
          Batches, continuous support, and various advanced programs to navigate
          current price actions. TIA acts as a bridge between your share market
          knowledge and successful earnings. The institute offers both offline
          and online share market classes to assist individuals in achieving
          their financial goals.
        </p>
        <p className="  mt-10  font-medium text-slate-800">
          At TIA, our mission is to equip you with the skills and confidence
          needed to thrive in the stock market. Our comprehensive curriculum,
          experienced instructors, and state-of-the-art resources ensure that
          you gain a thorough understanding of market dynamics and trading
          strategies. Whether you are a beginner or an experienced trader
          looking to refine your skills, TIA provides personalized guidance and
          support tailored to your learning needs.
        </p>
        <div className=" flex flex-col md:flex-row  md:justify-between mt-5">
          <div className=" flex flex-wrap gap-10   mt-5">
            <div className=" flex gap-2 w-full hover:bg-slate-300 transition-all duration-150 md:w-auto justify-center items-center bg-[#423383] p-2 rounded-lg text-white text-base font-medium ">
              <BiRevision /> <h1>Revision Classes</h1>
            </div>
            <div className=" flex hover:bg-slate-300 transition-all duration-150 gap-2  w-full md:w-auto justify-center items-center bg-[#423383] p-2 rounded-lg text-white text-base font-medium">
              <BsClockHistory />
              <h1>3 Months Support</h1>
            </div>
            <div className="hover:bg-slate-300 transition-all duration-150 flex gap-2  w-full md:w-auto justify-center items-center bg-[#423383] p-2 rounded-lg text-white text-base font-medium">
              <GiLaptop />
              <h1>Trading System</h1>
            </div>
          </div>
          <div className=" mt-5">
            <button className="hover:bg-slate-300 transition-all duration-150 w-full bg-[#423383] text-white p-3 px-5 rounded-lg text-lg font-medium">
              {" "}
              <a href="#conts"> Enroll Now </a>{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="align-element flex flex-col items-center mt-20">
        <h1 className=" text-center font-semibold text-2xl">Founder of TIA</h1>
        <div className=" h-1  w-16 mt-1 bg-[#423383] rounded-lg"></div>

        <div className=" align-element flex flex-col md:flex-row w-full items-center justify-center  gap-6">
          <div className=" w-full md:w-[50%]">
            <p className=" text-md mt-10  font-medium">
              Atin Agrawal, the visionary founder of TIA Coaching Classes, is a
              seasoned stock market expert and dedicated educator who has
              revolutionized stock market education. With a deep passion for the
              financial markets and a commitment to empowering individuals, Atin
              has created a platform that seamlessly blends theoretical
              knowledge with practical application.{" "}
            </p>
            <p className=" text-md mt-10  font-medium">
              With over two decades of hands-on experience in the stock market,
              Atin Agrawal's journey is a testament to the power of
              perseverance, continuous learning, and strategic thinking.
              Starting as a novice investor, Atin navigated the complexities of
              the stock market, gradually mastering the art and science of
              trading and investing. His extensive experience encompasses
              various facets of the financial markets, including equities,
              derivatives, commodities, and forex trading.
            </p>
            <p className=" text-md mt-10  font-medium">
              Atin's educational philosophy is rooted in the belief that
              financial literacy is crucial for personal and professional
              growth. He has dedicated his career to demystifying the stock
              market for aspiring traders and investors. By combining deep
              market insights with an engaging teaching style, Atin has
              successfully guided thousands of students towards achieving their
              financial goals.
            </p>
          </div>
          <div className=" w-full md:w-[50%] flex justify-center items-center ">
            <img
              className=" h-[90%] w-[90%] object-cover"
              src="/founder.jpg"
              alt=""
              />
          </div>
        </div>
      </div>

      {/* <div className=" align-element md:w-[80rem] flex flex-col md:flex-row gap-10">
        <div className=" flex flex-col gap-7 md:w[50%]  items-center">
          <h1 className=" text-sm text-[#423383] font-medium ">
          WHY CHOOSE US
          </h1>
          <h1 className=" text-xl font-bold">
          What Makes Us Different from the Competiton?
          </h1>
          <p className="  font-medium text-slate-800">
          We focus on helping you understand markets better & learn to analyze
          charts on your own & not just sell you a strategy that is not enough
          on its own. We help you design your Trading Plan, which is crucial;
          therefore, you will always have an Entry Plan & Exit Plan. Being
          Unbiased in the Stock Market is a Blessing; always have a Neutral
          Mindset. A calm mind continuously learns to keep the peace even in a
          situation of chaos, "RESERVE YOUR CHAOS".
          </p>
          <p className="  font-medium text-slate-800">
          Not a member yet?{" "}
          <span className=" text-red-500"> Register now</span>
          </p>
          </div>
          
          <div className=" md:w-[50%]">
          <ScrollTrigger
          onEnter={() => setcounter(true)}
          onExit={() => setcounter(false)}
          >
          <div>
          <div>
          {" "}
          <div className=" text-center">
                  <h1 className=" text-[#423383] font-bold text-4xl">
                    {counter && (
                      <CountUp start={0} end={40} duration={2} delay={0} />
                    )}
                    +{" "}
                    </h1>
                    <h1 className="text-[#423383] font-semibold text-xl">
                    {" "}
                    Courses{" "}
                    </h1>
                    </div>
                    </div>
                    <div>
                    {" "}
                    <div className=" text-center">
                    <h1 className=" text-[#423383] font-bold text-4xl">
                    {counter && (
                      <CountUp start={0} end={4000} duration={2} delay={0} />
                    )}
                    +{" "}
                  </h1>
                  <h1 className="text-[#423383] font-semibold text-xl">
                  {" "}
                  Student Mentored{" "}
                  </h1>
                </div>
                </div>
                </div>
                <div>
                <div>
                {" "}
                <div className=" text-center">
                <h1 className=" text-[#423383] font-bold text-4xl">
                    {counter && (
                      <CountUp start={0} end={4.2} duration={3} delay={0} />
                    )}
                    .6{" "}
                    </h1>
                    <h1 className="text-[#423383] font-semibold text-xl">
                    {" "}
                    Google Rating{" "}
                  </h1>
                </div>
                </div>
              <div>
                {" "}
                <div className=" text-center">
                <h1 className=" text-[#423383] font-bold text-4xl">
                {counter && (
                  <CountUp start={0} end={10000} duration={3} delay={0} />
                )}
                +
                </h1>
                <h1 className="text-[#423383] font-semibold text-xl">
                {" "}
                Session Finished{" "}
                </h1>
                </div>
                </div>
                </div>
                </ScrollTrigger>
                </div>
              </div> */}

      <div
        id="conts"
        className=" align-element w-full   mt-10 flex flex-col md:flex-row justify-between"
        >
        <AddressDetails />
        <Contact />
      </div>
      <div>

  <Map/> 
      </div>
      <div className=" border-t-2">
        <Footer />
      </div>
    </div>
        </div>
  );
};

export default About;
