import Link from 'next/link'
import React from 'react'
import { CardProps } from '@/utils/interfaces'

const Venues = ({venue}:CardProps) => {
  return (
    <div>
    <h1 className='text-3xl font-semibold m-5 '>View our Venues : </h1>
    <div className='flex gap-5 m-5'>
{venue.map((place)=>
    <div key={place.id} className='w-[300px] h-[350px] flex flex-col items-center bg-black rounded-xl'>
        <Link href={`places/${place.id}`}>
        <img src={place.Image} alt="a photo for the event" className='rounded-lg h-[168px] w-[300px]' />
        </Link>
        <h1 className='text-white text-xl font-semibold'>{place.Name}</h1>
        <h1  className='mx-3 text-white text-md '> {place.Description}</h1>
        <h1 className='ml-2 text-white text-lg'>Status:{place.Available}</h1>
        <button className='text-white p-4 bg-purple-950 rounded-full mt-2 '>Explore {place.Name}</button>
        </div>
        )}
    </div>
    </div>
  )
}

export default Venues