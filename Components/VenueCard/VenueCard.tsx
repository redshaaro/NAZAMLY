import Link from 'next/link'
import React from 'react'
// interface CardProps{
//     Venue:{
//         title:string
//         imgurl:string
//         description:string
//         status:string
//     }[]
// }

const VenueCard = ({venues}) => {
    let id=1
    console.log(venues)
  return (
    <div className='w-[300px] h-[350px] flex flex-col items-center bg-black rounded-xl'>
        <Link href={`places/${id}`}>
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/226193605.jpg?k=a0947c8a3499887d23988080955150b71c94cfcc3c978f912ad27736c9974f6b&o=&hp=1" alt="a photo for the event" className='rounded-lg' />
        </Link>
        <h1 className='text-white text-xl font-semibold'>Golden Jewel</h1>
        <h1  className='mx-2 text-white text-md '> one of the best places to organize events in alexandria</h1>
        <h1 className='ml-2 text-white text-lg'>Status: Available</h1>
        <button className='text-white p-4 bg-purple-950 rounded-full mt-2'>Explore Golden Jewel</button>
    </div>
  )
}


export default VenueCard