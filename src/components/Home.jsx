import React from 'react'
import { Link } from 'react-router-dom'

import { Outlet } from 'react-router-dom'


import Nav from './Nav'
import { FaFacebook, FaPhoneAlt, FaTelegram, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaSquareInstagram } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io'

const Home = () => {
    return (
        <div 
        >
          <div className=' '>

            <div className='hidden md:block'>
                  <nav className=' bg-[#423383] w-full h-8  flex  justify-around'>
                       <div className=' flex gap-8'>
                      <p className=' text-red-50 flex items-center gap-1 font-semibold text-base'><MdEmail/> atinagrrawal@gmail.com</p>
                      <p className=' text-red-50 gap-1 flex items-center'> <FaPhoneAlt/> +91 8602000209 </p>
                       </div>
                       <div className=" flex gap-2">
              <div className="  rounded-lg p-2">
                <Link to={'https://t.me/TRADEINDIAWITHATINTELEGRAMLINK'}>
                  <FaTelegram size={20} color="white" />
                </Link>
              </div>
              <div className="  rounded-lg p-2">
                <Link to={'https://www.instagram.com/share_market_indore?utm_source=qr&igsh=MWoyNGw3MGllNms4Nw%3D%3D'}>
                  <FaSquareInstagram size={20} color="white" />
                </Link>
              </div>
              <div className="  rounded-lg p-2">
                <Link>
                  <FaYoutube size={20} color="white" />
                </Link>
              </div>
              <div className="  rounded-lg p-2">
                <Link>
                  <FaFacebook size={20} color="white" />
                </Link>
              </div>
              <div className="  rounded-lg p-2">
                <Link>
                  <IoLogoLinkedin size={20} color="white" />
                </Link>
              </div>
            </div>
                  </nav>
            </div>
<div className='  '>
     <div className=' border-b'>
                    <Nav/>
                </div>
    
                <section className=''>
                      <Outlet/>
                </section>
          </div>
     </div>                
        </div>
      )
}

export default Home