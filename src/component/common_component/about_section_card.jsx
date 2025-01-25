import React from 'react'

const Card = ({number,details}) => {
  return (
    <div>
      <div className="h-[12rem] w-[35vh] flex gap-5 mt-7 rounded-xl flex-col p-3 shadow-xl bg-white md:h-[15rem] md:w-[18rem]">
        <label className="text-[2.5rem] font-semibold m-1 text-zinc-700">
          {number}
        </label>
        <label className="mt-auto self-baseline font-medium text-zinc-700">
          {details}
        </label>
      </div>
    </div>
  );
}

export default Card
