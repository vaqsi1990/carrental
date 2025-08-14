import { Hero } from "@/components/Hero";
import { Cars } from "@/components/Cars";
import { Popular } from "@/components/Popular";
import { Types } from "@/components/Types";

export default function Home() {
  return (
    <main className="h-screen bg-white ">
      <Hero />
      <Cars />
      <Popular />
      <Types />
    </main>
  )
}
