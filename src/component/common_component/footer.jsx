import React, { useState } from 'react'
import media from '../../assets/media_option.png'
import drop from '../../assets/drop_down.png'
const Footer = () => {
    const [isclose,isopen]=useState(false);
  return (
    <section className="  w-full shadow-inner p-10 bg-[#d6f6deaf] rounded-t-3xl mt-20 md:flex md:justify-center  md:gap-16">
      <div className="   flex flex-col items-center justify-center md:items-start ">
        <label className="text-[1.6rem] font-medium text-center md:text-start">
          Organic <br /> Manufacturing
        </label>
        <p className="mx-16 mt-6 text-[0.7rem] text-center md:mx-0 md:w-60 md:text-sm md:text-start">
          Eco-friendly materials and processes for minimal environmental impact.
          Eco-friendly materials and processes for minimal environmental impact.{" "}
        </p>
        <img src={media} alt="" className="mt-6" />
      </div>
      <div className="w-full flex flex-col item-center gap-8 mt-10 md:flex-row md:gap-40 justify-center md:mt-0 md:text-lg md:w-fit ">
        <div className="flex gap-2 flex-col justify-center w-full md:flex-col md:justify-start md:gap-10 md:w-full  ">
          <div className="flex justify-center">
            <label htmlFor="" className="font-semibold">
              Products
            </label>
            <img src={drop} alt="" className="w-5 md:hidden" />
          </div>
          <ul className=" md:flex flex-col w-fit gap-3 md:text-slate-500 hidden">
            <li>time</li>
            <li>type</li>
            <li>Blog</li>
            <li>Started</li>
          </ul>
        </div>
        <div className="flex gap-2 flex-col  justify-center w-full md:flex-col md:justify-start md:gap-10 md:w-full">
          <div className="flex justify-center">
            <label htmlFor="" className="font-semibold">
              About
            </label>
            <img src={drop} alt="" className="w-5 md:hidden" />
          </div>
          <ul className="md:flex md:flex-col md:w-fit gap-3 md:text-slate-500 hidden">
            <li>time</li>
            <li>type</li>
            <li>Blog</li>
            <li>Started</li>
          </ul>
        </div>
        <div className="flex gap-2 flex-col  justify-center w-full md:flex-col md:justify-start md:gap-10">
          <div className="flex justify-center">
            <label htmlFor="" className="font-semibold">
              Services
            </label>
            <img src={drop} alt="" className="w-5 md:hidden" />
          </div>
          <ul className="md:flex flex-col w-fit gap-3 md:text-slate-500 hidden">
            <li>time</li>
            <li>type</li>
            <li>Blog</li>
            <li>Started</li>
          </ul>
        </div>
        <div className="flex gap-2 flex-col  justify-center w-full md:flex-col md:justify-start md:gap-10">
          <div className="flex justify-center">
            <label htmlFor="" className="font-semibold">
              Trainer
            </label>
            <img src={drop} alt="" className="w-5 md:hidden" />
          </div>
          <ul className="md:flex flex-col w-fit gap-3 md:text-slate-500  hidden">
            <li>time</li>
            <li>type</li>
            <li>Blog</li>
            <li>Started</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex  flex-col justify-center text-center mt-10 gap-5 md:text-right md:w-fit md:mt-0">
        <label className="text-lg font-semibold ">Contact Details</label>
        <div>
          <p>webachariya@gmail.com</p>
          <p>+7078303280</p>
        </div>
        <div>
          <p>webachariya@gmail.com</p>
          <p>+7078303280</p>
        </div>
      </div>
    </section>
  );
}

export default Footer
