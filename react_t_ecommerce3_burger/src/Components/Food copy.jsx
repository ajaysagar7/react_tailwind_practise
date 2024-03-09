import React, { useEffect } from 'react'
import foodData from '../data/food_data';

function Food() {
    const filterTypesList = foodData.map((item) => item.category);
    filterTypes = [...new Set(filterTypesList)]



    const filterPriceLists = foodData.map((item) => item.rate)
    const filterPrice = [...new Set(filterPriceLists)]

    // const filterDollarPriceLists = foodData.map((item) => item.dollarPrice)
    // const filterDollarPrice = [...new Set(filterDollarPriceLists)]
    return (
        <div className="foodContainer.max-w-[1640px].mx-auto.p-4 text-left">
            <h1 className="text-4xl font-bold text-[orange] text-center underline underline-offset-2">
                Top Rated Menu
            </h1>
            {/* FITLER TYPE ROW */}
            <div>
                <p className='text-3xl mb-2 mt-4 font-medium' >Filter Type</p>
                <div className='flex justify-between gap-4'>
                    {
                        filterTypes.map((item, index) => (
                            <div key={index} className='border-orange text-orange  p-2 cursor-pointer rounded-lg hover:text-white hover:bg-[orange] hover:border-[orange]'>
                                <h1>{item}</h1>
                            </div>
                        ))
                    }
                </div>

            </div>

            {/* FILTER PRICE ROW */}
            <div>
                <p className='text-3xl mb-2 mt-4 font-medium' >Filter Price</p>
                <div className='flex justify-between gap-4'>
                    {
                        filterPrice.map((item, index) => (
                            <div key={index} className='bg-gray-200 p-2 cursor-pointer rounded-md hover:text-white hover:bg-[orange] hover:border-[orange]'>
                                <h1>{item}</h1>
                            </div>
                        ))
                    }
                </div>






            </div>
        </div>
    )
}

export default Food
