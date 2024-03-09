import React from 'react'


export default function TopRatedMenu() {
    const tapRatedMenuLists = [
        { "category": "Pizza", "image": "https://images.pexels.com/photos/2180877/pexels-photo-2180877.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "category": "Burgers", "image": "https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "category": "Pasta", "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "category": "Sushi", "image": "https://images.pexels.com/photos/1028426/pexels-photo-1028426.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "category": "Salads", "image": "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "category": "Desserts", "image": "https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "category": "Seafood", "image": "https://images.pexels.com/photos/699544/pexels-photo-699544.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "category": "Mexican", "image": "https://images.pexels.com/photos/16311287/pexels-photo-16311287/free-photo-of-baked-cauliflower-on-plate-on-table.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "category": "Vegetarian", "image": "https://images.pexels.com/photos/7595073/pexels-photo-7595073.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "category": "Asian", "image": "https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { "category": "Sandwiches", "image": "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { "category": "Drinks", "image": "https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ];
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <h1 className='text-4xl font-bold text-orange-600 text-center '>
                Our Popular Menu
            </h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  gap-4 mt-4'>
                {
                    tapRatedMenuLists.map((item, index) => (
                        <div key={index} className='rounded-xl relative'>
                            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white text-left pl-4'>
                                <p className='font-bold text-2xl px-2 pt-4'>{item.category}</p>
                                <button className='absolute bottom-4 left-4 py-1 px-2 border-white bg-white hover:bg-orange-600 hover:text-white text-black rounded-xl'>Order Now</button>
                            </div>
                            <img className='max-h-[160px] w-full object-cover rounded-xl' src={item.image} alt={item.category} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
