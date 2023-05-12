import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/Image";
const LowerHero = () => {
  // const { ref: firstRef, inView: first } = useInView();
  // const { ref: secondRef, inView: second } = useInView();
  // const { ref: thirdRef, inView: Third } = useInView();
  return (
    <section id="hero-2" className="bg-gray-100">
      <h1 className="text-center text-5xl font-bold  p-12 mb-5">
        <span>Welcome To Nazamly</span>{" "}
      </h1>
      <div className="bg-lowerhero brightness-75 bg-no-repeat bg-cover h-screen relative">
        <p className="text-5xl p-7 left-[10%] top-[30%] text-white font-bold absolute">
          <span
            className={`
              
          text-[21px] mt-[1rem] leading-[36px] tracking-[3px]`}
          >
            Our Vision:{""}
            <br />
            Our event management website is designed to simplify the process of
            planning, organizing and managing events of all sizes. Our vision is
            to provide a comprehensive platform that brings together event
            planners, vendors, and attendees, allowing them to seamlessly
            collaborate and communicate with each other.
          </span>
        </p>
      </div>
      <div className="bg-gray-950 h-full p-5">
        <h1
          className={`text-center text-white font-bold text-4xl
             
           `}
        >
          Meet Our Favourite Customers
        </h1>
        <ul className={`flex gap-20 justify-between p-10 flex-wrap`}>
          <li className={`p-5 `}>
            <Image src={"/icon-1.png"} width={100} height={50} alt={""}></Image>
          </li>
          <li className="p-5">
            <Image src={"/icon-2.png"} width={100} height={50} alt={""}></Image>
          </li>

          <li className="p-5">
            <Image src={"/icon-8.png"} width={100} height={50} alt={""}></Image>
          </li>
          <li className="p-5">
            <Image src={"/icon-9.png"} width={100} height={50} alt={""}></Image>
          </li>
          <li className="p-5">
            <Image
              src={"/icon-10.png"}
              width={100}
              height={50}
              alt={""}
            ></Image>
          </li>
          <li className="p-5">
            <Image
              src={"/icon-11.png"}
              width={100}
              height={50}
              alt={""}
            ></Image>
          </li>
          <li className="p-5">
            <Image src={"/icon-6.png"} width={100} height={50} alt={""}></Image>
          </li>
          <li className="p-5">
            <Image
              src={"/icon-12.png"}
              width={100}
              height={50}
              alt={""}
            ></Image>
          </li>
          <li className="p-2">
            <Image src={"/icon-3.png"} width={100} height={50} alt={""}></Image>
          </li>
          <li className="p-2">
            <Image src={"/icon-4.png"} width={100} height={50} alt={""}></Image>
          </li>
          <li className="p-2">
            <Image src={"/icon-5.png"} width={100} height={50} alt={""}></Image>
          </li>
          <li className="p-2">
            <Image src={"/icon-7.png"} width={100} height={50} alt={""}></Image>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LowerHero;
