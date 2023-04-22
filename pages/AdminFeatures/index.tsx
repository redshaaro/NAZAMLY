import React from "react";
import prisma from "../../lib/prisma";
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/venues', { method: "GET" });
  const venues = await res.json();
  
  return {
    props: { venues },
    revalidate: 10,
  };
};

const AdminFeatures = ({ venues }) => {
  console.log(venues);
  return (
    <>
      <h1 className="text-center text-4xl mt-4 ">Welcome Admin</h1>
    </>
  );
};

export default AdminFeatures;
