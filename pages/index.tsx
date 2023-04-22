import Navbar from "@/Components/Navbar/Navbar";
import VenueCard from "@/Components/VenueCard/VenueCard";
import { Inter } from "next/font/google";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <>
<VenueCard></VenueCard>
  </>;
}
