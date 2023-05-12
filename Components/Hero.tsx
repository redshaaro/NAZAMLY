import React from "react";
import Navbar from "./NavBar";
import Image from "next/image";
// import { useInView } from "react-intersection-observer";
const Hero = () => {
  // const { ref: firstRef, inView: first } = useInView();
  return (
    <section id="hero-1" className=" h-[650px] relative">
      <Navbar color={undefined}></Navbar>
      <Image
        src="https://s3.amazonaws.com/eventbrite-s3/marketing/landingpages/assets/photography/distribution-header-footer.jpg"
        className=" brightness-90 z-[-2] h-[700px] w-screen top-0 absolute"
        width={1200}
        height={800}
        alt="nth"
        loading="lazy"
        decoding="async"
        
      />

      <h1 className="text-white text-5xl font-bold text-center mt-20 capitalize ">
        <span>Organize all your events in 1 place</span>
      </h1>
    </section>
  );
};

export default Hero;
