import React from 'react'

const Hero = () => {
  return (
    <section className='bg-black h-[650px] mt-5 relative'>
        {/* <video src="./heroVideo.mp4" autoPlay muted loop></video> */}
    <figure className='absolute z-[0]  w-[40%] h-[60%]  rounded-full  purple__gradient '></figure>
    <figure className='absolute z-[0]  w-[40%] h-[60%] right-[10%]  rounded-full blue__gradient '></figure>
    </section>
  )
}

export default Hero