import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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

      await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex mt-20  p-6  justify-center shadow-lg h-[70vh] ">
      <div className="left w-[50%]">
        <h1 className="text-center text-xl font-bold ">
          Enjoy Nazamly Features
        </h1>
        <p className="text-center  text-lg mt-4">Sign Up</p>
        <form onSubmit={signUpHandler} className="flex flex-col  p-3">
          <input
            type="text"
            className="mb-5 focus:outline-none border-[#882ae2] text-lg rounded-lg border-2 p-[4px] text-[#882ae2]"
            placeholder="UserName"
            value={UserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="text"
            className="mb-5 focus:outline-none border-[#882ae2] text-lg rounded-lg border-2 p-[4px] text-[#882ae2]"
            placeholder="Email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            className="mb-5 focus:outline-none border-[#882ae2] text-lg rounded-lg border-2 p-[4px] text-[#882ae2]"
            placeholder="Password"
            value={PassWord}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="submit"
            className="mb-2 bg-[#882ae2] p-2 rounded text-white text-xl cursor-pointer"
            placeholder="Create an account"
          />
        </form>
      </div>
      <div className="right flex flex-col items-center justify-center text-white text-[27px]  bg-[#882ae2] w-[50%] p-12 rounded">
        <p className="font-[900] mb-8">Glade To see you !</p>
        <p>
          Already have an account?{" "}
          <Link href="/SignIn">
            <span className="cursor-pointer">SignIn</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
