import React from 'react'

const Box = ({heading,details}) => {
  return (
    <div className="w-full  h-fit px-5 md:w-[40rem]">
      <div className=" p-5 bg-[#f0fbef] rounded-2xl shadow-inner space-y-8 md:space-y-4">
        <label htmlFor="" className="text-lg font-medium ">
          {heading}
        </label>
        <p className="text-xs mr-2">{details}</p>
      </div>
    </div>
  );
}

export default Box;
