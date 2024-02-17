import React from 'react'

const HighlightItem = ({img, name, unit, value}) => {
  return (
      <li className='grow'>
            <div className='bg-white p-6 rounded-xl'>
                <h5 className='text-gray-400'>{name}</h5>
                <div className='flex items-center gap-3 mt-6'>
                    <img src={img} alt="" srcSet="" width='48px' />
                    <h1 className="text-5xl font-[400]">{value} <span className='text-xl font-medium'>{unit}</span></h1>
                </div>
            </div>
        </li>
  )
}

export default HighlightItem
