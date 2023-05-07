import React from 'react'
import { VenueProps, fetcher } from '@/utils/interfaces'
import useSWR from "swr"
import { useRouter } from 'next/router'
import Navbar from '@/Components/NavBar'
const EventId = () => {
const router=useRouter()
const {id}=router.query
  const fetchPlace=useSWR(`http://localhost:3000/api/venues/${id}`,fetcher)
  if(fetchPlace.error)
  return(
    <div>
      {fetchPlace.error}
    </div>
  )
  const {data}=fetchPlace as VenueProps
  if(fetchPlace.isLoading)
  return(
    <div>
      <Navbar></Navbar>
      <h1 className='text-4xl text-center font-bold mt-20 capitalize'>Hold on pulling data from the server</h1>
    </div>
  )

  if(data)
  return (
    <div className='bg-gradient-to-b from-blue-950 to-black h-[200vh] '>
      <Navbar></Navbar>
      <img src={data[0].Image} className='p-4 rounded-3xl mt-3 float-right' alt="" />
      <div className='bg-white md:max-w-[35%] max-w-[90%]  max-h-[60%] float-left ml-4 mt- rounded-2xl p-7 '>
        <div className='flex gap-[100px] '>
        <ul className='flex flex-col gap-5'>
          <li>
          <p className='text-3xl font-semibold'><span className='bg-gradient-to-bl from-blue-700 text-transparent bg-clip-text to-black '>Name:</span> {data[0].Name}</p>
          </li>
          <li>
          <p className='text-3xl font-semibold'><span className='bg-gradient-to-bl from-blue-700 text-transparent bg-clip-text to-black '>Location:</span> {data[0].Location}</p>
          </li>
        </ul>
        <ul className='flex flex-col gap-5'>
          <li>
          <p className='text-3xl font-semibold'><span className='bg-gradient-to-bl from-blue-700 text-transparent bg-clip-text to-black '>Capacity:</span> {data[0].Capacity}</p>
          </li>
          <li>
          <p className='text-3xl font-semibold'><span className='bg-gradient-to-bl from-blue-700 text-transparent bg-clip-text to-black '>Description: </span>{data[0].Description}
          </p>
          </li>
        </ul>
   
        </div>
       
      


      </div>
    </div>
  )
}

export default EventId