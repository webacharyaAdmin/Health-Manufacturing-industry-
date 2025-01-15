import React from 'react'
import Navigation from './common_component/navigation'
import banner from '../assets/Home_banner.png'
import mobile_banner from '../assets/mobile_banner.png'
import manufacturing from '../assets/manufacturing.svg'
import productrion from '../assets/production.svg'
import arrow from '../assets/arrow.svg'
const Home_mobile = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center md:items-center ">
        <Navigation />
        <img
          src={mobile_banner}
          srcSet={`${mobile_banner} 620w , ${banner} 768w`}
          sizes="(max-width: 767px) 320px, 768px"
          alt=""
          className="  relative top-0 left-0 md:10/12 md:mt-5 md:w-11/12 container"
        />
        <div className="flex flex-col ml-5 absolute top-60 inset-0  text-white md:ml-28 md:gap-5 md:top-60 md:inset-0">
          <label htmlFor="" className="text- md:text-5xl  ">
            Crafting Chemistry
          </label>
          <h2 className="text-6xl  mt-2 font-semibold md:text-8xl md:w-64 md:flex-wrap ">
            Delivering Health
          </h2>
          <div className="mt-4 flex gap-5 md:absolute md:top-96 md:gap-10 md:left-96 md:hidden">
            <div>
              {" "}
              <label className="text-3xl font-light ">615k</label>
              <p className="font-normal text-xs mt-1">Trust Of company</p>
              <p className="text-xs font-extralight w-40 mt-2">
                Partner with trusted suppliers for your manufacturing needs
              </p>
            </div>
            <div>
              {" "}
              <label className="text-3xl font-light ">615k</label>
              <p className="font-normal text-xs mt-1">Trust Of company</p>
              <p className="text-xs font-extralight w-40 mt-2">
                Partner with trusted suppliers for your manufacturing needs
              </p>
            </div>
          </div>
          <p className="text-base mt-5 w-80 text-zinc-300  md:w-5/12 md:mt-10 md:text-2xl md:font-semibold">
            Innovating sustainable solutions for a healthier tomorrow through
            excellence in chemical and pharmaceutical manufacturing
          </p>

          <div className="h-96 mt-10 flex flex-col gap-[1rem] md:flex md:flex-row md:gap-10 md:mt-10">
            <div className=" h-56 w-80 relative  pt-2 bg-[#0062FF] rounded-xl gap-3 font-sans md:h-56  ">
              <div className="flex justify-center gap-5 mt-5">
                <img src={manufacturing} alt="" className="h-8 w-8" />
                <label className="font-medium text-xl underline">
                  High Quality Manufacturing
                </label>
              </div>
              <div className="text-base font-normal leading-5 w-80 ml-10 mt-4 font-sans">
                With advanced technology and skilled expertise, we deliver
                solutions that exceed industry standards and customer
                expectations.
              </div>
              <div className="flex gap-2  ml-10 mt-3">
                <a href="www.google.com" className="text-lg underline">
                  Learn more
                </a>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className=" h-56 w-96 relative mt-4 pt-2 bg-[#279EFF] rounded-xl gap-3 font-sans md:h-56 md:mt-0 ">
              <div className="flex justify-items-start gap-5 mt-5 ml-10">
                <img src={productrion} alt="" className="h-8 w-8" />
                <label className="font-medium text-xl underline">
                  Safe Production Process
                </label>
              </div>
              <div className="text-base font-normal leading-5 w-80 ml-10 mt-4 font-sans">
                With advanced technology and skilled expertise, we deliver
                solutions that exceed industry standards and customer
                expectations.
              </div>
              <div className="flex gap-2  ml-10 mt-3">
                <a href="www.google.com" className="text-lg underline">
                  Learn more
                </a>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className=" justify-right gap-5 md:ml-16 text-zinc-900 md:mt-10 hidden md:flex">
              <div className="w-52 text-center gap-6">
                <label htmlFor="" className="text-4xl">
                  615
                </label>
                <h3 className="decoration-bold font-semibold">
                  Trust of Company
                </h3>
                <p className="leading-5 text-sm">
                  Partner with trusted suppliers for your manufacturing needs
                </p>
              </div>
              <div className="w-52 text-center">
                <label htmlFor="" className="text-4xl">
                  217k
                </label>
                <h3 className="decoration-bold font-semibold">
                  Trust of Company
                </h3>
                <p className="leading-5 text-sm">
                  Partner with trusted suppliers for your manufacturing needs
                </p>
              </div>
            </div>
          </div>

          {/* <div className="w-full h-fit  whitespace-nowrap
          flex gap-3 mt-10 md:mt-0 md:gap-5 md:min-w-full md:ml-10"> 
            <div className="w-fit h-full relative rounded-lg mt-5 inline-block ">
              <img
                src={mobile_banner}
                alt="hello world"
                className="h-60 w-[10rem] object-cover rounded-lg "
              />
              <label className=" text-white">
                Custom Chemical Synthesis
              </label>
            </div>
            <div className="w-fit h-full relative rounded-lg mt-5 inline-block">
              <img
                src={mobile_banner}
                alt="hello world"
                className="h-60  object-cover rounded-lg "
              />
              <label className="absolute bottom-2 left-2 text-white">
                Custom Chemical Synthesis
              </label>
            </div>
            <div className="w-fit h-full relative rounded-lg mt-5 inline-block">
              <img
                src={mobile_banner}
                alt="hello world"
                className="h-60 w-[] object-cover rounded-lg "
              />
              <label className="absolute bottom-2 left-2 text-white">
                Custom Chemical Synthesis
              </label>
            </div>
            <div className="w-fit h-full relative rounded-lg mt-5 inline-block">
              <img
                src={mobile_banner}
                alt="hello world"
                className="h-60 w-[] object-cover rounded-lg "
              />
              <label className="absolute bottom-2 left-2 text-white">
                Custom Chemical Synthesis
              </label>
            </div>
          </div> */}
          
          <div className=" flex flex-row mt-20  md:gap-5 md:mt-10  md:max-h-max  md:justify-center overflow-x-auto ">
            <div className="snap-start w-[10rem] h-[15rem] bg-[url('https://i.pinimg.com/736x/90/a4/d3/90a4d39bd42eb5a4e3962eb1fe47d614.jpg')] bg-cover bg-center bg rounded-xl flex items-end p-5 md:w-[20.5rem] md:h-[18rem] ">
              <p className="text-sm ">Lorem ipsum dolor sit. </p>
            </div>
            <div className="snap-start w-[10rem] h-[15rem] bg-[url('https://i.pinimg.com/736x/90/a4/d3/90a4d39bd42eb5a4e3962eb1fe47d614.jpg')] bg-cover bg-center bg rounded-xl flex items-end p-5 md:w-[20.5rem] md:h-[18rem] ">
              <p className="text-sm ">Lorem ipsum dolor sit. </p>
            </div>
            <div className="snap-start w-[10rem] h-[15rem] bg-[url('https://i.pinimg.com/736x/90/a4/d3/90a4d39bd42eb5a4e3962eb1fe47d614.jpg')] bg-cover bg-center bg rounded-xl flex items-end p-5 md:w-[20.5rem] md:h-[18rem] ">
              <p className="text-sm ">Lorem ipsum dolor sit. </p>
            </div>
            <div className="snap-start w-[10rem] h-[15rem] bg-[url('https://i.pinimg.com/736x/90/a4/d3/90a4d39bd42eb5a4e3962eb1fe47d614.jpg')] bg-cover bg-center bg rounded-xl flex items-end p-5 md:w-[20.5rem] md:h-[18rem] ">
              <p className="text-sm ">Lorem ipsum dolor sit. </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service section  */}
    </div>
  );
}

export default Home_mobile
