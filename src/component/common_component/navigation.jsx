import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const li_item = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Services", path: "/services" },
];
const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/login");
  };

  const li_style = "text-slate-800 font-xxs text-sm/[17px] font-sans";
  
  return (
    <div className=" text-xs flex justify-between min-w-full items-center px-4 md:w-full  rounded-full md:flex md:justify-between  md:px-10 md:max-w-full py-4 bg-[#F2F8F3] h-16 md:mt-3 md:rounded-none ">
      <img src={logo} alt="heo" className="h-16 w-16 md:mb-0 overflow-hidden" />
      <ul className=" hidden  md:flex md:justify-center md:items-center md:gap-16 ">
        {li_item.map((item, index) => {
          return (
            <li key={index} className={li_style}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      {isLogin ? (
        <button className=" hidden md:h-8  md:w-[80px] md:text-sm md:flex justify-center items-center  bg-[#279EFF] rounded-3xl text-white ">
          <Link to="/login"> Login </Link>
        </button>
      ) : (
        <button
          className=" hidden md:h-8  md:w-[80px] md:text-sm md:flex justify-center items-center  bg-[#279EFF] rounded-3xl text-white "
          onClick={signOut}
        >
          Logout
        </button>
      )}

      <img src={menu} alt="" className="mr-2 md:hidden" onClick={handleClick} />
      {isOpen && (
        <div className="absolute top-20 left-0 w-full h-[25rem] bg-[#e9f0ea] p-5 md:hidden  self-center m-auto rounded-2xl">
          <ul className="flex flex-col gap-16  ">
            {li_item.map((item, index) => (
              <Link to={item.path}>
                <li key={index}>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
