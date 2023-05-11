import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  checkempty,
  checkemail,
  checkpassword,
  checkuser,
} from "@/lib/validation";
import NavBar from "@/Components/NavBar";

const SignUp = () => {
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [PassWord, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [uerr, setuerr] = useState(false);
  const [eerr, seteerr] = useState(false);
  const [perr, setperr] = useState(false);
  const [rep, setRep] = useState(false);

  const router = useRouter();
  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = {
        UserName: UserName.trim(),
        Email: Email.trim(),
        PassWord: PassWord.trim(),
      };
      setLoading(true);

      if (checkempty(data.UserName, data.PassWord, data.Email)) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          router.push("/SignIn"); // Redirect to login page if response is success
          setLoading(false);
        } else {
          setLoading(false);
          throw new Error("Sign up failed"); // Throw an error to be caught by the catch block
        }
      } else {
        setLoading(false);
        if (!checkemail(data.Email)) {
          seteerr(true);
        }
        if (!checkuser(data.UserName)) {
          setuerr(true);
        }
        if (checkpassword(data.PassWord)) {
          setperr(true);
        }
      }
    } catch (err) {
      console.log(err);
      console.error("RECHECK YOUR CREDENITALS");
      setRep(true);
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
            {eerr ? (
              <p className="text-red-600 text-lg">please enter your Email </p>
            ) : (
              ""
            )}
            <input
              type="text"
              className="mb-5 focus:outline-none  border-b-2 text-lg  p-[4px]"
              placeholder="Email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
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
                Make sure your username is uniqe
              </p>
            ) : (
              ""
            )}
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
