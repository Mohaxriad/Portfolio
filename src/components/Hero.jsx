import React from "react"
import { TypeAnimation } from "react-type-animation"
import Pic from "../assets/Riad'sPicture.svg"
const Hero = () => {
    
        const handleButtonClick = () => {
          window.open('https://github.com/Mohaxriad');
        };
    
  

return (
    
<div className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-4">
    <div className="max-w-[800px]">
        <p className="text-gray-200 md:text-6xl text-3xl tracking-tight">
            Hey,I AM <br />
            <span>  RIAD Merabet</span> <br />
            <TypeAnimation sequence={["Dvelopper",1000,"Webdesigner",1000,"Front-end Junior",1000]} speed={50} repeat={Infinity} className="font-bold italic" />
        </p>
        <h2 className="text-gray-300">with 2+ years of experience</h2>
        <div className="flex flex-row gap-4 mb-4 md:mb-0">
            <button className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-blod text-gray-200 w-[50%]  mt-6 p-2 bg-gradient-to-r from-[#c89116] via-[#6A4D0B] to-[#423007] rounded-xl">Download CV</button>
            <button className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-[50%] mt-6 p-2 border border-gray-400 rounded-xl" onClick={handleButtonClick}>View Work</button>
        </div>
    </div>
    <img src={Pic} alt="Riad's Picture" className="w-[600px] md:w-[700px] lg:ml-12 lg:mt-[-100px]" />

   
</div>
    
)
}
export default Hero