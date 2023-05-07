import React from 'react'
import { useInView } from 'react-intersection-observer';
import Image from "next/image"
const LowerHero = () => {
    const { ref:firstRef, inView:first} = useInView();
    const{ref:secondRef,inView:second}=useInView();
    const{ref:thirdRef,inView:Third}=useInView();
  return (
    <section id='hero-2' className='bg-gray-100'>
    <h1 ref={firstRef} className='text-center text-5xl font-bold  p-12 mb-5'><span className={`${first ?"fade-in":""}`}>Welcome To Nazamly</span> </h1>
    <div className='bg-lowerhero brightness-75 bg-no-repeat bg-cover h-screen relative'>
     <p ref={secondRef} className='text-5xl left-[15%] top-[30%] text-white font-bold absolute'><span className={`${second ?"fade-in" : ""}`}>Our Vision:</span></p>
    </div>
    <div className='bg-gray-950 h-[50vh] p-5'>
    <h1 className={`text-center text-white font-bold text-4xl ${Third?"fade-in":""}`}>Meet Our Favourite Customers</h1>
      <ul ref={thirdRef} className={`flex gap-20 justify-between p-10 flex-wrap ${Third?"fade-in":""}`}>
        <li className={`p-5 `}>
          <Image src={"/icon-1.png"} width={100} height={50}alt={''}></Image>
        </li>
        <li className='p-5'>
          <Image src={"/icon-2.png"} width={100} height={50} alt={''}></Image>
        </li>

        <li className='p-5'>
          <Image src={"/icon-8.png"} width={100} height={50}alt={''}></Image>
        </li>
        <li className='p-5'>
          <Image src={"/icon-9.png"} width={100} height={50}alt={''}></Image>
        </li>
        <li className='p-5'>
          <Image src={"/icon-10.png"} width={100} height={50}alt={''}></Image>
        </li>
        <li className='p-5'>
          <Image src={"/icon-11.png"} width={100} height={50}alt={''}></Image>
        </li>
        <li className='p-5'>
          <Image src={"/icon-6.png"} width={100} height={50} alt={''}></Image>
        </li>
        <li className='p-5'>
          <Image src={"/icon-12.png"} width={100} height={50}alt={''}></Image>

        </li>
        <li className='p-2'>
          <Image src={"/icon-3.png"} width={100} height={50} alt={''}></Image>
        </li>
        <li className='p-2'>
          <Image src={"/icon-4.png"} width={100} height={50} alt={''}></Image>
        </li>
        <li className='p-2'>
          <Image src={"/icon-5.png"} width={100} height={50} alt={''}></Image>
        </li>
        <li className='p-2'>
          <Image src={"/icon-7.png"} width={100} height={50}alt={''}></Image>
        </li>
      </ul>
    </div>
    </section>

  )
}

export default LowerHero