import React from 'react'
import ContactImg from "../images/ContactImg.png";

const Contact = () => {
  return (
    <div name="home" className="h-screen w-full right-0 p-4">
       <div className="mx-auto flex flex-col px-4 md:flex-row w-4/5 bg-[#2D2D2D] right-0">
            <div>
                <img src={ContactImg} alt="my profile" className="mx-auto px-4 md:px-10 pb-10 mt-20"/>
            </div>
  
            <div className="text-left px-4 flex flex-col jusitify-center md:py-10 md:mt-20">
                <h1 className="text-white text-4xl font-[300] pb-2 md:text-6xl">
                        Drop me a message below
                </h1>
                <div>
                    <form action="https://getform.io/f/5fc5ebf4-5afe-498b-8e2d-30c0d12c4836" method="POST" className="mt-5 flex flex-col">
                        <input type="text" name="name" className="bg-transparent border border-[#AA946B] text-white text-[16px] md:text-[20px] py-2 px-4 my-2 focus:outline-none" placeholder="Enter your name"/>
                        <input type="email" name="email" className="bg-transparent border border-[#AA946B] text-white text-[16px] md:text-[20px] py-2 px-4 my-2 focus:outline-none" placeholder="Enter your email"/>
                        <textarea name="messsage" rows="10" className="bg-transparent border border-[#AA946B] text-white text-[16px] md:text-[20px] py-2 px-4 my-2 focus:outline-none" placeholder="Enter your message"></textarea>
                        <div className="pt-8 pb-10">
                            <button className="text-[#2D2D2D] w-fit px-6 py-2 flex items-center bg-[#AA946B] text-center">
                                <span className="text-lg md:text-xl cursor-pointer hover:scale-105 duration-200">Let's Work</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact