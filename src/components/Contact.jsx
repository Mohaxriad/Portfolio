import React, { useState } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Contact = () => {
   

return (
<div className='px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center mt-16' id="contact">


    <div>
        <ul>
            <li className='flex'> <AiFillLinkedin className='w-[70px] h-auto text-gray-300' /> 
            <div className='m-5'>
                <h3 className='text-lg font-bold text-gray-200' >Contact</h3>
                <p className='text-gray-400'>Mobile: 0799099339</p>
                <p className='text-gray-400'>Email: lm_merabet@esi.dz</p>
            </div>
              </li>

              <li className='flex'>
                <AiFillGithub className='w-[70px] h-auto text-gray-300' />
                <div className='m-5'>
                    <h3 className='text-lg font-bold text-gray-200'>Working Hours</h3>
                    <p className='text-gray-400'>Sun-Thurs 09am-5pm</p>
                </div>
              </li>
        </ul>

      
    </div>
    <form action="https://getform.io/f/jbwxexra" method='POST' className='max-w-6xl p-5 md:p-12' id="form">
            <input  
            type="text"
            id="name"
            placeholder='Your Name ...'
            name="name"
            className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
            />
            <input 
            type="email"
            id="email"
            placeholder='Your Email ...'
            name="email"
            className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'  />
            <textarea 
            type="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder='Your Message ...'
            name="email"
            className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'/>
            <button type='submit' className='bg-gradient-to-r from-[#c89116] via-[#6A4D0B] to-[#423007] w-full py-3 rounded-md text-gray-200 font-semibold text-xl '>Send Message</button>
        </form>
</div>
    
)
}
export default Contact