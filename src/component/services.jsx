import React from 'react'
import Navigation from './common_component/navigation'
import star from '../assets/Star1.png'
import arrow from '../assets/arrow3.png'
import arrow5 from "../assets/arrow6.svg";
import banner from '../assets/service_banner.png'
import arrow2 from '../assets/arrow7.svg'
import trust  from '../assets/contact-banner.png'
import partner from '../assets/partner3.png'
import packing from '../assets/packing.png'
import safe from '../assets/safe.png'
import safe2 from '../assets/safe2.png'
import Footer from './common_component/footer';
import banner21 from '../assets/banner21.png';

const Services = () => {
  return (
    <div>
      <Navigation />

      <div className="m-2 mt-8 md:m-0 md:mt-20">
        <div className="h-full w-full bg-[#F8FFF7] rounded-xl p-5 md:flex md:gap-5 md:justify-center">
          <div className="md:bg-white md:w-[45rem] md:p-8 md:rounded-3xl md:h-fit md:px-10">
            <h1 className="text-[2rem] font-bold mt-5 md:text-[3.8rem] md:mt-0">
              Innovating Health,{" "}
            </h1>
            <h2 className="text-[2rem] font-semibold text-[#279EFF] md:text-[4rem] md:font-medium">
              Inspiring Life
            </h2>
            <p className="text-[0.8rem] w-60 mt-8 md:text-xl md:w-[35rem] md:mt-3">
              Experience targeted pain relief with our innovative Pain Relief
              Patch. This discreet and easy-to-use patch delivers a powerful
              combination of pain-relieving ingredients directly to the source
              of discomfort.
            </p>
            <div className="mt-10 flex flex-col gap-2 ">
              <div className="md:flex gap-2">
                <div className="flex flex-col md:flex row">
                  <div className="flex">
                    <img src={star} alt="" className="h-5 w-5" />
                    <p className="text-[1-rem]">4.5</p>
                  </div>
                  <p>Total Rating</p>
                </div>
                <div>
                  <label className="text-base font-medium">
                    Take the first Step Toward <br /> a Healthier You{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-3">
              <div className="  h-[6rem] w-40 bg-[#279EFF] item-center flex justify-between item-center p-2 rounded-lg mt-5">
                <label htmlFor="" className="text-white w-fit font-medium">
                  Take <br />
                  Our Services
                </label>
                <img src={arrow} alt="" className="h-5 w-5 justify-self-end" />
              </div>

              <div className="  h-[6rem] w-40 bg-transparent border-2 border-black item-center flex justify-between item-center p-2 rounded-lg mt-5">
                <label htmlFor="" className="text-black w-fit font-medium">
                  Take <br />
                  Our Services
                </label>
                <img src={arrow5} alt="" className="h-5 w-5 justify-self-end" />
              </div>
            </div>
          </div>
          <div className="mt-8 min-h-min md:w-[40rem] md:mt-0">
            <img
              src={banner21}
              alt=""
              className=" md:h-full md:w-full md:bg-cover md:bg-center"
            />
          </div>
        </div>
      </div>

      {/* services section */}

      <div className="m-5  gap-5 flex flex-wrap justify-center items-center md:mx-20">
        <div className="md:flex gap-5">
          <div className="w-full mt-5 h-[13rem] p-5 shadow-xl rounded-xl flex flex-col md:h-[15rem]">
            <div className="flex items-center justify-between border-b-2">
              <label className="font-semibold text-xl">
                Quality Control & Assurance
              </label>
              <img src={arrow2} alt="Arrow Icon" />
            </div>
            <p className="text-sm mt-auto text-zinc-700">
              Custom chemical synthesis is a service where a company or
              individual contracts with a specialized provider to produce
              specific chemical compounds that are not readily available on the
              market.
            </p>
          </div>
          <div className="w-full mt-5 h-[13rem] p-5 shadow-xl rounded-xl flex flex-col md:h-[15rem] ">
            <div className="flex items-center justify-between border-b-2">
              <label className="font-semibold text-xl">
                Pharma Formulation Develop
              </label>
              <img src={arrow2} alt="Arrow Icon" />
            </div>
            <p className="text-sm mt-auto text-zinc-700  md:w-[38rem]">
              Custom chemical synthesis is a service where a company or
              individual contracts with a specialized provider to produce
              specific chemical compounds that are not readily available on the
              market.
            </p>
          </div>
        </div>

        <div className="md:flex gap-5">
          <div className="w-full mt-5 h-[13rem] p-5 shadow-xl rounded-xl flex flex-col md:h-[15rem]">
            <div className="flex items-center justify-between border-b-2">
              <label className="font-semibold text-xl">
                Custom Chemical Synthesis
              </label>
              <img src={arrow2} alt="Arrow Icon" />
            </div>
            <p className="text-sm mt-auto text-zinc-700">
              Custom chemical synthesis is a service where a company or
              individual contracts with a specialized provider to produce
              specific chemical compounds that are not readily available on the
              market.
            </p>
          </div>
          <div className="w-full mt-5 h-[13rem] p-5 shadow-xl rounded-xl flex flex-col md:h-[15rem] ">
            <div className="flex items-center justify-between border-b-2 ">
              <label className="font-semibold text-xl">
                Sustainable Manufacturing
              </label>
              <img src={arrow2} alt="Arrow Icon" />
            </div>
            <p className="text-sm mt-auto text-zinc-700">
              Custom chemical synthesis is a service where a company or
              individual contracts with a specialized provider to produce
              specific chemical compounds that are not readily available on the
              market.
            </p>
          </div>
        </div>
      </div>
      {/* partner with us */}

      <div className="mt-16 flex flex-col md:items-left md:mx-10">
        <div className="flex flex-col text-left md:flex gap-5 md:mx-10 px-10 ">
          <label className="text-[1.3rem] font-medium md:text-[2.8rem]">
            Partner With Us For You
          </label>
          <label className="text-[1.3rem] font-medium text-[#279EFF] md:text-[2rem] ">
            Next Project
          </label>
        </div>
        <div className="h-fit w-fit p-5 md:w-full md:flex md:flex-wrap md:gap-10 md:justify-center md:items-center md:flex-row ">
          <div
            className="h-[25rem] w-full bg-cover bg-center rounded-3xl p-3 md:w-[30rem] flex flex-col "
            style={{ backgroundImage: `url(${trust})` }}
          >
            <div className=" flex justify-center  h-fit w-60  bg-[#E6F4EB] md:gap-2 rounded-3xl md:w-[16rem]">
              <p className="h-fit self-center text-[1.1rem]">
                content more info.....
              </p>
              <img src={arrow2} alt="" className="h-fit" />
            </div>
            <div className="bg-[#E6F4EB] w-fit  p-3 rounded-2xl mt-auto self-baseline ">
              <label className=" text-base w-full border-b-2 ">
                Packing Unit View
              </label>
              <p className="text-xs mt-5">
                Our products are meticulously packaged{" "}
              </p>
            </div>
          </div>
          <div className="w-full h-full bg-[#279EFF] mt-10 rounded-2xl md:w-[25rem] max-h-max md:mt-0 md:h-[25rem]">
            <div className="p-8 h-full space-y-6 ">
              <label className="  w-full border-b-2 text-[2rem] font-medium text-white ">
                To use our Exclusive services{" "}
              </label>
              <p className="text-white">
                Our products are meticulously packaged using industry-standard
                materials and techniques. This ensures that your items are
                well-protected during transit
              </p>
              <button className="border-2 p-1 text-white text-sm rounded-2xl">
                more about Services
              </button>
            </div>
          </div>
          <div className="w-full md:w-[25rem] md:h-[25rem]">
            <div
              className="w-full h-[20rem] md:h-[25rem] bg-cover bg-center rounded-2xl mt-10 md:w-[30rem] md:mt-0"
              style={{ backgroundImage: `url(${partner})` }}
            ></div>
          </div>
        </div>
      </div>

      {/* packing  */}

      <div className="w-full p-5 text-center md:text-left ">
        <div className="space-y-9 md:flex md:item-center md:justify-center md:gap-5 ">
          <div className="space-y-9 md:flex md:flex-col md:justify-center ">
            <label className="text-3xl font-medium leading-10">
              Industry-Standard <br /> Packaging for Peace of <br /> Mind
            </label>
            <p className="text-[1rem]  md:text-[1.5rem] md:w-[35rem]">
              Our products are meticulously packaged using industry-standard
              materials and techniques. This ensures that your items are
              well-protected during transit, minimizing the risk of damage
            </p>
          </div>
          <img src={packing} alt="" className="bg-cover bg-center"/>
        </div>
      </div>

      {/* our service criteria  */}

      <div className="flex flex-col justify-center items-center md:my-24">
        <div className=" m-5 text-center ">
          <label className="w-fit text-[1.3rem] font-bold">
            What make Our services Different
          </label>
          <p>safe prior and very hygienic</p>
          <div className="md:flex md:gap-16 items-center">
            <img src={safe} alt="" className="mt-10" />
            <div className="flex flex-col justify-start text-start ">
              <label className="text-[1.6rem] font-medium my-5 ">
                Personalize <span className="text-[#279EFF]">approach </span>
              </label>
              <ol className="list-disc mx-8 text-lg font-normal">
                <li>Tailor Solution To meet your specific need</li>
                <li>
                  Dedicated Account Manager to Provide Personalize Support{" "}
                </li>
                <li>Tailor Solution To meet your specific need</li>
              </ol>
              <button className="self-start my-8 bg-black text-white p-2 rounded-3xl px-5 ">
                click more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* cutting edge technology */}

      <div className="w-full flex flex-col justify-center items-center ">
        <div className="mx-5 md:flex md:gap-16 items-center">
          <img src={safe2} alt="" className="" />
          <div className="flex flex-col justify-start text-start ">
            <label className="text-[1.6rem] font-medium my-5 ">
              Cutting Edge-<span className="text-[#279EFF]">Solution</span>
            </label>
            <ol className="list-disc mx-8 text-lg font-normal">
              <li>Tailor Solution To meet your specific need</li>
              <li>Dedicated Account Manager to Provide Personalize Support </li>
              <li>Tailor Solution To meet your specific need</li>
            </ol>
            <button className="self-start my-8 bg-black text-white p-2 rounded-3xl px-5 ">
              click more
            </button>
          </div>
        </div>
      </div>

      {/* expert Section */}

      <Footer />
    </div>
  );
}

export default Services
