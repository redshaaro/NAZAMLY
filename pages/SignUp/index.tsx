import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavBar from "@/Components/NavBar";

const SignUp = () => {
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [PassWord, setPassword] = useState("");
  const router = useRouter();
  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = {
        UserName,
        Email,
        PassWord,
      };
 
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/SignIn"); // Redirect to login page if response is success
      } else {
        throw new Error("Sign up failed"); // Throw an error to be caught by the catch block
      }
    } catch (err) {
      console.log(err);
      console.error("RECHECK YOUR CREDENITALS");
      // You can show an error message to the user here
    }
  };

  return (
    <>
      <NavBar color={"black"}></NavBar>
      <div className="flex p-6 bg-regbg bg-cover bg-no-repeat justify-center  h-screen ">
        <div className="mt-32 bg-white rounded-3xl p-10 h-fit ">
          <h1 className="text-center text-3xl font-bold ">
            Enjoy Nazamly Features & More
          </h1>
          <p className="text-center  text-lg mt-4">Sign Up</p>
          <form onSubmit={signUpHandler} className="flex flex-col  p-3">
            <input
              type="text"
              className="mb-5 focus:outline-none  border-b-2 text-lg  p-[4px]"
              placeholder="UserName"
              value={UserName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="text"
              className="mb-5 focus:outline-none  border-b-2 text-lg  p-[4px]"
              placeholder="Email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              className="mb-5 focus:outline-none border-b-2 text-lg  p-[4px]"
              placeholder="Password"
              value={PassWord}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
                <span className="cursor-pointer text-blue-950 font-bold">
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
