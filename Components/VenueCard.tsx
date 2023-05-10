import Link from 'next/link'
import React from 'react'
import { CardProps } from '@/utils/interfaces'
const VenueCard = ({venue}:CardProps) => {
  return (
    <div className='w-[300px] h-full bg-black rounded-xl'>
  
        <Link href={`places/${venue.id}`}>
        <img src={venue.Image} alt="a photo for the event" className='rounded-lg' />
        </Link>
        <h1 className='text-white text-xl text-center font-semibold'>{venue.Name}</h1>
        <h1  className='mx-3 text-white   text-md '> {venue.Description.substring(0,50)}...</h1>
        <h1 className='ml-2 text-white text-lg'>Status: {venue.Available ? "Available":"not Avaliable"}</h1>
        <Link href={`places/${venue.id}`}>
        <button className='text-white p-4 bg-blue-950 rounded-full mt-2 mb-5 ml-5'>Explore {venue.Name}</button>
        </Link>
      
    
    </div>
  )
}


export default VenueCard