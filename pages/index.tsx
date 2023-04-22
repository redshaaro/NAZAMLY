
import VenueCard from "@/Components/VenueCard/VenueCard";
import { Inter } from "next/font/google";

import Link from "next/link";
import prisma from '@/lib/prisma'

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
  console.log(venues)
  return <>
{/* <VenueCard></VenueCard> */}
  </>;
}
