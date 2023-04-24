import React from 'react'

const About = () => {
  return (
    <>
    <div name="about" className="w-4/5 bg-[#2D2D2D] absolute right-0 text-white my-[124px] py-10">
        <div className="px-8 mx-auto">
            <div className="text-4xl md:text-6xl">
                <p>About</p>
                <div className="block w-[95px] h-[2px] md:h-[3px] mt-[7px] mb-10 bg-[#AA946B]"></div>
            </div>

            <p className="text-lg md:text-xl font-[100]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam.
            </p>

            <p className="text-2xl md:text-3xl mt-10 mb-5">
                Experience
            </p>
            <div className="border border-solid border-[#AA946B]">
                <div className="opacity-75 py-[20px] px-[25px]">
                    <p className="text-lg md:text-xl font-bold">
                        Council Member
                    </p>
                    <p className="my-4 font-[100]">
                        Free & Open Source Software Community of NSBM Green University
                    </p>
                    <p className="text-sm md:text-md font-[100]">
                        Dec 2022 - up-to date
                    </p>
                </div>
            </div>

            <p className="text-2xl md:text-3xl mt-10 mb-5">
                Skills
            </p>
            <div>
                <div>
                    <p>
                        Designing
                    </p>
                    <p>
                        Figma | Adobe XD | Adobe Photoshop
                    </p>
                    <p>
                        Developing
                    </p>
                    <p>
                        GIT | HTML | CSS | C | C# 
                    </p>
                </div>
                <div>
                    <button>
                        <a href="#">Contact Me</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About