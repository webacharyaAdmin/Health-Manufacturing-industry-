import React from 'react'
import Navigation from './common_component/navigation'
import Blog1 from '../assets/blog1.png'
import person2 from '../assets/person2.png'
import Box from './common_component/box'
import Blog2 from '../assets/blog2.png'
import topic1 from '../assets/topic1.png'
import topic2 from '../assets/topic2.png'
import lastblog from '../assets/lastblog.png'
import Last from './common_component/blog_last_section'
import  Footer from './common_component/footer'

const Boost={
  heading:"Innovation In HeathCare Technology",
  details:'Our products are meticulously packaged using industry-standard materials and techniques. This ensures that your items are well-protected during transit Our products are meticulously packaged using industry-standard'
}
const fun = {
  heading:
    "Topics: Mental Health, Diabetes Management, Heart Health, or Cancer Prevention.",
  description:
    "Our products are meticulously package d using industry-standard materials and techniques Our products are meticulously package d using industry-standard materials and techniques. Our products are meticulously package d using industry-standard materials and techniques. . ",
};
const Blog = () => {
  return (
    <div className="bg-[#F8FFF7]">
      <Navigation />

      {/* main banner them */}
      <div className="w-full p-5">
        <div className="">
          <h1 className="my-10 text-[1.9rem] font-medium w-fit pr-5">
            Insights That Inspire: Explore, Learn, and Elevate Your Knowledge
          </h1>
          <p className="text-[0.9rem] text-gray-500 w-fit pr-40">
            Dive into our curated collection of articles, tips, and stories
            designed to inform, inspire, and keep you ahead in every aspect of
            life.
          </p>
        </div>
      </div>

      {/* second section  */}
      <div className="p-5 w-full flex flex-col justify-center h-fit md:justify-start gap-5 md:flex-row">
        <div className="bg-white shadow-xl rounded-2xl  w-full h-fit p-2 md:flex md:w-[70vw]">
          <img src={Blog1} alt="" className="w-full h-[18rem]" />
          <div className="p-4 my-6   flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[1.5rem]">Ux review Perception </label>
              <p className="text-xs">
                Our products are meticulously packaged using industry-standard
                materials and techniques. This ensures that your items are
                well-protected during transit.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[1.5rem]  ">
                Total review related eport{" "}
              </label>
              <p className="text-xs">
                Our products are meticulously packaged using industry-standard
                materials and techniques. This ensures that your items are
                well-protected during transit.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-2xl  w-full h-fit p-5 md:flex md:w-[40vw]">
          <div className="flex px-2 gap-4">
            <img src={person2} alt="" />
            <div className="">
              <label htmlFor="" className="text=[0.8rem] font-medium">
                Dr marko Yoon
              </label>
              <p className="text-[0.8rem]">micro chief officer</p>
            </div>
          </div>
          <p className="text-[0.6rem] mt-6">
            Our products are meticulously packaged using industry-standard
            materials and techniques. This ensures that your items are
            well-protected during transit Our products are meticulously packaged
            using industry-standard materials and techniques. This ensures that
            your items are well-protected during transit Our products{" "}
          </p>
        </div>
      </div>

      {/* healthcare seminar  */}
      <div className="w-full px-5 mt-10">
        <div className="flex flex-col gap-10">
          <label className="text-[2rem] leading-8  font-medium">
            Heath Care <br /> Seminar 2024
          </label>
          <p className="text-base pr-5">
            Our products are meticulously packaged using industry-standard
            materials and techniques. This ensures that your items are
            well-protected during transit Our products are meticulously packaged
            using industry-standard materials and techniques. This ensures that
            your items are well-protected during transit Our products are
            meticulously packaged using industry-standard materials and
            techniques.{" "}
          </p>
        </div>
      </div>

      {/* 2section  */}
      <div>
        <div className="m-5">
          <img src={Blog2} alt="" />
        </div>
        <div className="space-y-5">
          <Box {...Boost} />
          <Box {...Boost} />
          <Box {...Boost} />
        </div>
      </div>

      <div className="w-full p-5 space-y-16 ">
        <div className="w-full flex gap-5 rounded-xl">
          <div
            className="w-full h-[20rem] rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${topic1})` }}
          ></div>
          <div className="w-full rounded-2xl h-[20rem]  shadow-xl  p-5  space-y-9">
            <div className="flex flex-col">
              <label className="text-[3rem] ">02</label>
              <label className="font-medium">
                Seminar <br /> of personality{" "}
              </label>
            </div>
            <p className="text-[0.9rem] ">
              Our products are meticulously package d using industry-standard
              materials and techniques.{" "}
            </p>
          </div>
        </div>

        <div className="mt-16 ">
          <div className="text-[1.5rem] font-semibold">
            <label className="">Topics</label>
            <p>Specialized Healthcare</p>
          </div>
          <div className="space-y-5">
            <p className="text-sm">
              Our products are meticulously package d using industry-standard
              materials and techniques Our products are meticulously package d
              using industry-standard materials and techniques. Our products are
              meticulously package d using industry-standard materials and
              techniques. .{" "}
            </p>
            <a href="" className="underline text-medium">
              Connect to More Info Related to this{" "}
            </a>
          </div>
        </div>

        <div className="w-full flex gap-5 rounded-xl ">
          <div
            className="w-full h-[20rem] rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${topic2})` }}
          ></div>
          <div className="w-full rounded-2xl h-[20rem]  shadow-xl  p-5  space-y-24 ">
            <div className="flex flex-col">
              <label className="text-[4rem] ">45+</label>
            </div>
            <p className="text-[1.5rem] font-medium ">
              Active <br />
              Seminar{" "}
            </p>
          </div>
        </div>
      </div>

      {/* last section */}

      <div className="p-5">
        <div className="w-full h-fit">
          <labe className="text-2xl font-semibold">
            Topics: Mental Health, Diabetes Management, Heart Health, or Cancer
            Prevention.
          </labe>
          <div
            className="w-full h-[20rem] bg-cover bg-center rounded-xl flex flex-col p-5 mt-10 "
            style={{ backgroundImage: `url(${lastblog})` }}
          >
            <label className="text-[1rem] text-white ">
              2024 | New delhi quick tech
            </label>
            <label className="text-[1.2rem] text-white font-normal mt-auto self-baseline">
              Technology and Innovation Programs
            </label>
          </div>
          <Last {...fun} />
          <Last {...fun} />
          <Last {...fun} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Blog
