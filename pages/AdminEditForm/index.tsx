import React, { useState } from "react";
const AdminEditForm = ({id}) => {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [Location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const  data = await { Name, Description, Capacity, price, Location };
       
      console.log(data);

      await fetch(`/api/venues/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      location.reload();


     
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
        type="submit"
        className="bg-blue-500 text-white text-[24px] mt-5 rounded"
      />
    </form>
  );
};

export default AdminEditForm;
