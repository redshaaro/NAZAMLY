import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const NavBar = ({ color }) => {
  const [user, setUserState] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUserState(JSON.parse(userData));
    }
  }, []);
 
  const logout = () => {
    localStorage.removeItem("user");
    router.reload();
  };
  return (
    <div
      className={`flex items-center  justify-between p-4 z-10 bg-transparent border-b-[0.1px] ${
        color ? "border-gray-200" : "border-gray-700"
      }`}
    >
      <Link href={"/"}>
        <aside
          className={`font-bold text-2xl bg-gradient-to-b ${
            color ? "from-black to-black" : "from-white to-blue-500"
          }  text-transparent bg-clip-text pl-2 `}
        >
          NAZAMLY
        </aside>
      </Link>
      <ul
        className={` flex items-center gap-5 mr-5 ${
          color ? "text-black" : "text-white"
        } text-lg`}
      >
        {user?.Role === "admin" && (
          <li>
            <Link href={"/AdminFeatures"}>
              <h1 className="font-semibold ">Dashboard</h1>
            </Link>
          </li>
        )}
        {user?.Role === "user" && (
          <li>
            <Link href={"/places"}>
              <h1 className="font-semibold ">Venues</h1>
            </Link>
          </li>
        )}
        <li>
          <Link href={"/events"}>
            <h1 className="font-bold ">Solutions</h1>
          </Link>
        </li>
        <li>
          <Link href={"/events"}>
            <h1 className="font-bold ">Pricing</h1>
          </Link>
        </li>
        <li>
          <Link href={"#customers"}>
            <h1 className="font-bold ">Customers</h1>
          </Link>
        </li>
        {!user ? (
          <>
            <li>
              <Link href={"SignUp"}>
                <h1 className="font-semibold text-white p-4 bg-blue-950 rounded-full">
                  JOIN US NOW!
                </h1>
              </Link>
            </li>
          </>
        ) : (
          <li className="font-semibold text-white p-3 bg-blue-950 rounded-full">
            <button  onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
