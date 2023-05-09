import Link from "next/link";
import React, { useState } from "react";

const NavBar = ({color}) => {
  return (
    <div className='flex items-center justify-between p-4 z-10 bg-transparent border-b-[0.1px] border-gray-700'>
        <Link href={"/"}>
        <aside className={`font-bold text-2xl bg-gradient-to-b from-white ${color ? "to-black":"to-blue-100"}  text-transparent bg-clip-text pl-2`}>NAZAMLY</aside>
        </Link>
        <ul className={`hidden  md:flex items-center gap-5 mr-5 ${color ?"text-black":"text-white"} text-lg`}>
        <li>
                <Link href={"/AdminFeatures"}>
                <h1  className='font-bold '>Dashboard</h1>
                </Link>
            </li>
            <li>
                <Link href={"/events"}>
                <h1  className='font-bold '>Solutions</h1>
                </Link>
            </li>
            <li>
                <Link href={"/events"}>
                <h1 className='font-bold '>Pricing</h1>
                </Link>
            </li>
            <li>
            <Link href={"#customers"}>
                <h1 className='font-bold '>Customers</h1>
                </Link>
            </li>
            <li>
            <Link href={"/SignUp"}>
                <h1 className='font-bold'>Registration</h1>
                </Link>
            </li>
            <li>
            <Link href={"SignUp"}>
                <h1 className='font-semibold text-white p-3 bg-blue-950 rounded-full'>JOIN US NOW!</h1>
                </Link>
            </li>
            
        </ul>
    </div>
  )
}
export default NavBar