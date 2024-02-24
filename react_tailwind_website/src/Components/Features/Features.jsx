import React from 'react';

const Features = () => {
    const laptopImage =
        'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    return (
        <div className='p-5 items-center md:flex justify-center gap-20 max-w-[1240px] mx-auto border border-transparent my-10'>
            {/* image */}
            <div className='features_img overflow-auto flex-1'>
                <img className='rounded-sm h-full' src={laptopImage} alt='Laptop' />
            </div>
            {/* content */}
            <div className='features_content flex flex-col justify-center gap-5 py-10 items-start border border-transparent flex-1'>
                <h2 className='text-3xl font-bold text-[green]'>Learn from Experts</h2>
                <div className='leading'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur doloremque qui ipsa nulla ab
                    voluptatem consectetur hic accusantium. Cum, porro error ea repudiandae ducimus illum laborum numquam dolorum
                    suscipit eos ipsam animi, tempora magni iure vitae alias, aliquid provident beatae tempore enim quasi quidem
                    eligendi. Officia doloribus accusamus rerum.
                </div>
                <div className='primary-btn bg-black p-3 rounded shadow cursor-pointer text-center text-white w-[50%]'>
                    Get Started
                </div>
            </div>
        </div>
    );
};

export default Features;
