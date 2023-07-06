import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between w-full h-20 px-4 text-white bg-transparent fixed">
      <div className="md:pl-[100px]"></div>
      <div className="items-center mt-5">
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-10 cursor-pointer capitalize font-regular hover:scale-105 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>

        <div onClick={toggleMobileMenu} className="cursor-pointer z-10 md:hidden">
          {isMobileMenuOpen ? (
            <FaTimes size={25} className="mr-2" />
          ) : (
            <FaBars size={25} />
          )}
        </div>

        {isMobileMenuOpen && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#2D2D2D]">
            <li
              className="px-4 cursor-pointer capitalize py-6 text-3xl font-light"
              onClick={toggleMobileMenu}
            >
              <FaTimes size={25} className="mr-2" />
            </li>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-3xl font-light"
              >
                <a href="#" className="inline-block">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;




