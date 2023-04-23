import { Inter } from "next/font/google";
import Venues from "@/Components/Venues";
import Hero from "@/Components/Hero";

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/venues', { method: "GET" });
  const venues = await res.json();

  return {
    props: { venues },
    revalidate: 10,
  };
};
const inter = Inter({ subsets: ["latin"] });

export default function Home({venues}) {
  return <>
  <Hero></Hero>
  <Venues venue={venues}></Venues>

  </>;
}
