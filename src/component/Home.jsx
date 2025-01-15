import React from 'react'
import Navigation from './common_component/navigation';
import image from '../assets/Home_banner.png';
import production from '../assets/production.svg';
import manufacturing from '../assets/manufacturing.svg';
import arrow from '../assets/arrow.svg';
const Home = () => {
  return (
    <div>
      <div className="w-50 max-screen mx-auto mt-5 flex justify-center items-center  ">
        <p className="text-black-600 font-sm text-xs font-sans">
          Connect to the our{" "}
          <span className="text-sky-400">expert that provide</span> to you high
          quality Services
        </p>
      </div>
      <Navigation />
      <div
        className=" h-96 mx-auto  flex flex-col  mt-6  bg-cover"
        style={{ backgroundImage: `url(${image})` }}>
        <div className="w-fit-content flex flex-col gap-8 m-20 ">
          <label className="text-5xl text-white ">Crafting Chemistry</label>
          <h2 className="text-8xl font-semibold w-2/4 text-white ">
            Delivering Health
          </h2>
          <p className="text-2xl text-white w-5/12">
            Innovating sustainable solutions for a healthier tomorrow through
            excellence in chemical and pharmaceutical manufacturing
          </p>
        </div>
        <div className="flex">
          <div className="w-96 h-48 bg-[#0062FF] flex flex-col gap-3 ml-20 justify-center rounded-xl text-white">
            <div className="flex justify-center gap-5 mt-5 ">
              <img src={manufacturing} alt="production" className="h-8 w-8" />
              <h4 className="text-xl font-medium ">
                High Quality Manufacturing
              </h4>
            </div>
            <p className="w-80 flex justify-center ml-10 font-normal leading-5">
              Our production facilities are equipped with state-of-the-art
              machinery and technology to ensure the highest quality of
              products.
            </p>
            <div className="flex gap-2  ml-10">
              <a href="www.google.com" className="text-lg underline">
                Learn more
              </a>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div className="w-96 h-48 bg-[#0062FF] flex flex-col gap-3 ml-10 justify-center rounded-xl text-white">
            <div className="flex justify-left gap-3 mt-5 ml-10">
              <img src={production} alt="production" className="h-8 w-8" />
              <h4 className="text-xl font-medium space-x-1.5 ">
                Safe Production Process
              </h4>
            </div>
            <p className="w-80 flex justify-center ml-10 font-normal leading-5">
              Our production facilities are equipped with state-of-the-art
              machinery and technology to ensure the highest quality of
              products.
            </p>
            <div className="flex gap-2  ml-10">
              <a href="www.google.com" className="text-lg underline">
                Learn more
              </a>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          
        </div>
      </div>
      
    </div>  
  );
}
export default Home;