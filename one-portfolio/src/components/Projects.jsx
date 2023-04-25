import React, {useState} from 'react'

import UI01 from "../images/UI01.png";
import UI02 from "../images/UI02.png";
import UI03 from "../images/UI03.png";
import UI04 from "../images/UI04.png";



const Projects = () => {

  return (
    <div>
        <div name="about" className="w-4/5 bg-[#2D2D2D] absolute right-0 text-white my-[1100px] py-20">
            <div className="px-8 mx-auto mb-5">
                <div className="text-4xl md:text-6xl">
                    <p>Projects</p>
                    <div className="block w-[123px] md:w-[203px] h-[2px] md:h-[3px] mt-[7px] mb-10 bg-[#AA946B]"></div>
                </div>

                <p className="text-lg md:text-xl font-[100]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Projects