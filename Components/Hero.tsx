import React from 'react'

const Hero = () => {
  return (
    <section className=' bg-black bg-gradient-conic h-[650px] mt-5 relative'>
        {/* <video src="./heroVideo.mp4" autoPlay muted loop></video> */}
        <h1 className='text-white z-10'></h1>
    <figure className='absolute z-[0]  w-[40%] h-[70%] left-[5%] rounded-full  purple__gradient '></figure>
    <figure className='absolute z-[0]  w-[40%] h-[70%] right-[13%]  rounded-full blue__gradient '></figure>
 

    </section>
  )
}

export default Hero