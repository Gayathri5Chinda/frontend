
// import styled from "styled-components";

// const footer = styled.h1`
//   font-family: 'Neue';
//   font-optical-sizing: auto;
//   font-weight: 600;
// `;

import { FaTelegram, FaReddit, FaTwitter } from "react-icons/fa";
export const Footer1 = () => {
  return (
    <footer id="footer" className="bg-[#071624] grid grid-cols-8 text-gray-400 py-32 font-family: 'Neue'">
      
      <div className=" col-span-2 justify-normal pl-24">
        <img className="w-[10rem] h-[10rem]" src={'/public/footlog.png'} alt="Logo" />
      </div>
      <div className="pt-16 pl-24 space-x-20 col-span-4 mt-3 md:mt-0 text-2xl font-bold">
        <a href="#about" className="text-white hover:text-yellow-400 transition-colors">
          About Us
        </a>
        <a href="#roadmap" className="text-white hover:text-yellow-400 transition-colors">
          Roadmap
        </a>
        <a href="#faqs" className="text-white hover:text-yellow-400 transition-colors">
          FAQs
        </a>
        <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">
          Contact Us
        </a>
      </div>
      <div className="flex col-span-2 space-x-4 mt-3 md:mt-0">
         <div className="grid grid-rows-2 pl-10">
         <div>
          <span className="text-white font-bold hover:text-yellow-400 text-4xl transition-colors">
            Contact <span className="text-yellow-500">Us</span>
          </span>
        </div>
        <div className="grid grid-cols-3 justify-center ">
          <a href="#telegram" className="text-white pr-10 hover:text-yellow-400 text-4xl transition-colors">
            <FaTelegram />
          </a>
          <a href="#reddit" className="text-white hover:text-yellow-400 text-4xl transition-colors">
            <FaReddit />
          </a>
          <a href="#twitter" className="text-white hover:text-yellow-400 text-4xl transition-colors">
            <FaTwitter />
          </a>
        </div>
         </div>
      </div>
    </footer>
    )

  };


  