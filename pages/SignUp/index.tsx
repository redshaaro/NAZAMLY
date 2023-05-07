import React from "react";
import Link from "next/link";
import NavBar from "@/Components/NavBar";


const SignUp = () => {
  return (
    <>
    <NavBar color={'black'}></NavBar>
    <div className="flex p-6 bg-regbg bg-cover bg-no-repeat justify-center  h-screen ">
      <div className="mt-32 bg-white rounded-3xl p-10 h-fit ">
        <h1 className="text-center text-3xl font-bold ">
          Enjoy Nazamly Features & More
        </h1>
        <p className="text-center  text-lg mt-4">Sign Up</p>
        <form className="flex flex-col  p-3">
          <input
            type="text"
            className="mb-5 focus:outline-none  border-b-2 text-lg  p-[4px]"
            placeholder="UserName"
          />
          <input
            type="text"
            className="mb-5 focus:outline-none  border-b-2 text-lg  p-[4px]"
            placeholder="Email"
          />
          <input
            type="text"
            className="mb-5 focus:outline-none border-b-2 text-lg  p-[4px]"
            placeholder="Password"
          />
          <input
            type="submit"
            className="mb-2 bg-blue-950 p-2 rounded-full text-white text-xl cursor-pointer"
            placeholder="Create an account"
          />
        </form>
        <div className="text-center">
        <p className="font-semibold mb-2 w">Glad To see you !</p>
        <p>
          Already have an account?{" "}
          <Link href="/SignIn">
          <span
            className="cursor-pointer text-blue-950 font-bold"
             
          >
            SignIn
          </span>
          </Link>
         
        </p>
      </div>
      </div>
     
    </div>
    </>
  );

};

export default SignUp;
