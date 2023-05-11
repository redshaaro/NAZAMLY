import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";
import { useAppContext } from "@/context/appContext";
import {
  checkemptyLogin,
  checkuser,
  checkpassword,
} from "../../lib/validation";

import NavBar from "@/Components/NavBar";

const SignIn = () => {
  const [UserName, setUserName] = useState("");

  const [PassWord, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [uerr, setuerr] = useState(false);
  const [eerr, seteerr] = useState(false);
  const [perr, setperr] = useState(false);
  const [rep, setRep] = useState(false);
  const router = useRouter();
  const { setUser } = useAppContext();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const data = {
        UserName: UserName.trim(),
        PassWord: PassWord.trim(),
      };
      setLoading(true);

      if (checkemptyLogin(UserName, PassWord)) {
        const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (user.ok) {
          const res = await user.json();
          setUser(res);
          setLoading(false);
          localStorage.setItem("user", JSON.stringify(res)); // Save user object in local storage
          await router.push("/"); //should wait for it
        } else {
          setRep(true);
          setLoading(false);
          throw new Error("LogIn failed");
        }
      } else {
        setLoading(false);

        if (!checkuser(data.UserName)) {
          setuerr(true);
        }
        if (checkpassword(data.PassWord)) {
          setperr(true);
        }
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
          <p className="text-center  text-lg mt-4">Sign in</p>
          <form onSubmit={loginHandler} className="flex flex-col  p-3">
            {uerr ? (
              <p className="text-red-600 text-lg">
                please enter your user name
              </p>
            ) : (
              ""
            )}
            <input
              type="text"
              className="mb-5 focus:outline-none  border-b-2 text-lg  p-[4px]"
              placeholder="UserName"
              value={UserName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            {perr ? (
              <p className="text-red-600 text-lg">please enter your password</p>
            ) : (
              ""
            )}
            <input
              type="password"
              className="mb-5 focus:outline-none border-b-2 text-lg  p-[4px]"
              placeholder="Password"
              value={PassWord}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {loading ? (
              <p className="text-center mb-2 bg-blue-950 p-2 rounded-full text-white text-xl">
                Loading
              </p>
            ) : (
              <input
                type="submit"
                className="mb-2 bg-blue-950 p-2 rounded-full text-white text-xl cursor-pointer"
                placeholder="Create an account"
              />
            )}
            {rep ? (
              <p className="text-red-600 text-lg">
                Incorrect username or password
              </p>
            ) : (
              ""
            )}
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
