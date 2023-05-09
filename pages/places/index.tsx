import VenueCard from "@/Components/VenueCard";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import Link from "next/dist/client/link";
import NavBar from "@/Components/NavBar";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/venues", {
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
      `http://localhost:3000/api/venues/filter/?location=${location}&price=${price}$`,
      {
        method: "GET",
      }
    );
    const filtered = await res.json();
    setFiltered(filtered);
    console.log(filtered);
  };
  let venuesToRender = filtered.length ? filtered : venues;

  return (
    <div>
      <NavBar color={"black"}></NavBar>
      <select
        className="mt-4 p-4 text-2xl focus:outline-none cursor-pointer"
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
      <select
        className="mt-4 p-4 text-2xl focus:outline-none cursor-pointer"
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
      <div className="flex justify-between items-center flex-wrap p-6 mt-3">
        {venuesToRender.map((venue) => (
          <Card sx={{ width: 200, height: 300 }} key={venue.id}>
            <CardMedia
              sx={{ height: 140 }}
              image={venue.Image}
              title={venue.Name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {venue.Name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {venue.Available ? "Available" : "Reserved"}
              </Typography>
              <Link href={`/places/${venue.id}`}>
                <p>Explore it</p>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
