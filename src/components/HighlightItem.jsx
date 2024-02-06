import React from 'react'

const HighlightItem = ({img, name, unit}) => {
  return (
      <li className='grow'>
            <div className='bg-white p-6 rounded-xl'>
                <h5 className='text-gray-400'>{name}</h5>
                <div className='flex items-center gap-3 mt-6'>
                    <img src={img} alt="" srcset="" width='48px' />
                    <h1 className="text-5xl font-[400]">12 <span className='text-xl font-medium'>{unit}</span></h1>
                </div>
            </div>
        </li>
  )
}

export default HighlightItem
