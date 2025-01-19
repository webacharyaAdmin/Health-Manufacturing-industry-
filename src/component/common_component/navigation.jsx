import React from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";

const Navigation = () => {
  const li_item = ["Home", "Service", "Contact", "Blog", "Product", "AboutUs"];
  const li_style = "text-slate-800 font-xxs text-sm/[17px] font-sans";

  return (
    <div className=" text-xs flex justify-between min-w-full items-center px-4 md:w-full  rounded-full md:flex md:justify-between  md:px-10 md:max-w-full py-4 bg-[#F2F8F3] h-16 md:mt-3 md:rounded-none ">
      <img src={logo} alt="heo" className="h-16 w-16 md:mb-0 overflow-hidden" />
      <ul className=" hidden  md:flex md:justify-center md:items-center md:gap-16 ">
        {li_item.map((item, index) => {
          return (
            <li key={index} className={li_style}>
              {item}
            </li>
          );
        })}
      </ul>
      <button className=" hidden md:h-8  md:w-[80px] md:text-sm md:flex justify-center items-center  bg-[#279EFF] rounded-3xl text-white ">
        Login
      </button>
      <img src={menu} alt="" className="mr-2 md:hidden " />
    </div>
  );
};

export default Navigation;
// mx-auto mt-5 bg-[#F2F8F3] flex flex-col md:flex-row justify-between items-center px-4 md:px-10 lg:px-20