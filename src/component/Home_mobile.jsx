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
import details from "../assets/details.png";
import chemical from "../assets/chemical.png";
import innovation from "../assets/innovation.png";
import collaborative from "../assets/collaborative.png";
import img1 from "../assets/contact_img1.png";
import img2 from "../assets/contact_img2.png";
import contact_banner from "../assets/contact-banner.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import person from "../assets/person.png";
import dot from "../assets/review_logo.png";
import Footer from "./common_component/footer";
import { Link } from "react-router";

const Home_mobile = () => {
  return (
    <div className="bg-[#F8FFF7] overflow-x-hidden">
      <Navigation />

      {/* ── HERO ── */}
      <div className="relative w-full">
        {/* Banner image */}
        <img
          src={banner}
          srcSet={`${mobile_banner} 767w, ${banner} 1200w`}
          sizes="100vw"
          alt="hero banner"
          className="w-full h-[32rem] md:h-[38rem] object-cover"
        />

        {/* Hero text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-28 text-white gap-4 md:gap-6">
          <p className="text-base md:text-2xl motion-preset-focus">
            Crafting Chemistry
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight motion-preset-expand">
            Delivering <br /> Health
          </h1>
          <p className="text-zinc-300 text-sm md:text-xl max-w-xs md:max-w-xl motion-preset-expand">
            Innovating sustainable solutions for a healthier tomorrow through
            excellence in chemical and pharmaceutical manufacturing
          </p>
        </div>
      </div>

      {/* ── HERO FEATURE CARDS ── */}
      <div className="flex flex-col md:flex-row gap-4 px-5 md:px-28 py-6 bg-[#F8FFF7]">
        
        {/* Card 1 */}
        <div className="flex-1 bg-[#0062FF] rounded-xl p-5 text-white flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src={manufacturing} alt="" className="h-8 w-8 shrink-0" />
            <span className="font-medium text-lg underline">
              <Link to="/product">  
              High Quality Manufacturing
              </Link>
            </span>
          </div>
          <p className="text-sm font-normal leading-5">
            With advanced technology and skilled expertise, we deliver solutions
            that exceed industry standards and customer expectations.
          </p>
          <div className="flex items-center gap-2 mt-auto">
            <a href="#" className="text-base underline">
              Learn more
            </a>
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-[#279EFF] rounded-xl p-5 text-white flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src={productrion} alt="" className="h-8 w-8 shrink-0" />
            <span className="font-medium text-lg underline">
              <Link to="/services">
                Safe Production Process
              </Link>
            </span>
          </div>
          <p className="text-sm font-normal leading-5">
            With advanced technology and skilled expertise, we deliver solutions
            that exceed industry standards and customer expectations.
          </p>
          <div className="flex items-center gap-2 mt-auto">
            <a href="#" className="text-base underline">
              Learn more
            </a>
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        {/* Stats — visible on desktop only */}
        <div className="hidden md:flex gap-10 items-center px-6">
          <div className="text-center w-44">
            <p className="text-4xl font-light">615k</p>
            <h3 className="font-semibold text-sm mt-1">Trust of Company</h3>
            <p className="text-xs text-slate-600 mt-2 leading-5">
              Partner with trusted suppliers for your manufacturing needs
            </p>
          </div>
          <div className="text-center w-44">
            <p className="text-4xl font-light">217k</p>
            <h3 className="font-semibold text-sm mt-1">Trust of Company</h3>
            <p className="text-xs text-slate-600 mt-2 leading-5">
              Partner with trusted suppliers for your manufacturing needs
            </p>
          </div>
        </div>

        {/* Stats — mobile only */}
        <div className="flex gap-6 md:hidden">
          <div>
            <p className="text-2xl font-light">615k</p>
            <p className="text-xs font-normal mt-1">Trust Of company</p>
            <p className="text-xs font-extralight w-36 mt-1">
              Partner with trusted suppliers for your manufacturing needs
            </p>
          </div>
          <div>
            <p className="text-2xl font-light">217k</p>
            <p className="text-xs font-normal mt-1">Trust Of company</p>
            <p className="text-xs font-extralight w-36 mt-1">
              Partner with trusted suppliers for your manufacturing needs
            </p>
          </div>
        </div>
      </div>

      {/* ── SERVICES SCROLL ── */}
      <div className="flex overflow-x-auto gap-4 px-5 md:px-0 md:grid md:grid-cols-4 md:gap-5 md:px-10 py-4 scrollbar-hide md:ml-20 md:mr-20">
        {[
          { img: service1, label: "Custom Chemical Synthesis" },
          { img: service2, label: "Pharma Formulation Development" },
          { img: service3, label: "Quality Control & Assurance" },
          { img: service4, label: "Sustainable Manufacturing" },
        ].map(({ img, label }) => (
          <div
            key={label}
            className="shrink-0 snap-start w-72 h-52 md:w-full md:h-64 bg-cover bg-center rounded-xl flex items-end p-4 text-white"
            style={{ backgroundImage: `url(${img})` }}
          >
            <p className="text-sm md:text-base font-medium bg-black/30 px-2 py-1 rounded">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* ── SECTION 1 – Details ── */}
      <div className="flex flex-col md:flex-row items-center gap-8 px-5 md:px-24 py-12">
        <div className="w-full md:w-1/2">
          <img src={details} alt="details" className="w-full rounded-xl" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h2 className="text-xl md:text-2xl font-medium text-zinc-900">
            Empowering Innovation in Chemical
            <br className="hidden md:block" /> & Pharmaceutical Manufacturing
          </h2>
          {["Advanced Technology", "Advanced Technology", "Advanced Technology"].map(
            (title, i) => (
              <div key={i}>
                <p className="font-medium text-base">{title}</p>
                <p className="text-sm text-slate-600 md:text-base md:max-w-xs">
                  Utilizing state-of-the-art equipment for accurate and
                  efficient production
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* ── SECTION 2 – Advancing Ideas ── */}
      <div className="px-5 md:px-10 py-8">
        <h2 className="text-2xl md:text-6xl font-semibold text-center mb-8 leading-snug">
          Advancing your Ideas And <br className="hidden md:block" /> enhancing
          the world
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Innovation */}
          <div
            className="rounded-xl p-5 flex flex-col h-52 md:h-72 bg-cover bg-center md:col-span-1 lg:col-span-1"
            style={{ backgroundImage: `url(${innovation})` }}
          >
            <span className="text-slate-200 font-semibold text-base md:text-lg">
              Innovative Solution
            </span>
            <span className="w-fit border border-white text-white text-xs rounded-full px-2 py-0.5 self-end">
              Best
            </span>
            <p className="text-slate-100 text-sm underline mt-auto">
              Turning visionary concepts into ground-breaking realities
            </p>
          </div>

          {/* Sustainable */}
          <div className="rounded-xl p-5 flex flex-col h-52 md:h-64 bg-[#279EFF] text-white md:col-span-1 lg:col-span-1 md:mt-10">
            <span className="font-semibold text-base">Sustainable impact</span>
            <span className="w-fit border border-white text-xs rounded-full px-2 py-0.5 self-end">
              Best
            </span>
            <p className="text-sm underline mt-auto">
              Prioritizing eco-friendly practices to create a better tomorrow
            </p>
            <img
              src={chemical}
              alt=""
              className="h-16 w-auto self-end mt-4 object-contain"
            />
          </div>

          {/* Counter */}
          <div className="rounded-xl p-5 flex flex-col h-52 md:h-64 bg-white shadow-lg md:col-span-1 lg:col-span-1 md:mt-10">
            <span className="text-4xl font-semibold text-zinc-900">+1254</span>
            <p className="text-lg font-semibold text-black mt-auto">
              Product we <br /> Manufactured Daily
            </p>
          </div>

          {/* Collaborative */}
          <div
            className="rounded-xl p-5 flex flex-col h-52 md:h-64 bg-cover bg-center md:col-span-1 lg:col-span-1 md:mt-10"
            style={{ backgroundImage: `url(${collaborative})` }}
          >
            <span className="text-slate-200 font-semibold text-base">
              Collaborative Approach
            </span>
            <span className="w-fit border border-white text-white text-xs rounded-full px-2 py-0.5 self-end">
              Best
            </span>
            <p className="text-slate-100 text-sm underline mt-auto">
              Turning visionary concepts into ground-breaking realities
            </p>
          </div>

          {/* Sustainable 2 */}
          <div className="rounded-xl p-5 flex flex-col h-52 md:h-72 bg-[#279EFF] text-white md:col-span-1 lg:col-span-1">
            <span className="font-semibold text-base">Sustainable impact</span>
            <span className="w-fit border border-white text-xs rounded-full px-2 py-0.5 self-end">
              Best
            </span>
            <p className="text-sm underline mt-auto">
              Prioritizing eco-friendly practices to create a better tomorrow
            </p>
          </div>
        </div>
      </div>

      {/* ── CONTACT BANNER ── */}
      <div
        className="mx-5 md:mx-20 mt-10 rounded-xl bg-cover bg-center flex flex-col min-h-72 md:min-h-96 p-5 md:p-10"
        style={{ backgroundImage: `url(${contact_banner})` }}
      >
        <h2 className="text-slate-100 text-2xl md:text-4xl font-semibold">
          Continuous <br /> Improvement
        </h2>

        <div className="flex flex-col gap-3 text-slate-50 mt-4 items-end md:mr-10">
          {["Safe and Hygienic", "Safe and Hygienic", "Safe and Hygienic"].map(
            (item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span>{item}</span>
                <img src={img2} alt="" />
              </div>
            )
          )}
        </div>

        <div className="mt-auto md:max-w-lg">
          <div className="bg-slate-100 rounded-full flex items-center gap-3 px-2 py-1 w-fit">
            <div className="bg-[#279EFF] rounded-full shrink-0">
              <img src={img1} alt="" />
            </div>
            <span className="text-xs font-medium pr-2">
              ayushbahuguna76@gmail.com
            </span>
          </div>
          <p className="text-slate-100 mt-3 text-sm md:text-2xl leading-relaxed">
            Delivering adaptable and future-ready innovations for long-term
            success.
          </p>
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <div className="px-5 md:px-10 py-10">
        <div className="flex flex-col md:flex-row gap-1 mb-6">
          <span className="text-3xl md:text-4xl font-medium text-black">
            Crafting Excellence
          </span>
          <span className="text-3xl md:text-4xl font-medium text-[#279EFF] md:ml-2">
            Delivering Trust
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3"
              >
                <span className="text-[#279EFF] text-xl font-semibold">
                  Precision Manufacturing
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Leveraging advanced technologies to achieve unmatched accuracy
                  in every product we create.
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* ── QUALITY PACKAGING ── */}
      <div className="flex flex-col md:flex-row items-center gap-8 px-5 md:px-10 py-10">
        <div className="hidden md:flex gap-4 shrink-0">
          <img
            src={service1}
            alt=""
            className="w-72 h-80 object-cover rounded-xl"
          />
          <img
            src={service2}
            alt=""
            className="w-72 h-80 object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl md:text-3xl font-semibold md:max-w-sm">
            Precision Packaging for Quality Preservation
          </h2>
          <ul className="list-disc ml-5 flex flex-col gap-3 text-slate-600 md:text-lg md:font-medium">
            <li>Ensuring products remain safe, secure, and effective</li>
            <li>Custom designs to meet diverse industry requirements</li>
            <li>
              Eco-friendly materials and processes for minimal environmental
              impact.
            </li>
            <li>
              Adhering to stringent global packaging standards for reliability
            </li>
          </ul>
        </div>
      </div>

      {/* ── CLIENT REVIEWS ── */}
      <div className="px-5 md:px-10 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-medium">
            Our Client Review
          </h2>
          <div className="hidden md:flex gap-2">
            <img src={left} alt="prev" className="cursor-pointer" />
            <img src={right} alt="next" className="cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 md:justify-center scrollbar-hide">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="shrink-0 flex flex-col items-center w-60 md:w-64 bg-[#5f9b6a97] p-6 rounded-2xl text-slate-50 gap-3 text-center"
              >
                <img
                  src={person}
                  alt=""
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">Person Demo</p>
                  <p className="text-sm">from india</p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <img src={dot} alt="" className="h-5 w-5" />
                  <p className="text-sm font-medium text-neutral-100 leading-5">
                    Eco-friendly materials and processes for minimal
                    environmental impact.
                  </p>
                  <img
                    src={dot}
                    alt=""
                    className="h-5 w-5 self-end scale-x-[-1] scale-y-[-1]"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home_mobile;
