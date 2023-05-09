import React, { useState } from "react";
import prisma from "../../lib/prisma";
import Link from "next/link";
import AdminEditForm from "../AdminEditForm";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/venues", {
    method: "GET",
  });
  const venues = await res.json();

  return {
    props: { venues },
  };
};

const AdminFeatures = ({ venues }) => {
  const [open, setOpen] = useState(null);
  const buttonHandler = async (action, id?) => {
    switch (action) {
      case "DELETE":
        await fetch(`http://localhost:3000/api/venues/${id}`, {
          method: "DELETE",
        });
        location.reload();
        break;
      case "EDIT":
        if (open === id) {
          setOpen(null);
        } else {
          setOpen(id);
        }
        break;
    }
  };
  return (
    <>
      <h1 className="text-center text-4xl mt-4 ">Welcome Admin</h1>
      <div className="relative">
        <Link
          className="bg-purple-900 absolute right-0 top-0 text-white p-4 m-8 rounded text-[1.4rem] "
          href="/AdminAddForm"
        >
          Add Venue
        </Link>
      </div>
      <div className="flex mt-[7rem] justify-around flex-wrap p-4  ">
        {venues.map((item) => {
          const [isAvailable, setIsAvailable] = useState(item.Available);
          return (
            <div
              key={item.id}
              className=" w-[300px] h-[350px] flex flex-col items-center bg-black rounded-xl "
            >
              <Link href={`places/${item.id}`}>
                <img
                  src={item.Image}
                  alt="a photo for the event"
                  className="rounded-lg h-[168px] w-[300px]"
                />
              </Link>
              <p className=" text-white text-xl mt-1  font-semibold">
                {item.Name}
              </p>
              

              <p className="ml-2 text-white mt-1  text-lg">
                {isAvailable ? "AVAILABLE" : "NOT AVAILABLE"}
              </p>

              <div className="flex">
                <button
                  onClick={() => {
                    buttonHandler("DELETE", item.id);
                  }}
                  className="text-white block p-2  w-[5rem] mr-2 mt-11 before: bg-purple-950 rounded-full  "
                >
                  DELETE
                </button>
                <button
                  onClick={() => {
                    buttonHandler("EDIT", item.id);
                  }}
                  className="text-white block p-2 w-[5rem] mt-11   bg-purple-950 rounded-full  "
                >
                  EDIT
                </button>
              </div>

              {open === item.id ? <AdminEditForm id={item.id}></AdminEditForm> : ""}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdminFeatures;
