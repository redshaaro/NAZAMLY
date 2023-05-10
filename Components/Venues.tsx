import Link from 'next/link'
import React from 'react'
 

const Venues = ({venue}) => {
  return (
    <section className='bg-black border-t-2  border-gray-900'>
    <h1 className='text-3xl font-semibold text-white ml-3 mt-3 '>View our Venues : </h1>
    <div className='flex flex-wrap gap-5 m-5'>
{venue?.map((place)=>
    <div key={place.id} className='w-[300px] h-[350px] flex flex-col items-center bg-white rounded-xl'>
        <Link href={`places/${place.id}`}>
        <img src={place.Image} alt="a photo for the event" className='rounded-lg h-[168px] w-[300px]' />
        </Link>
        <figcaption className='text-xl font-semibold'>{place.Name}</figcaption>
        <h1  className='mx-3 text-md '> {place.Description}</h1>
        <h1 className='ml-2 text-lg'>Status:{place.Available}</h1>
        <button className=' text-white p-4 bg-purple-950 rounded-full mt-2 '>Explore {place.Name}</button>
        </div>
        )}
    </div>
    </section>
  )
}

export default Venues
