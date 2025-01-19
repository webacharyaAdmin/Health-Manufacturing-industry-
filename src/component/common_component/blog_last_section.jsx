import React from 'react'

const Last = ({heading,description}) => {
  return (
    <div className="w-full ">
      <div className="h-fit m-5 space-y-5 ">
        <label className="text-[1rem] font-semibold ">{heading}</label>
        <p className="text-[0.7rem]">{description}</p>
        <a href="" className='text-blue-600 text-[1rem]'>Read more.....</a>
      </div>
    </div>
  );
}

export default Last
