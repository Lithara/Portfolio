import React from "react";

const Card = ({name, image, url}) => {
  return (
    <div className="w-[250px] md:w-[350px] h-[400px] md:h-[550px] mx-auto bg-transparent border border-[#AA946B] text-white flex flex-col justify-evenly items-center my-10">
      <div>
        <span className="text-lg md:text-2xl font-[100] text-center px-8 justify-center items-center">{name}</span>
      </div>
      <div>
        <img src={image} alt=""/>
      </div>
      <div>
        <a href={url} target="_blank" rel="noreferrer">
            <button className="text-[#AA946B] w-fit px-6 py-2 flex items-center bg-transparent text-center border border-solid border-[#AA946B]">
                <span className="text-lg md:text-xl cursor-pointer hover:scale-105 duration-200">View Project</span>
            </button>
        </a>
      </div>
    </div>
  );
};

export default Card;