import React from "react";
import Navbar from "./NavBar";
 
import img from "../public/distribution-header-footer.jpg";
import Image from 'next/image'
// import { useInView } from "react-intersection-observer";
const Hero = () => {
  // const { ref: firstRef, inView: first } = useInView();
  return (
    <section id="hero-1" className=" h-[650px] relative">
      <Navbar color="black"></Navbar>
      <div className=" brightness-90 z-[-1] h-[700px] w-screen top-0 absolute">
      <Image
        src={img}
        className=" brightness-90 z-[-1] h-[700px] w-screen top-0 absolute"
        width={1200}
        height={800}
        alt="nth"
        />
        </div>
          

      <h1 className="text-white   text-5xl font-bold text-center mt-20 capitalize ">
        <span>Organize all your events in 1 place</span>
      </h1>
    </section>
  );
};

export default Hero;
