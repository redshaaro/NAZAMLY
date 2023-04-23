import Link from 'next/link'
import React from 'react'
import { CardProps } from '@/utils/interfaces'
const VenueCard = ({venue}:CardProps) => {
  return (
    <div className='w-[300px] h-[350px] flex flex-col items-center bg-black rounded-xl'>
    {venue.map((place)=>
    <>
        <Link href={`places/${place.id}`}>
        <img src={place.Image} alt="a photo for the event" className='rounded-lg' />
        </Link>
        <h1 className='text-white text-xl font-semibold'>{place.Name}</h1>
        <h1  className='mx-3 text-white text-md '> {place.Description}</h1>
        <h1 className='ml-2 text-white text-lg'>Status:{place.Available}</h1>
        <button className='text-white p-4 bg-purple-950 rounded-full mt-2'>Explore {place.Name}</button>
        </>
        )}
    </div>
  )
}


export default VenueCard