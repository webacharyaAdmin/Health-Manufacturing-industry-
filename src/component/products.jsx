import React, { useState } from "react";
import Navigation from "./common_component/navigation";
import icon_search from "../assets/ion_search.png";
import filter_icon from "../assets/filter_mobile.png";
import { Imagex } from "./img_collection";
import sub_product from "../assets/sub_main_product1.png";
import img from "../assets/discount.png";
import Footer from "./common_component/footer";

const Products = () => {
  const [filters, setFilters] = useState(Imagex);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterClick = (filter) => {
    setFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  const clearAllFilters = () => {
    setFilters([]);
  };

  return (
    <div className="p-3 max-w-full max-h-full ">
      <div>
        <Navigation />
        <div className="space-y-5 flex flex-col md:flex-row md:scale-y-10 gap-5">
          {/* filter section */}
          <div className="hidden w-full md:w-[20rem] md:h-[40rem] p-4 md:block md:p-5 md:mt-10  overflow-y-scroll  ">
            <div>
              <h2 className="text-xl font-bold mb-2">Filter</h2>

              <p className="mb-4">Select filter according to your need</p>
            </div>
            <div className="w-full space-y-10 mt-20 flex flex-col items-center justify-center ">
              {["Product Type", "Health", "Usage", "AgeGroup", "PriceRang"].map(
                (filter, index) => (
                  <div key={index}>
                    <button
                      className="w-[18rem] h-12 text-left font-semibold bg-sky-500 justify-center flex items-center rounded-3xl text-white"
                      onClick={() => handleFilterClick(filter)}
                    >
                      {filter}
                    </button>
                    {filters.includes(filter) && (
                      <div className="ml-2 mt-2 space-y-2 w-fit flex justify-center items-center text-sm flex-wrap">
                        {[
                          "Supplements",
                          "Devices",
                          "Skincare",
                          "Skincare",
                          "Supplements",
                        ].map((category, idx) => (
                          <button
                            key={idx}
                            className="block w-full text-left"
                            onClick={() => handleFilterClick(category)}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          {/* product section */}
          <div className="bg-white w-full h-fit shadow-xl hover:border-none md:w-[80vw] md:h-[40rem] md:overflow-y-scroll">
            <div className="relative w-full max-w-md">
              <span className="absolute inset-y-0 left-5 flex items-center pl-3">
                <img
                  src={icon_search}
                  alt="Search Icon"
                  className="w-4 h-4 text-gray-500"
                />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full h-10 pl-10 pr-4 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none md:m-5 "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center py-5 px-5 ">
              <label className="text-sm md:text-xl">
                Advanced Solutions for Optimal Health.
              </label>
              <div className="flex gap-3">
                <img src={filter_icon} alt="" className="md:hidden" />
                <button
                  className="border-[0.02rem] p-2 text-xs md:text-base "
                  onClick={clearAllFilters}
                >
                  clear all
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4 px-5 ">
              {filters.map((filter, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                >
                  {filter}
                </span>
              ))}
            </div>
            <div className="md:flex md:flex-wrap m-5 gap-5 ">
              {filters.map((img, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center w-full h-full md:w-[19rem] md:h-[19rem] md:flex-wrap"
                  >
                    <img src={img} alt="" className="h-full w-full mt-5" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full md:h-full md: my-5 flex overflow-x-scroll gap-3 scroll-smooth md:p-10 justify-center">
          <div className="min-w-[14rem] md:w-full md:h-[30rem]">
            <img src={sub_product} alt="" className="h-76 w-76" />
            <label className="text-[#7A6DAC] w-[5rem] md:text-3xl">
              Herbal Medicine Bottle Labels
            </label>
          </div>
          <div className="min-w-[14rem] md:w-full md:h-[30rem">
            <img src={sub_product} alt="" className="h-76 w-76" />
            <label className="text-[#7A6DAC] w-[5rem] md:text-3xl">
              Herbal Medicine Bottle Labels
            </label>
          </div>
          <div className="min-w-[14rem] md:w-full md:h-[30rem]">
            <img src={sub_product} alt="" className="h-76 w-76" />
            <label className="text-[#7A6DAC] w-[5rem] md:text-3xl">
              Herbal Medicine Bottle Labels
            </label>
          </div>
          <div className="min-w-[14rem] md:w-full md:h-[30rem]">
            <img src={sub_product} alt="" className="h-76 w-76" />
            <label className="text-[#7A6DAC] w-[5rem] md:text-3xl">
              Herbal Medicine Bottle Labels
            </label>
          </div>
        </div>
        <div
          className="h-[30rem] w-full p-5 bd-cover bg-center rounded-2xl flex flex-col md:w-[100rem] m-auto"
          style={{ backgroundImage: `url(${img})` }}
        >
          <label htmlFor="" className="text-2xl text-white font-medium">
            Sleeping body <br /> Wash
          </label>
          <p
            htmlFor=""
            className="text-3xl font-bold mt-auto self-baseline text-white"
          >
            50% off on Body wash
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Products;
