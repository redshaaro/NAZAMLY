import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUserState] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUserState(JSON.parse(userData));
    }
  }, []);

  console.log(user);
  const logout = () => {
    localStorage.removeItem("user");
    router.reload();
  };

  return (
    <div className="flex items-center justify-between mt-3 ">
      <Link href={"/"}>
        <aside className="font-bold text-2xl bg-gradient-to-b from-blue-500 to-purple-950 text-transparent bg-clip-text pl-2">
          NAZAMLY
        </aside>
      </Link>
      <ul className="flex items-center gap-5 mr-5 ">
        {user?.Role === "admin" && (
          <li>
            <Link href={"/AdminFeatures"}>
              <h1 className="font-semibold ">Dashboard</h1>
            </Link>
          </li>
        )}
        <li>
          <Link href={"/events"}>
            <h1 className="font-semibold ">Solutions</h1>
          </Link>
        </li>
        <li>
          <Link href={"/events"}>
            <h1 className="font-semibold ">Pricing</h1>
          </Link>
        </li>
        <li>
          <Link href={"#customers"}>
            <h1 className="font-semibold ">Customers</h1>
          </Link>
        </li>
        <li>
          <Link href={"/SignUp"}>
            <h1 className="font-semibold text-purple-800">Registration</h1>
          </Link>
        </li>

        {user ? (
          <li>
            <button
              onClick={() => {
                logout();
              }}
              className="font-semibold text-white p-4 bg-purple-900 rounded-full"
            >
              Logout
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default Navbar;
