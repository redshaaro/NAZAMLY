import React from 'react'

const VenueCard = () => {
  return (
    <div className='w-[300px] h-[300px] flex flex-col items-center bg-black rounded-xl'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/226193605.jpg?k=a0947c8a3499887d23988080955150b71c94cfcc3c978f912ad27736c9974f6b&o=&hp=1" alt="a photo for the event" className='rounded-lg' />
        <h1 className='text-white text-xl font-semibold'>Golden Jewel</h1>
        <h1  className='ml-2 text-white text-lg '> one of the best places to organize events in alexandria</h1>
    </div>
  )
}

export default VenueCard