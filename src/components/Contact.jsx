import React, { useRef } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdText } from "react-icons/io";
import { GiModernCity } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id='contact' className='   p-5 md:p-0 w-full md:w-1/2 '>
        
        <div className=' w-full text-center'>
              
              <h1 className=' text-blue text-4xl font-semibold'><span className=' text-[#423383]'>Contact</span>  Us</h1>
            <form 
            // ref={form} onSubmit={sendEmail}
             >
              <div className='w-full  lg:w-3/4 m-auto mt-12  lg:mt-20 flex flex-col  gap-5'>
            
                
                <div className=' flex gap-2 items-center'>
                <FaUserAlt size={20}/>
                  <input type="text" name="name"  className=' rounded-lg  w-full  text-lg font-normal p-2 text-black ' placeholder='Enter your name' />
                </div>
                <div className=' flex gap-2 items-center'>
                  <MdEmail size={20}/>
                  <input type="email" name="email"  className=' rounded-lg w-full  text-lg font-normal p-2 text-black  ' placeholder='Enter your email' />

                </div>
                <div className=' flex gap-2 items-center'>
                   <GiModernCity size={20}/>
                                    <input type="text" name="city"  className=' rounded-lg w-full  text-lg font-normal p-2 text-black  ' placeholder='Enter your city' />

                </div><div className=' flex gap-2 items-center'>
                <FaPhoneAlt size={20}/>
                  <input type="number" name="phone"  className=' rounded-lg w-full  text-lg font-normal p-2 text-black  ' placeholder='Enter your Phone no.' />

                </div>
<div className=' flex gap-2 '>
  <IoMdText className=' mt-4' size={20}/>
<input type='text'   placeholder='Enter your Message' className=' rounded-lg text-lg font-normal  p-3 w-full'></input>

</div>
                  <button  type='submit'  className=' p-2 rounded-lg duration-500 transition-all hover:text-sky-400 border  text-lg font-semibold hover:border-sky-400 hover:bg-slate-900   bg-[#423383] from-sky-400 to-sky-800  text-white'>submit</button>
              </div>
            </form>
          </div>

    </div>
  )
}

export default Contact