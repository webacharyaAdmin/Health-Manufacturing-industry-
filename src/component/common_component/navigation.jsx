import React from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";

const Navigation = () => {
  const li_item = ["Home", "Service", "Contact", "Blog", "Product", "AboutUs"];
  const li_style = "text-slate-800 font-xxs text-sm/[17px] font-sans";

  return (
    <div className=" flex items-center justify-between md:gap-x-80 px-4 md:justify-center rounded-full md:px-10 py-4 bg-[#F2F8F3] h-16 mt-7 md:rounded-none ">
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
      <button className=" hidden h-10 w-24 md:flex justify-center items-center  bg-[#279EFF] rounded-3xl text-white mt-4 md:mt-0">
        Login
      </button>
      <img src={menu} alt="" className="mr-2 md:hidden " />
    </div>
  );
};

export default Navigation;
// mx-auto mt-5 bg-[#F2F8F3] flex flex-col md:flex-row justify-between items-center px-4 md:px-10 lg:px-20