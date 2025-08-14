import { Hero } from "@/components/Hero";
import { Cars } from "@/components/Cars";
import { Popular } from "@/components/Popular";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Cars />
      <Popular />
    </main>
  )
}
