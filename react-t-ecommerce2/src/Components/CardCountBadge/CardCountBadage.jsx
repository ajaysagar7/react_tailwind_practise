import React from 'react'

function CardCountBadage({ value }) {
    return (
        <div className='absolute bg-red-600 rounded-full grid place-items-center -right-3 -top-1 text-[14px] text-white w-[25px] h-[25px]'>
            {value}

        </div>
    )
}

export default CardCountBadage
