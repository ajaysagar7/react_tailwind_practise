import React, { useEffect } from 'react';
import foodData from '../data/food_data';
import { useState } from 'react';

function Food() {
    let filterTypesList = ['Burger', 'Pizza', 'Salad', 'Chicken']; // Replace this with your actual list
    let uniqueFilterTypes = [...new Set(filterTypesList)];
    let filterTypes = ['All', ...uniqueFilterTypes];

    const [filterFoodLists, setFilterFoodLists] = useState(foodData);
    const [selectedType, setSelectedType] = useState('All');

    const filterTypeClicked = (type) => {
        console.log(type);
        setSelectedType(type);
        updateFilteredData(type);
    };

    const updateFilteredData = (type) => {
        if (type === 'All') {
            setFilterFoodLists(foodData);
        } else {
            setFilterFoodLists(foodData.filter((item) => item.category === type));
        }
    };

    useEffect(() => {
        updateFilteredData(selectedType);
    }, [selectedType]);

    return (
        <div className="foodContainer max-w-[1640px] mx-auto p-4 text-left">
            <h1 className="text-4xl font-bold text-orange-600 font text-center underline underline-offset-2">
                Top Rated Menu
            </h1>
            {/* FILTER BY CATEGORY */}
            <div>
                <p className="sm:text-3xl text-2xl mb-5 font-medium mt-5">Filter By Category</p>
                <div className="flex flex-wrap gap-4">
                    {filterTypes.map((item, index) => (
                        <div
                            key={index}
                            className={`border-orange-600 border-2 text-white hover:bg-orange-600 hover:text-white hover:text-center py-1 px-3 rounded-full ${selectedType === item ? 'border-white border-2 bg-orange-600 text-white' : 'text-orange-600'
                                }`}
                            onClick={() => filterTypeClicked(item)}
                        >
                            <h1>{item}</h1>
                        </div>
                    ))}
                </div>
            </div>
            {/* FOOD LISTS */}
            <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
                {filterFoodLists.length > 0 ? (
                    filterFoodLists.map((item, index) => (
                        <div key={index}>
                            {/* card content */}

                            <div className='rounded-xl overflow-hidden shadow-md '>

                                <img src={item.image} alt="Image" className='rounded-xl object-cover w-full h-[180px] hover:scale-105 duration-200 cursor-pointer scale-100' />
                                <div className='flex justify-between p-2 align-center'
                                >
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>

                                </div>
                            </div>


                        </div>
                    ))
                ) : (
                    <p className="text-red-500">No products found based on your filter.</p>
                )}
            </div>
        </div>
    );
}

export default Food;
