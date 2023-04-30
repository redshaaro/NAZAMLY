import React from "react";
import Link from "next/link";


const SignIn = () => {
  return (
    <div className="flex mt-20  p-6  justify-center shadow-lg h-[70vh] ">
      <div className="left w-[50%]">
        <h1 className="text-center text-xl font-bold ">
          Welcome back!
        </h1>
        <p className="text-center  text-lg mt-4">Login</p>
        <form className="flex flex-col  p-3">
          <input
            type="text"
            className="mb-5 focus:outline-none border-[#882ae2] text-lg rounded-lg border-2 p-[4px] text-[#882ae2]"
            placeholder="UserName"
          />
          
          <input
            type="text"
            className="mb-5 focus:outline-none border-[#882ae2] text-lg rounded-lg border-2 p-[4px] text-[#882ae2]"
            placeholder="Password"
          />
          <input
            type="submit"
            className="mb-2 bg-[#882ae2] p-2 rounded text-white text-xl cursor-pointer"
            
          />
        </form>
      </div>
      <div className="right flex flex-col items-center justify-center text-white text-[27px]  bg-[#882ae2] w-[50%] p-12 rounded">
        <p className="font-[900] mb-8">Glade To see you again !</p>
        <p>
          Don't have an account? <Link href="/SignUp"> <span className="cursor-pointer"  >SignUp</span></Link> 
        </p>
      </div>
    </div>
  );
};

export default SignIn;