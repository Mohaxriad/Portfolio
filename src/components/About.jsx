import React from "react"
import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.png"
import Project3 from "../assets/project3.png"
import Project4 from "../assets/project4.png"
import Project5 from "../assets/project5.png"
import Project6 from "../assets/project6.png"

import Javafx from "../assets/javafx.png"

import { TbBrandRedux } from "react-icons/tb";
import { SiVite } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaJava } from "react-icons/fa";



import {
    DiJavascript1,
    DiReact,
    DiHtml5,
    DiCss3,
    DiMongodb,
    DiGithubBadge,
    DiIllustrator } from 'react-icons/di'
    import { FaFigma } from "react-icons/fa";
    import { SiTailwindcss } from "react-icons/si";

const About = () => {
 
    
  

return (
    <div className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center" id="about">
            
            <div className="relative group">
                <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-[#c89116] to-[#6A4D0B] rounded-lg blur opacity-25  group-hover:opacity-100 transition duration-300">

                </div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src={Project1} alt="" />
                </div>

            </div>
            <div className="p-6">
                <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
                <p className="text-gray-300 mb-4">
                As an enthusiastic front-end web developer with more than two years of
                experience, I have a proven ability to create visually 
                appealing and responsive websites.
                </p>
                <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
                <DiHtml5 className="text-orange-600"/>
                <DiCss3 className="text-blue-600"/>
                <SiTailwindcss className="text-pink-600"/>
                <DiJavascript1 className="text-purple-600"/>
                <DiReact className="text-yellow-600"/>
                <DiGithubBadge className="text-blue-500"/>
                <DiIllustrator className="text-green-500"/>
                <FaFigma className="text-red-400"/>
                </div>
            </div>
            <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
                <DiHtml5 className="text-orange-600"/>
                <DiCss3 className="text-blue-600"/>
                <SiTailwindcss className="text-pink-600"/>
                <DiJavascript1 className="text-purple-600"/>
                <DiReact className="text-yellow-600"/>
                <DiGithubBadge className="text-blue-500"/>
                <DiIllustrator className="text-green-500"/>
                <FaFigma className="text-red-400"/>
            </div>

            <div className="relative group md:hidden mt-16">
                <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-[#c89116] to-[#6A4D0B] rounded-lg blur opacity-25  group-hover:opacity-100 transition duration-300">

                </div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src={Project2} alt="" />
                </div>

            </div>


            <div className="p-6">
                <h2 className="text-gray-200 text-3xl font-bold mb-4">Brainy</h2>
                <p className="text-gray-300 mb-4">
                Brainy is a fully responsive e-commerce website designed to provide a seamless shopping experience across all devices. This project involved the complete development of an online store, showcasing a diverse range of products with detailed information including price, size, and descriptions. Key features include comprehensive product listings, an optimized responsive design for both desktop and mobile devices, and a user-friendly shopping cart that allows for easy addition of items and a smooth checkout process.
                </p>
                <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
            
                <SiTailwindcss className="text-pink-600"/>
                <DiJavascript1 className="text-purple-600"/>
                <DiReact className="text-yellow-600"/>
                <DiGithubBadge className="text-blue-500"/>
                <DiIllustrator className="text-green-500"/>
                <TbBrandRedux  className="text-gray-500"/>
                <FaFigma className="text-red-400"/>
                </div>
            </div>
            <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
            <SiTailwindcss className="text-pink-600"/>
                <DiJavascript1 className="text-purple-600"/>
                <DiReact className="text-yellow-600"/>
                <DiGithubBadge className="text-blue-500"/>
                <DiIllustrator className="text-green-500"/>
                <TbBrandRedux  className="text-gray-500"/>
                <FaFigma className="text-red-400"/>
            </div>
            

            <div className="relative group hidden md:block">
                <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-[#c89116] to-[#6A4D0B] rounded-lg blur opacity-25  group-hover:opacity-100 transition duration-300">

                </div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src={Project2} alt="" />
                </div>

            </div>



            <div className="relative group">
                <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-[#c89116] to-[#6A4D0B] rounded-lg blur opacity-25  group-hover:opacity-100 transition duration-300">

                </div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src={Project3} alt="" />
                </div>

            </div>

            <div className="p-6">
                <h2 className="text-gray-200 text-3xl font-bold mb-4">Doclib</h2>
                <p className="text-gray-300 mb-4">
                DocLib is a fully responsive and user-friendly platform that serves as your gateway to a vast digital library of academic information. Users can effortlessly search for scientific articles across various subjects using Elasticsearch for intelligent search capabilities, while moderators can continuously add new articles to keep the library up-to-date. Built with Docker, DocLib ensures a seamless experience across all devices for both researchers and contributors.                </p>
                <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">

                <SiTailwindcss className="text-pink-600"/>
                <SiVite className="text-purple-600"/>
                <DiReact className="text-yellow-600"/>
                <DiGithubBadge className="text-blue-500"/>
                <SiMysql className="text-green-500"/>
                <FaDocker className="text-red-400"/>
                </div>
            </div>

            <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
            <SiTailwindcss className="text-pink-600"/>
                <SiVite className="text-purple-600"/>
                <DiReact className="text-yellow-600"/>
                <DiGithubBadge className="text-blue-500"/>
                <SiMysql className="text-green-500"/>
                <FaDocker className="text-red-400"/>
            </div>


            <div className="relative group  md:hidden mt-16">
                <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-[#c89116] to-[#6A4D0B] rounded-lg blur opacity-25  group-hover:opacity-100 transition duration-300">

                </div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src={Project4} alt="" />
                </div>

            </div>

            <div className="p-6">
                <h2 className="text-gray-200 text-3xl font-bold mb-4">My Desktop Planner</h2>
                <p className="text-gray-300 mb-4">
                "My Desktop Planner" is your go-to solution for streamlined task management on your desktop. Designed for students, professionals, small business owners, remote workers, and anyone seeking optimal organization, this application simplifies daily task management and boosts productivity. Built with Java and JavaFX, it offers a user-friendly interface and customizable features, ensuring you stay on top of your commitments without missing a beat.     </p>
                <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">

                <FaJava className="text-pink-600"/>
                <img src={Javafx} alt="" className="w-12"/>
                
                </div>
            </div>

            <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
            <FaJava className="text-pink-600"/>
                <img src={Javafx} alt="" className="w-12"/>
            </div>

            <div className="relative group hidden md:block">
                <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-[#c89116] to-[#6A4D0B] rounded-lg blur opacity-25  group-hover:opacity-100 transition duration-300">

                </div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src={Project4} alt="" />
                </div>

            </div>

            <div className="relative group">
                <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-[#c89116] to-[#6A4D0B] rounded-lg blur opacity-25  group-hover:opacity-100 transition duration-300">

                </div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src={Project5} alt="" />
                </div>

            </div>

            <div className="p-6">
                <h2 className="text-gray-200 text-3xl font-bold mb-4">Ibtikar</h2>
                <p className="text-gray-300 mb-4">
                Ibtikar leads the way in providing innovative digitalization solutions tailored to Algerian businesses. Leveraging Tailwind CSS and Vite, we deploy cutting-edge technologies to deliver top-tier IT services and solutions, both technically and financially. Our website serves as a testament to our expertise and dedication to digital innovation.</p>
                <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">

                <SiTailwindcss className="text-pink-600"/>
                <SiVite className="text-purple-600"/>
                <DiReact className="text-yellow-600"/>
                
                
                </div>
            </div>
            
            <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
            <SiTailwindcss className="text-pink-600"/>
                <SiVite className="text-purple-600"/>
                <DiReact className="text-yellow-600"/>
            </div>


            <div className="p-6">
                <h2 className="text-gray-200 text-3xl font-bold mb-4">My Portfolio</h2>
                <p className="text-gray-300 mb-4">
                My Personnal Website</p>
                <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">

                <SiTailwindcss className="text-pink-600"/>
                <SiVite className="text-purple-600"/>
                <DiReact className="text-yellow-600"/>
                
                
                </div>
            </div>

            <div className="relative group">
                <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-[#c89116] to-[#6A4D0B] rounded-lg blur opacity-25  group-hover:opacity-100 transition duration-300">

                </div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src={Project6} alt="" />
                </div>

            </div>



    </div>

    
)
}
export default About