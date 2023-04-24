import React from 'react'

import UI01 from "../images/UI01.png";
import UI02 from "../images/UI02.png";
import UI03 from "../images/UI03.png";
import UI04 from "../images/UI04.png";

import {SlArrowLeft, SlArrowRight} from "react-icons/sl";

const Projects = () => {

  return (
    <div>
        <div name="about" className="w-4/5 bg-[#2D2D2D] absolute right-0 text-white my-[1100px] py-20">
            <div className="px-8 mx-auto">
                <div className="text-4xl md:text-6xl">
                    <p>Projects</p>
                    <div className="block w-[95px] h-[2px] md:h-[3px] mt-[7px] mb-10 bg-[#AA946B]"></div>
                </div>

                <p className="text-lg md:text-xl font-[100]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam.
                </p>
            </div>

            <div className="p-8">
                <div className="justify-center items-center text-center bg-transparent border border-solid border-[#AA946B]">
                    <div className="text-lg md:text-xl font-[100] mt-4">
                        <span className="px-4">
                            Restaurant Website UI Design
                        </span> 
                    </div>

                    <div>
                        <img src={UI01} className="mt-4"/>
                        
                        
                    </div>
                     
                    <div className="my-7 justify-center items-center flex">
                        <button className="text-[#AA946B] w-fit px-6 py-2 flex items-center bg-transparent text-center border border-solid border-[#AA946B]">
                            <span className="text-lg cursor-pointer hover:scale-105 duration-200">
                                View Project
                            </span>
                        </button>
                    </div>
                </div>
                <div className="just-between">
                    <div className="absolute left-5 text-2xl rounded-full py-4 text-[#AA946B] cursor-pointer ml-3">
                        <SlArrowLeft size={30}/>
                    </div>
                    <div className="absolute right-5 text-2xl rounded-full py-4 text-[#AA946B] cursor-pointer mr-3">
                        <SlArrowRight size={30}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects