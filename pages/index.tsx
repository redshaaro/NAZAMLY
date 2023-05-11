import { Inter } from "next/font/google";
import Hero from "@/Components/Hero";
import LowerHero from "@/Components/LowerHero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <LowerHero></LowerHero>
    </>
  );
}
