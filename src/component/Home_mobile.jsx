  import React from "react";
  import Navigation from "./common_component/navigation";
  import banner from "../assets/Home_banner.png";
  import mobile_banner from "../assets/mobile_banner.png";
  import manufacturing from "../assets/manufacturing.svg";
  import productrion from "../assets/production.svg";
  import arrow from "../assets/arrow.svg";
  import service1 from "../assets/service1.png";
  import service2 from "../assets/service2.png";
  import service3 from "../assets/service3.png";
  import service4 from "../assets/service4.png";
  import details from '../assets/details.png'
  import chemical from '../assets/chemical.png'
  import innovation from "../assets/innovation.png";
  import collaborative from "../assets/collaborative.png";
  import img1 from '../assets/contact_img1.png';
  import img2 from "../assets/contact_img2.png";
  import img3 from "../assets/contact_img3.png";
  import contact_banner from '../assets/contact-banner.png'
  ;import left from '../assets/left.png'
  ;import right from '../assets/right.png'
  import person from '../assets/person.png'
  import dot from '../assets/review_logo.png'
  import Footer from './common_component/footer'
  
  const Home_mobile = () => {
    return (
      <div className=" md:overflow-hidden bg-[#F8FFF7] ">
        <div className="flex flex-col justify-center items-center    ">
          <Navigation />
          <img
            src={mobile_banner}
            srcSet={`${mobile_banner} 620w , ${banner} 768w`}
            sizes="(max-width: 767px) 320px, 768px"
            alt=""
            className="  w-[40rem] top-0 left-0 md:10/12 md:mt-5 md:w-11/12 "
          />

          <div className="flex flex-col ml-5 absolute top-60 inset-0  text-white md:ml-28 md:gap-5 md:top-60 md:inset-0 ">
            <label htmlFor="" className=" md:text-5xl  motion-preset-focus ">
              Crafting Chemistry
            </label>
            <h2 className="text-6xl  mt-2 font-semibold md:text-8xl md:w-64 md:flex-wrap motion-preset-expand">
              Delivering <br /> Health
            </h2>
            <div className="mt-4 flex gap-5 md:absolute md:top-96 md:gap-10 md:left-96 md:hidden ">
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
                <p className="text-xs font-extralight w-40 mt-2 ">
                  Partner with trusted suppliers for your manufacturing needs
                </p>
              </div>
            </div>
            <p className=" text-zinc-300 w-[20rem] mt-4  md:mt-10 md:text-2xl md:font-semibold md:w-[40rem] motion-preset-expand">
              Innovating sustainable solutions for a healthier tomorrow through
              excellence in chemical and pharmaceutical manufacturing
            </p>

            <div
              className="h-96 mt-10 flex flex-col gap-[1rem] md:flex md:flex-row
            md:gap-10 md:mt-10"
            >
              <div className=" h-60 w-fit pt-2 bg-[#0062FF] rounded-xl gap-3 font-sans md:h-56  ">
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
              <div className=" h-60 w-fit mt-4 pt-2 bg-[#279EFF] rounded-xl gap-3 font-sans md:h-56 md:mt-0  ">
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
              <div className=" justify-right gap-5 md:ml-28 text-zinc-900 md:mt-10 hidden md:flex">
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
          </div>

          {/* other detail section  */}
        </div>

        <div className="w-[80vw] overflow-x-scroll flex mt-[25rem] gap-5 md:gap-5 ml-0 md:mt-10  md:max-h-max  md:justify-center md:mt:0 md:text-slate-100 md:w-full">
          <div
            className="snap-start  w-[20rem] h-[15rem] bg-cover bg-center bg rounded-xl flex items-end p-5 md:w-[20.5rem] md:h-[18rem]  md:bg:cover md:bg-center "
            style={{ background: `url(${service1}` }}
          >
            <p className="text-sm md:text-lg">Custom Chemical Synthesis </p>
          </div>
          <div
            className="snap-start w-[20rem] h-[15rem] bg-cover bg-center bg rounded-xl flex items-end p-5 md:w-[20.5rem] md:h-[18rem]  md:bg:cover md:bg-center "
            style={{ background: `url(${service2}` }}
          >
            <p className="text-sm md:text-lg ">
              Pharma Formulation Development
            </p>
          </div>
          <div
            className="snap-start w-[20rem] h-[15rem] bg-cover bg-center bg rounded-xl flex items-end p-5 md:w-[20.5rem] md:h-[18rem]  md:bg:cover md:bg-center "
            style={{ background: `url(${service3}` }}
          >
            <p className="text-sm md:text-lg">Quality Control & Assurance </p>
          </div>
          <div
            className="snap-start w-[20rem] h-[15rem] bg-cover bg-center bg rounded-xl flex items-end p-5 md:w-[20.5rem] md:h-[18rem]  md:bg:cover md:bg-center "
            style={{ background: `url(${service4}` }}
          >
            <p className="text-sm md:text-lg">Sustainable Manufacturing </p>
          </div>
        </div>

        {/* section1 */}

        <div className="flex flex-col gap-4 h-full w-80 mt-5 ml-5 md:w-fit md:flex md:flex-col md:justify-center md:mt-32 md:ml-64 ">
          <div className="md:flex md:gap-[5rem] md:items-center md:justify-center ">
            <div className="md:w-[60rem] ">
              <img src={details} alt="" />
            </div>
            <div className="text-zinc-900 flex  mt-10 gap-5 flex-wrap w-full  md:flex-col md:gap-5 md:mt-0  ">
              <div>
                <label className="text-black font-medium text-[1.1rem] md:text-2xl ">
                  Empowering Innovation in Chemical
                  <br /> & Pharmaceutical Manufacturing
                </label>
              </div>
              <div className="w-[32vh] md:w-full">
                <label className="text-base md:font-medium md:text-lg md:w-[40rem]">
                  Advance technology
                </label>
                <p className="text-xs md:w-[20rem] md:text-base">
                  Utilizing state-of-the-art equipment for accurate and
                  efficient production
                </p>
              </div>
              <div className="w-[32vh] md:w-[full]">
                <label className="text-base md:font-medium md:text-lg md:w-[20rem]">
                  Advance technology
                </label>
                <p className="text-xs md:w-[20rem] md:text-base">
                  Utilizing state-of-the-art equipment for accurate and
                  efficient production
                </p>
              </div>
              <div className="w-[32vh] md:w-[full]   ">
                <label className="text-base md:font-medium md:text-lg md:w-[20rem]">
                  Advance technology
                </label>
                <p className="text-xs md:w-[20rem] md:text-base">
                  Utilizing state-of-the-art equipment for accurate and
                  efficient production
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* section-2 */}

        <div className="flex justify-center mt-12  ">
          <div className=" w-full ">
            {/* heading */}
            <div className="ml-5 md:flex md:justify-center">
              <h2 className="text-xl font-semibold w-72 md:w-fit md:text-7xl md:text-center md:leading-snug font-sans ">
                Advancing your Ideas And <br /> enhancing the world{" "}
              </h2>
            </div>

            {/* options */}
            <div className="w-full md:flex  md:justify-center md:h-full md:gap-5">
              <div
                className="flex flex-col h-[10rem] max-w-full bg bg-cover m-5 md:mt-5 md:m-0 rounded-xl p-5
                            md:h-[20rem] md:bg-cover md:bg-center "
                style={{ backgroundImage: `url(${innovation})` }}
              >
                <label className="text-slate-200 md:w-32 md:text-xl md:font-semibold ">
                  Innovative Solution{" "}
                </label>
                <button className="w-16 self-end absolute border-2 text-white border-neutral-100 rounded-2xl text-xs">
                  Best
                </button>
                <p className="text-[1rem] font-extralight underline text-slate-100  mt-auto">
                  turing visionary concept into <br /> ground breaking realities{" "}
                </p>
              </div>

              <div className="flex flex-col h-[10rem] max-w-full bg-[#279EFF] bg-cover m-5  md:m-0 mt-5 rounded-xl p-5 md:h-[16.3rem] md:mt-20 ">
                <label className="text-slate-200 font-semibold text-xl">
                  Sustainable impact
                </label>
                <button className="w-16 self-end absolute border-2 text-white border-neutral-100 rounded-2xl text-xs">
                  Best
                </button>
                <p className="text-[0.9rem] font-extralight underline text-slate-100  mt-auto">
                  Prioritizing eco-friendly <br /> practices to create a <br />{" "}
                  better tomorrow
                </p>
                <img
                  src={chemical}
                  alt=""
                  className="w-fit h-25  ml-52 mt-8 self-baseline md:ml-0 md:mt-10"
                />
              </div>

              <div className="flex flex-col h-[10rem] max-w-full bg bg-cover bg-white-500 m-5 mt-5 md:m-0 rounded-xl p-5 shadow-lg  md:h-[16.3rem] md:mt-20 md:w-72">
                <label className="text-zinc-950 text-4xl font-semibold font-sans  ">
                  {" "}
                  +1254
                </label>

                <p className="text-[1.2rem] font-semibold  text-black-400   mt-auto">
                  Product we <br /> Manufactured Daily
                </p>
              </div>

              <div
                className="flex flex-col h-[10rem] max-w-full bg bg-cover m-5 md:mt-20 md:m-0 rounded-xl p-5
                            md:h-[16.3rem] md:bg-cover md:bg-center  "
                style={{ backgroundImage: `url(${collaborative})` }}
              >
                <label className="text-slate-200 md:w-32 md:text-xl md:font-semibold">
                  Innovative Solution{" "}
                </label>
                <button className="w-16 self-end absolute border-2 text-white border-neutral-100 rounded-2xl text-xs">
                  Best
                </button>
                <p className="text-[1rem] font-extralight underline text-slate-100  mt-auto">
                  turing visionary concept into <br /> ground breaking realities{" "}
                </p>
              </div>

              <div className="flex flex-col h-[10rem] max-w-full bg-[#279EFF] bg-cover m-5 mt-5  md:m-0 rounded-xl p-5  md:mt-5 md:h-[20rem]">
                <label
                  className="text-slate-200 font-semibold text-xl 
                "
                >
                  Sustainable impact
                </label>
                <button className="w-16 self-end absolute border-2 text-white border-neutral-100 rounded-2xl text-xs">
                  Best
                </button>
                <p className="text-[0.9rem] font-extralight underline text-slate-100  mt-auto ">
                  Prioritizing eco-friendly <br /> practices to create a <br />{" "}
                  better tomorrow
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* contact section */}

        <div
          className=" flex flex-col bg-cover bg-center max-w-full rounded-xl h-[30rem] mx-5 md:m-20 mt-auto"
          style={{ backgroundImage: `url(${contact_banner})` }}
        >
          <div className="p-5  ">
            <h1 className="text-slate-100  text-2xl font-semibold font-sans ">
              Continuous <br /> Improvement{" "}
            </h1>
          </div>
          <div className="flex flex-col gap-5 text-slate-50  md:mr-10">
            <div
              className="flex items-center gap-3 self-end "
              style={{ transform: "scaleX(1)" }}
            >
              <label htmlFor="">safe and Hygienic</label>
              <img src={img2} alt="" />
            </div>
            <div className="flex items-center gap-3 self-end">
              <label htmlFor="">safe and Hygienic</label>
              <img src={img2} alt="" />
            </div>
            <div className="flex items-center gap-3 self-end">
              <label htmlFor="">safe and Hygienic</label>
              <img src={img2} alt="" />
            </div>
          </div>
          <div className=" self-end mt-auto md:self-baseline">
            <div>
              <div className="w-[16rem] bg-slate-100 m-5 rounded-full flex items-center gap-3">
                <div className="bg-[#279EFF] w-fit rounded-full">
                  <img src={img1} alt="" className="bg-[#]" />
                </div>
                <label htmlFor="" className="text-xs font-medium">
                  ayushbahuguna76@gmail.com
                </label>
              </div>
              <p className="m-5 text-slate-100 md:text-4xl">
                Delivering adaptable and future-ready innovations for long-term
                success.
              </p>
            </div>
          </div>
        </div>

        {/* products */}

        <div className="h-fit w-full p-5 flex flex-wrap flex-col gap-5  md:max-w-full md:justify-center ">
          <div className="flex flex-col md:flex md:flex-row gap-2 md:m:10">
            <label
              htmlFor=""
              className="text-[1.9rem] font-medium text-black md:text-[2.5rem] md:ml-20
              "
            >
              Crafting Excellence
            </label>
            <label
              htmlFor=""
              className="text-[1.9rem] font-medium text-[#279EFF] md:text-[2.5rem]"
            >
              Delivering Trust
            </label>
          </div>
          <div className=" flex  gap-10 flex-wrap md:flex md:max-w-full md:justify-center">
            <div className="bg-white shadow-lg max-w-full p-5 flex flex-col gap-5 rounded-xl  w-96 md:p-10 md:max-h-full ">
              <label
                htmlFor=""
                className="text-[#279EFF] text-xl font-semibold md:text-2xl "
              >
                Precision Manufacturing
              </label>
              <p className="text-sm w-fit  ">
                Leveraging advanced technologies to achieve unmatched accuracy
                in every product we create.Leveraging advanced technologies to
                achieve unmatched accuracy in every product we create
              </p>
            </div>
            <div className="bg-white shadow-lg max-w-full p-5 flex flex-col gap-5 rounded-xl w-96 md:p-10 md:max-h-full ">
              <label
                htmlFor=""
                className="text-[#279EFF] text-xl font-semibold md:text-2xl "
              >
                Precision Manufacturing
              </label>
              <p className="text-sm w-fit  ">
                Leveraging advanced technologies to achieve unmatched accuracy
                in every product we create.Leveraging advanced technologies to
                achieve unmatched accuracy in every product we create
              </p>
            </div>
            <div className="bg-white shadow-lg max-w-full p-5 flex flex-col gap-5 rounded-xl w-96 md:p-10 md:max-h-full ">
              <label
                htmlFor=""
                className="text-[#279EFF] text-xl font-semibold md:text-2xl "
              >
                Precision Manufacturing
              </label>
              <p className="text-sm w-fit  ">
                Leveraging advanced technologies to achieve unmatched accuracy
                in every product we create.Leveraging advanced technologies to
                achieve unmatched accuracy in every product we create
              </p>
            </div>
            <div className="bg-white shadow-lg max-w-full p-5 flex flex-col gap-5 rounded-xl w-96 md:p-10 md:max-h-full ">
              <label
                htmlFor=""
                className="text-[#279EFF] text-xl font-semibold md:text-2xl "
              >
                Precision Manufacturing
              </label>
              <p className="text-sm w-fit  ">
                Leveraging advanced technologies to achieve unmatched accuracy
                in every product we create.Leveraging advanced technologies to
                achieve unmatched accuracy in every product we create
              </p>
            </div>
            <div className="bg-white shadow-lg max-w-full p-5 flex flex-col gap-5 rounded-xl w-96 md:p-10 md:max-h-full ">
              <label
                htmlFor=""
                className="text-[#279EFF] text-xl font-semibold md:text-2xl "
              >
                Precision Manufacturing
              </label>
              <p className="text-sm w-fit  ">
                Leveraging advanced technologies to achieve unmatched accuracy
                in every product we create.Leveraging advanced technologies to
                achieve unmatched accuracy in every product we create
              </p>
            </div>
            <div className="bg-white shadow-lg max-w-full p-5 flex flex-col gap-5 rounded-xl w-96 md:p-10 md:max-h-full ">
              <label
                htmlFor=""
                className="text-[#279EFF] text-xl font-semibold md:text-2xl "
              >
                Precision Manufacturing
              </label>
              <p className="text-sm w-fit  ">
                Leveraging advanced technologies to achieve unmatched accuracy
                in every product we create.Leveraging advanced technologies to
                achieve unmatched accuracy in every product we create
              </p>
            </div>
          </div>
        </div>

        {/* quality checkup */}

        <div className="w-full h-[25rem] md:flex md:justify-center md:gap-10 md:mt-16">
          <div className="hidden md:flex md:gap-5 ">
            <img
              src={service1}
              alt=""
              className="md:w-[20rem] md:h-[23rem] md:bg-cover cd:bg-center"
            />
            <img
              src={service2}
              alt=""
              className="md:w-[20rem] md:h-[23rem] md:bg-cover cd:bg-center"
            />
          </div>
          <div className="flex flex-col p-5 md:gap-7 md:p-0">
            <label className="text-[1.5rem] font-semibold md:w-96 md:text-3xl">
              Precision Packaging for Quality Preservation
            </label>
            <ul className="w-[75vw] list-disc flex flex-col ml-5 gap-2 font-normal text-slate-600 md:w-96  md:text-xl md:font-medium">
              <li className="text-[1.2rem]">
                Ensuring products remain safe, secure, and effective
              </li>
              <li className="text-[1.2rem]">
                Custom designs to meet diverse industry requirements
              </li>
              <li className="text-[1.2rem]">
                Eco-friendly materials and processes for minimal environmental
                impact.
              </li>
              <li className="text-[1.2rem]">
                Adhering to stringent global packaging standards for reliability
              </li>
            </ul>
          </div>
        </div>

        {/* our service */}

        <div className=" m-5 md:m-10 ">
          <div className="flex justify-between items-center md:mx-10 ">
            <label htmlFor="" className="text-3xl font-medium">
              Our Client Review{" "}
            </label>
            <div className="md:flex  gap-2 hidden">
              <img src={left} alt="" />
              <img src={right} alt="" />
            </div>
          </div>
          <div className="flex  gap-4 mt-[3rem] overflow-x-scroll md:justify-center md:gap-10">
            <div className=" flex flex-col justify-center h-fit w-[16rem] bg-[#5f9b6a97] p-8 rounded-xl text-center text-slate-50 gap-3  md:w-[18rem] md:rounded-3xl">
              <div className="flex flex-col">
                <img src={person} alt="" className="h-14 w-14   self-center" />
                <label htmlFor="" className=" text-xl font-semibold">
                  Person Demo
                </label>
                <p className="text-sm font-sans">from india</p>
              </div>
              <div className="self-center flex flex-col gap-2">
                <img src={dot} alt="" className="self-start h-5 w-5 " />
                <p className="w-[14rem] font-medium text-neutral-100 leading-5 font-sans  ">
                  Eco-friendly materials and processes for minimal environmental
                  impact.
                </p>
                <img
                  src={dot}
                  alt=""
                  className="scale-x-[-1] scale-y-[-1] self-end h-5 w-5"
                />
              </div>
            </div>
            <div className=" flex flex-col justify-center h-fit w-[16rem] bg-[#5f9b6a97] p-8 rounded-xl text-center text-slate-50 gap-3 md:w-[18rem] md:rounded-3xl">
              <div className="flex flex-col">
                <img src={person} alt="" className="h-14 w-14   self-center" />
                <label htmlFor="" className=" text-xl font-semibold">
                  Person Demo
                </label>
                <p className="text-sm font-sans">from india</p>
              </div>
              <div className="self-center flex flex-col gap-2">
                <img src={dot} alt="" className="self-start h-5 w-5 " />
                <p className="w-[14rem] font-medium text-neutral-100 leading-5 font-sans  ">
                  Eco-friendly materials and processes for minimal environmental
                  impact.
                </p>
                <img
                  src={dot}
                  alt=""
                  className="scale-x-[-1] scale-y-[-1] self-end h-5 w-5"
                />
              </div>
            </div>
            <div className=" flex flex-col justify-center h-fit w-[16rem] bg-[#5f9b6a97] p-8 rounded-xl text-center text-slate-50 gap-3  md:w-[18rem] md:rounded-3xl">
              <div className="flex flex-col">
                <img src={person} alt="" className="h-14 w-14   self-center" />
                <label htmlFor="" className=" text-xl font-semibold">
                  Person Demo
                </label>
                <p className="text-sm font-sans">from india</p>
              </div>
              <div className="self-center flex flex-col gap-2">
                <img src={dot} alt="" className="self-start h-5 w-5 " />
                <p className="w-[14rem] font-medium text-neutral-100 leading-5 font-sans  ">
                  Eco-friendly materials and processes for minimal environmental
                  impact.
                </p>
                <img
                  src={dot}
                  alt=""
                  className="scale-x-[-1] scale-y-[-1] self-end h-5 w-5"
                />
              </div>
            </div>
            <div className=" flex flex-col justify-center h-fit w-[16rem] bg-[#5f9b6a97] p-8 rounded-xl text-center text-slate-50 gap-3 md:w-[18rem] md:rounded-3xl">
              <div className="flex flex-col">
                <img src={person} alt="" className="h-14 w-14   self-center" />
                <label htmlFor="" className=" text-xl font-semibold">
                  Person Demo
                </label>
                <p className="text-sm font-sans">from india</p>
              </div>
              <div className="self-center flex flex-col gap-2">
                <img src={dot} alt="" className="self-start h-5 w-5 " />
                <p className="w-[14rem] font-medium text-neutral-100 leading-5 font-sans  ">
                  Eco-friendly materials and processes for minimal environmental
                  impact.
                </p>
                <img
                  src={dot}
                  alt=""
                  className="scale-x-[-1] scale-y-[-1] self-end h-5 w-5"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  export default Home_mobile;
