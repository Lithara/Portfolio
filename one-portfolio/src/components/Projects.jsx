import React, {useState} from 'react'
import Card from './Card';
import projectData from '../data/projectData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Projects = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
      };

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
            <div>
                <Slider {...settings} className="max-w-7xl mx-auto">
                    {projectData.map((item) => (
                        <Card 
                        name={item.name}
                        image={item.image}
                        url={item.url}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Projects