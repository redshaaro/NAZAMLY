import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";
import { useAppContext } from "@/context/appContext";

import NavBar from "@/Components/NavBar";


const SignIn = () => {
  const [UserName, setUserName] = useState("");

  const [PassWord, setPassword] = useState("");
  const router = useRouter();
  const { setUser } = useAppContext();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const data = {
        UserName,
        PassWord,
      };

      const user = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (user.ok) {
        const res = await user.json();
        setUser(res);
        localStorage.setItem("user", JSON.stringify(res)); // Save user object in local storage
        await router.push("/"); //should wait for it
      } else {
        throw new Error("LogIn failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar color={"black"}></NavBar>
      <div className="flex p-6 bg-signinbg bg-cover bg-no-repeat justify-center h-screen ">
        <div className="mt-32 bg-white rounded-3xl p-10 h-fit ">
          <h1 className="text-center text-3xl font-bold ">
            Enjoy Nazamly Features & More
          </h1>
          <p className="text-center  text-lg mt-4">Sign Up</p>
          <form onSubmit={loginHandler} className="flex flex-col  p-3">
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
            <p className="font-semibold">
              New here ?{" "}
              <Link href="/SignUp">
                <span className="cursor-pointer text-blue-950 font-bold">
                  Sign Up Now!
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
