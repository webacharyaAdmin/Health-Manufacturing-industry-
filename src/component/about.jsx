import React from 'react'
import banner from '../assets/about_banner.png'
import Navigation from './common_component/navigation';
import Card from './common_component/about_section_card';
import vision from '../assets/our_vision.png'
import member1 from '../assets/member1.png'
import member2 from '../assets/member2.png'
import member3 from '../assets/member3.png'
import member4 from '../assets/member4.png'
import last1 from '../assets/about_last.png'
import last2 from '../assets/about_last2.png'
import last3 from '../assets/about_last3.png'
import Footer from './common_component/footer';
const About  = () => {
    const card_value1={
        number:'01',
        details:'Custom product manufacturing'
    }
    const card_value2 = {
      number: "02",
      details: "Custom product manufacturing",
    };
    const card_value3 = {
      number: "03",
      details: "Custom product manufacturing",
    };
    const card_value4 = {
      number: "04",
      details: "Custom product manufacturing",
    };
    const card_value5 = {
      number: "05",
      details: "Custom product manufacturing",
    };
    const card_value6 = {
      number: "06",
      details: "Custom product manufacturing",
    };
    const card_value7 = {
      number: "07",
      details: "Custom product manufacturing",
    };const card_value8 = {
      number: "08",
      details: "Custom product manufacturing",
    };
  return (
    <div className="">
      <div
        className="w-full h-[45rem] bg-cover bg-center bg-no-repeat pt-5 md:relative rounded-b-[2.5rem] flex flex-col items-center text-center  "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <Navigation />

        <div className="text-white m-auto self-center ">
          <label className="text-[2rem] font-medium ">About</label>
          <p className="text-xs w-inherit md:text-lg md:w-[30rem] md:text-zinc-200">
            Dive into our curated collection of articles, tips, and stories
            designed to inform, inspire, and keep you ahead in every aspect of
            life.
          </p>
        </div>
      </div>
      <div>
        <div className=" m-10 space-y-10 md:flex md:gap-20 md:m-16  md:justify-center">
          <img
            src={banner}
            alt=""
            className="w-[20rem] h-[20rem] hidden md:flex md:h-[26rem] md:w-[28rem]  md:rounded-2xl md:bg-cover md:bg-center"
          />
          <div className="md:space-y-10">
            <h1 className="text-4xl font-semibold md:text-[3rem] ">
              Our Mission
            </h1>
            <p className="flex md:text-[1.3rem] md:w-[36rem] ">
              To be the preferred partner for health manufacturing, recognized
              globally for quality, innovation, and trust.. I specialize in
              crafting unique visual identities and compelling brand stories. To
              be the preferred partner for health manufacturing, recognized
              globally for quality, innovation, and trust.. I specialize in
              crafting unique visual identities and compelling brand stories.
            </p>
            <button
              className="w-fit p-3 rounded-md font-medium bg-[#279EFF] text-white text-xs md:text-[1rem]
          "
            >
              Connect for more{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="m-8 ">
        <label className="text-3xl font-semibold w-60 ml-28">
          What Service We Provide
        </label>
        <div className="p-5 md:flex flex-wrap md:justify-center md:gap-5">
          <div className="flex  gap-5 item-center justify-center">
            <Card {...card_value1} />
            <Card {...card_value2} />
          </div>
          <div className="flex  gap-5 item-center justify-center">
            <Card {...card_value3} />
            <Card {...card_value4} />
          </div>
          <div className="flex  gap-5 item-center justify-center">
            <Card {...card_value5} />
            <Card {...card_value6} />
          </div>
          <div className="flex  gap-5 item-center justify-center">
            <Card {...card_value7} />
            <Card {...card_value8} />
          </div>
        </div>
      </div>
      {/* our vision  */}

      <div className="w-full h-fit p-5 ">
        <div className=" w-full md:justify-center md:item-center space-y-8 justify-center md:flex gap-20">
          <img src={vision} alt="" className="h-[15rem]  mb-6 md:h-[25rem] " />
          <div className=" space-y-10">
            <label className="text-4xl font-medium ">Our vision</label>
            <p className="flex text-base md:w-[30rem] md:text-xl">
              To be the preferred partner for health manufacturing, recognized
              globally for quality, innovation, and trust .To be the preferred
              partner for health manufacturing
            </p>
            <button
              className="w-fit p-3 rounded-md font-medium bg-[#0f0f0f] text-white text-xs
          "
            >
              Connect for more{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="w-[20rem] gap-3 flex md:flex-wrap overflow-x-scroll md:w-full md:justify-center">
          <div className="h-[15rem] w-[10rem] flex flex-col bg-[#F1F1F1] rounded-xl p-3 md:h-[20rem] md:w-[20rem]">
            <label className="text-3xl font-normal md:text-[2.5rem]">
              Our <br />
              Team
            </label>
            <p className="mt-auto self-baseline text-[0.6rem]">
              To be the preferred partner for health manufacturing, recognized
              globally for quality, innovation, and trust.
            </p>
          </div>
          <div
            className="h-[15rem] w-[10rem] flex flex-col rounded-xl p-3 bg-cover bg-center md:h-[20rem] md:w-[20rem]"
            style={{ backgroundImage: `url(${member1})` }}
          ></div>
          <div
            className="h-[15rem] w-[10rem] flex flex-col rounded-xl p-3 bg-cover bg-center md:h-[20rem] md:w-[20rem]"
            style={{ backgroundImage: `url(${member2})` }}
          ></div>
          <div
            className="h-[15rem] w-[10rem] flex flex-col rounded-xl p-3 bg-cover bg-center md:h-[20rem] md:w-[20rem]"
            style={{ backgroundImage: `url(${member3})` }}
          ></div>
          <div
            className="h-[15rem] w-[10rem] flex flex-col rounded-xl p-3 bg-cover bg-center md:h-[20rem] md:w-[20rem]"
            style={{ backgroundImage: `url(${member4})` }}
          ></div>
          <div
            className="h-[15rem] w-[10rem] flex flex-col rounded-xl p-3 bg-cover bg-center md:h-[20rem] md:w-[20rem]"
            style={{ backgroundImage: `url(${member2})` }}
          ></div>
          <div
            className="h-[15rem] w-[10rem] flex flex-col rounded-xl p-3 bg-cover bg-center md:h-[20rem] md:w-[20rem]"
            style={{ backgroundImage: `url(${member1})` }}
          ></div>
          <div
            className="h-[15rem] w-[10rem] flex flex-col rounded-xl p-3 bg-cover bg-center md:h-[20rem] md:w-[20rem]"
            style={{ backgroundImage: `url(${member4})` }}
          ></div>
          
        </div>
      </div>

      <div className="w-full h-fit flex flex-col md:flex-row">
        <div className="m-5 text-center  space-y-5 block">
          <img src={last3} alt="" />
          <label className="text-[1.2rem] font-medium block">
            Expertise You Can Trust
          </label>
          <p className="px-5">
            Our experienced team brings a wealth of knowledge in health product
            manufacturing.
          </p>
        </div>
        <div className="m-5 text-center  space-y-5 block">
          <img src={last2} alt="" />
          <label className="text-[1.2rem] font-medium block">
            Expertise You Can Trust
          </label>
          <p className="px-5">
            Our experienced team brings a wealth of knowledge in health product
            manufacturing.
          </p>
        </div>
        <div className="m-5 text-center  space-y-5 block">
          <img src={last1} alt="" />
          <label className="text-[1.2rem] font-medium block">
            Expertise You Can Trust
          </label>
          <p className="px-5">
            Our experienced team brings a wealth of knowledge in health product
            manufacturing.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About 
