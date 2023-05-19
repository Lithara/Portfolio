import React from 'react'
import HomeImg from "../images/HomeImg.png";


const Home = () => {
  return (
    <>
    <div>
        <div name="home" className="h-screen w-full right-0">

          <div className="mx-auto flex flex-col md:flex-row w-4/5 right-0">
                
                <div>
                    <img src={HomeImg} alt="my profile" className="mx-auto px-4 md:px-10 pb-10 mt-20"/>
                </div>
            
                <div className="text-left px-4 flex flex-col jusitify-center md:py-10 md:mt-20">
                    <h1 className="text-white text-4xl font-[300] pb-2 md:text-6xl">
                        Lithara Perera
                    </h1>
                    <h5 className="text-[#AA946B] text-2xl md:text-4xl pb-5">
                        UI / UX Designer
                    </h5>
                    <p className="text-white text-lg md:text-xl font-[100] pb-10">
                        Welcome to my page. I’m a Software Engineering undergraduate 
                        who’s looking forward to work with UI/UX. 
                    </p>
                    <div className="pb-10">
                        <a href="/CVtemplate.pdf" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-white">        
                            <button className="text-[#2D2D2D] w-fit px-6 py-2 flex items-center bg-[#AA946B] text-center">
                                <span className="text-lg md:text-xl cursor-pointer hover:scale-105 duration-200">
                                    Download CV
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

export default Home