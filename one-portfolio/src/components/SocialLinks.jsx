import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaBehance, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <div className="invisible md:visible flex flex-col top-[25%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-[#AA946B] hover:ml-[-10px] duration-300 ml-[-100px]">
          <a href="https://www.linkedin.com/in/lithara-perera/" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-white">
            <>
              LinkedIn <FaLinkedin size={30}/>
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-[#AA946B] hover:ml-[-10px] duration-300 ml-[-100px]">
          <a href="https://www.behance.net/lithara-perera" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-white">
            <>
              Behance <FaBehance size={30}/>
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-[#AA946B] hover:ml-[-10px] duration-300 ml-[-100px]">
          <a href="https://github.com/Lithara" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-white">
            <>
              GitHub <FaGithub size={30}/>
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-[#AA946B] hover:ml-[-10px] duration-300 ml-[-100px]">
          <a href="https://web.facebook.com/lithara.perera.1" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-white">
            <>
              Facebook <FaFacebook size={30}/>
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-[#AA946B] hover:ml-[-10px] duration-300 ml-[-100px]">
          <a href="https://www.instagram.com/lithara.perera/" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-white">
            <>
              Instagram <FaInstagram size={30}/>
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-[#AA946B] hover:ml-[-10px] duration-300 ml-[-100px]">
          <a href="mailto:litharaperera2002@gmail.com" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-white">
            <>
              Email <HiOutlineMail size={30}/>
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-[#AA946B] hover:ml-[-10px] duration-300 ml-[-100px]">
          <a href="/CVtemplate.pdf" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-white">
            <>
              Resume <BsFillPersonLinesFill size={30}/>
            </>
          </a>
        </li>
      </ul>
    </div>
  )
}

/*const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/lithara-perera-5b1b1b1b9/'
    },
    {
      id: 2,
      child: (
        <>
          Behance <FaBehance size={30}/>
        </>
      ),
      href: 'https://www.behance.net/litharaperera'
    },
    {
      id: 3,
      child: (
        <>
          GitHub <FaGithub size={30}/>
        </>
      ),
      href: 'https://www.github.com/litharaperera'
    },
    {
      id: 4,
      child: (
        <>
          Facebook <FaFacebook size={30}/>
        </>
      ),
      href: 'https://www.facebook.com/lithara.perera.7'
    },
    {
      id: 5,
      child: (
        <>
          Instagram <FaInstagram size={30}/>
        </>
      ),
      href: 'https://www.instagram.com/lithara.perera/'
    },
    {
      id: 6,
      child: (
        <>
          Email <HiOutlineMail size={30}/>
        </>
      ),
      href: 'mailto:litharaperera2002@gmail.com'
    },
    {
      id: 7,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: '/CVtemplate.pdf'
    },
  ];

  return (
    <div className="flex flex-col top-[25%] left-0 fixed">
      <ul>

        {links.map((id, child, href) => (
          <li key={id} className="flex justify-between items-center w-40 h-10 px-4 bg-[#AA946B] hover:ml-[-10px] duration-300 ml-[-100px]">
            <a href="" className="flex justify-between items-center w-full text-white">
              {child}
            </a>
          </li>
        ))}

        
      </ul>
    </div>
  )
}*/
export default SocialLinks