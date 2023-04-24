import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import LPlogo from '../images/LPlogo.png'

const NavBar = () => {

    const [nav, setNav] = useState(false);
    
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'Contact'
        }
    ]

  return (
    <div className="flex justify-between w-full h-20 px-4 text-white bg-transparent fixed">
        
        <div>
            <img src={LPlogo} width="30"/>
        </div>
        <div className="items-center mt-5">
            <ul className="hidden md:flex">
                {links.map(({id, link}) => (
                    <li key={id} className="px-10 cursor-pointer capitalize font-regular hover:scale-105 duration-200">
                        {link}
                    </li>
                ))}
            </ul>

            <div onclick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
            {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#2D2D2D]">
                    {links.map(({id, link}) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl font-light">
                            {link}
                        </li>
                    ))}
                </ul>
            )}   
        </div>
    </div>
  );
};

export default NavBar