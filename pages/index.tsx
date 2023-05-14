
export default function Home() {
  return (
   
    <main>
       <div >
     <img
        src="https://www.nu-techassociates.co.uk/wp-content/uploads/2015/04/DSC0210.jpg"
        className=" brightness-90 -z-10 h-[700px] w-screen "
        alt="nth"
      />
       {/* <h1 className="text-white   text-5xl font-bold text-center mt-20 capitalize ">
        <span>Organize all your events in 1 place</span>
      </h1> */}
      <div className="">
      <h1 className="text-center text-5xl font-bold  p-12 mb-5">
        <span>Welcome To Nazamly</span>{" "}
      </h1>
      </div>
      <div className="bg-lowerhero brightness-75 bg-no-repeat bg-fill h-[800px] relative">
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
   
      </div>
      </main>
    
  );
}
