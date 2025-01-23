import React, { useState } from 'react';

const ProductPage = () => {
    const [filters, setFilters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


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

        <div className="flex flex-col md:flex-row p-4">
            {/* Filter Section */}
            <div className="w-full md:w-1/4 p-4">
                <h2 className="text-xl font-bold mb-2">Filter</h2>
                <p className="mb-4">Select filter according to your need</p>
                <div className="space-y-4">
                    {['Filter 1', 'Filter 2', 'Filter 3', 'Filter 4', 'Filter 5'].map((filter, index) => (
                        <div key={index}>
                            <button
                                className="w-full text-left font-semibold"
                                onClick={() => handleFilterClick(filter)}
                            >
                                {filter}
                            </button>
                            {filters.includes(filter) && (
                                <div className="ml-4 mt-2 space-y-2">
                                    {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'].map((category, idx) => (
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
                    ))}
                </div>
            </div>

            {/* Product Section */}
            <div className="w-full md:w-3/4 p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Advanced Solutions for Optimal Health</h2>
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={clearAllFilters}>
                        Clear All
                    </button>
                </div>
                <div className="relative mb-4">
                    <input
                        type="text"
                        className="w-full p-2 pl-10 border rounded"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="absolute left-3 top-3 text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {filters.map((filter, index) => (
                        <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full">
                            {filter}
                        </span>
                    ))}
                </div>
                <div>
                    <p>Filtered products will be displayed here.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;