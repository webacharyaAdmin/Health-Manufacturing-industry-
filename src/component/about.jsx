import React from 'react'
import banner from '../assets/about_banner.png'
import Navigation from './common_component/navigation';
import Card from './common_component/about_section_card';
const About  = () => {
    const card_value={
        number:'01',
        details:'Custom product manufacturing'
    }
  return (
    <div className="">
      <div
        className="w-full h-[45rem] bg-cover bg-center bg-no-repeat pt-5 md:relative rounded-b-[2.5rem] flex flex-col items-center text-center  "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <Navigation />

        <div className="text-white m-auto self-center ">
          <label className="text-[2rem] font-medium ">About</label>
          <p className="text-xs w-inherit">
            Dive into our curated collection of articles, tips, and stories
            designed to inform, inspire, and keep you ahead in every aspect of
            life.
          </p>
        </div>
      </div>
      <div>
        <div className='m-10 space-y-10'>
          <img
            src={banner}
            alt=""
            className="w-[20rem] h-[20rem] hidden md:flex"
          />
          <h1 className='text-4xl font-semibold'>Our Mission</h1>
          <p className='flex '>
            To be the preferred partner for health manufacturing, recognized
            globally for quality, innovation, and trust.. I specialize in
            crafting unique visual identities and compelling brand stories. To
            be the preferred partner for health manufacturing, recognized
            globally for quality, innovation, and trust.. I specialize in
            crafting unique visual identities and compelling brand stories.
          </p>
          <button className="w-fit p-3 rounded-md font-medium bg-[#279EFF] text-white text-xs
          ">Connect for more </button>
        </div>
      </div>
      <div>
        <div className='m-8 flex flex-wrap'>
            <label className='text-3xl font-semibold w-60'>What Service We Provide</label>
            <Card {...card_value}/>
        </div>
      </div>

    </div>
  );
}

export default About 
