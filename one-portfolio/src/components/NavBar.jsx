import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import LPlogo from '../images/LPlogo.png'
//import { Link } from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false);
    
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Projects'
        },
        {
            id: 4,
            link: 'Contact'
        }
    ]

  return (
    <div className="flex justify-between w-full h-20 px-4 text-white bg-transparent fixed">
        
        <div className="md:pl-[100px]">
            
        </div>
        <div className="items-center mt-5">

            <ul className="hidden md:flex">
                {links.map(({id, link}) => (
                    <li key={id} className="px-10 cursor-pointer capitalize font-regular hover:scale-105 duration-200">
                        {link}
                    </li>
                ))}
            </ul>

            <div onclick={() => setNav(!nav)} className="cursor-pointer z-10 md:hidden">
            {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-4/5 h-screen bg-[#2D2D2D]">
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