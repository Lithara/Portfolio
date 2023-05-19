import React from 'react'

const About = () => {
  return (
    <>
    <div name="about" className="h-screen w-full right-0 relative">
        <div className="mx-auto flex flex-col md:flex-row w-4/5 right-0">
            <div className="px-4 mx-auto">
                <div className="text-4xl md:text-6xl">
                    <p>About</p>
                    <div className="block w-[95px] md:w-[155px] h-[2px] md:h-[3px] mt-[7px] mb-10 bg-[#AA946B]"></div>
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
                    <div className="border border-solid border-[#AA946B]">
                        <div className="opacity-75 py-[20px] px-[25px]">
                            <p className="text-lg md:text-xl font-bold">
                                Designing
                            </p>
                            <p className="mt-2 mb-6 font-[100]">
                                Figma | Adobe XD | Adobe Photoshop
                            </p>
                            <p className="text-lg md:text-xl font-bold">
                                Developing
                            </p>
                            <p className="mt-2 font-[100]">
                                GIT | HTML | CSS | C | C# 
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <a href="mailto:litharaperera2002@gmail.com" target="_blank" rel="noreferrer">
                            <button className="text-[#AA946B] w-fit px-6 py-2 flex items-center bg-transparent text-center border border-solid border-[#AA946B]">
                                <span className="text-lg md:text-xl cursor-pointer hover:scale-105 duration-200">
                                    Contact Me
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About