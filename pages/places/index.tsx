import VenueCard from "@/Components/VenueCard";
import { useState } from "react";
import NavBar from "@/Components/NavBar";
 

export async function getStaticProps() {
  const res = await fetch("https://nazamly.vercel.app/api/venues", {
    method: "GET",
  });
  const venues = await res.json();
  return {
    props: {
      venues,
    },
  };
}
const Index = ({ venues }) => {
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [filtered, setFiltered] = useState([]);
  const filter = async (price, location) => {
    const res = await fetch(
      `https://nazamly.vercel.app/api/venues/filter/?location=${location}&price=${price}$`,
      {
        method: "GET",
      }
    );
    const filtered = await res.json();
    setFiltered(filtered);
  };
  let venuesToRender = filtered?.length ? filtered : venues;
  return (
    <div>
      <NavBar color={"black"}></NavBar>
      <ul className="flex gap-10 pl-7 mt-10">
        <li>
          <label
            htmlFor="location"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Select a location
          </label>
          <select
            id="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-[130px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900"
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
              filter(price, event.target.value);
            }}
          >
            <option value="">All</option>
            <option value="Alexandria">Alexandria</option>
            <option value="Cairo">Cairo</option>
            <option value="Luxor">Luxor</option>
          </select>
        </li>
        <li>
          <label
            htmlFor="price"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Select a price
          </label>
          <select
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[130px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);

              filter(event.target.value, location);
            }}
          >
            <option value="">All</option>
            <option value="200">200$</option>
            <option value="85">85$</option>
            <option value="100">100$</option>
          </select>
        </li>
      </ul>
      <div className="flex justify-between items-center flex-wrap p-6 mt-3">
        <ul className="flex flex-col md:flex-row gap-5 justify-center">
          {venuesToRender?.map((venue) => (
            <li key={venue.id}>
              <VenueCard venue={venue}></VenueCard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
