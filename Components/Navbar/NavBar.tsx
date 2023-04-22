import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mt-3'>
        <Link href={"/"}>
        <aside className='font-bold text-2xl bg-gradient-to-b from-blue-500 to-purple-950 text-transparent bg-clip-text pl-2'>NAZAMLY</aside>
        </Link>
        <ul className='flex items-center gap-5 mr-5 '>
            <li>
                <Link href={"/events"}>
                <h1  className='font-semibold '>Solutions</h1>
                </Link>
            </li>
            <li>
                <Link href={"/events"}>
                <h1 className='font-semibold '>Pricing</h1>
                </Link>
            </li>
            <li>
            <Link href={"#customers"}>
                <h1 className='font-semibold '>Customers</h1>
                </Link>
            </li>
            <li>
            <Link href={"#customers"}>
                <h1 className='font-semibold text-purple-800'>SIGN IN</h1>
                </Link>
            </li>
            <li>
            <Link href={"#customers"}>
                <h1 className='font-semibold text-purple-800 rounded-full'>JOIN US NOW!</h1>
                </Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar