import React from 'react';

const SubNavbar = () => {
    const subNavLinks = [
        {
            name: "Home",
            path: "#"
        },
        {
            name: "Top Rated",
            path: "#"
        },
        {
            name: "Kids Wear",
            path: "#"
        },
        {
            name: "Mens Wear",
            path: "#"
        },
        {
            name: "Electronics",
            path: "#"
        },
        {
            name: "Trending Items",
            items: [
                {
                    name: "Trending 1",
                    path: "#"
                },
                {
                    name: "Trending 2",
                    path: "#"
                },
                {
                    name: "Trending 3",
                    path: "#"
                },
                {
                    name: "Trending 4",
                    path: "#"
                }
            ]
        }
    ];

    return (
        <div className='bg-white shadow-sm hidden sm:block '>
            <div className="sub-navbar  container p-4">
                <ul className="flex justify-center gap-10 ">
                    {subNavLinks.map((link, index) => (
                        <li key={index}>
                            {Array.isArray(link.items) ? (
                                <div className="group">
                                    <button className="nav-link group-hover:text-primary">
                                        {link.name}
                                    </button>
                                    <div className="hidden group-hover:block bg-white p-2 absolute space-y-2">
                                        {link.items.map((item, itemIndex) => (
                                            <a key={itemIndex} href={item.path} className="block text-gray-700 hover:text-blue-500">
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a href={link.path} className="nav-link  text-black hover:underline hover:text-primary hover:font-bold">
                                    {link.name}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SubNavbar;
