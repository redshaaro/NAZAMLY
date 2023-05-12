import React, { useState } from "react";
import { useRouter } from "next/router";

const AdminAddForm = () => {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [Location, setLocation] = useState("");
  const [Image, setImage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await {
        Name,
        Description,
        Capacity,
        price,
        Location,
        Image,
      };

      console.log(data);

      await fetch(`https://nazamly.vercel.app/api/venues`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      await router.push("/AdminFeatures");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-10 ">
      <input
        className="mt-5 border border-solid border-gray-500 p-2 rounded text-[24px] focus:outline-none text-blue-500"
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={Name}
      />
      <input
        className="mt-5 border border-solid border-gray-500 p-2 rounded text-[24px] focus:outline-none  text-blue-500"
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={Description}
      />
      <input
        className="mt-5 border border-solid border-gray-500 p-2 rounded text-[24px] focus:outline-none  text-blue-500"
        type="text"
        placeholder="Capacity"
        onChange={(e) => {
          setCapacity(e.target.value);
        }}
        value={Capacity}
      />
      <input
        className="mt-5 border border-solid border-gray-500 p-2 rounded text-[24px] focus:outline-none  text-blue-500"
        type="text"
        placeholder="price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      <input
        className="mt-5 border border-solid border-gray-500 p-2 rounded text-[24px] focus:outline-none  text-blue-500"
        type="text"
        placeholder="Location"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        value={Location}
      />
      <input
        className="mt-5 border border-solid border-gray-500 p-2 rounded text-[24px] focus:outline-none  text-blue-500"
        type="text"
        placeholder="Image"
        onChange={(e) => {
          setImage(e.target.value);
        }}
        value={Image}
      />
      <input
        type="submit"
        className="bg-blue-500 text-white text-[24px] mt-5 rounded"
      />
    </form>
  );
};

export default AdminAddForm;
