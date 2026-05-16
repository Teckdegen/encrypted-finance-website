import { Hero } from "@/components/Hero";
import { Compliance } from "@/components/Compliance";
import { Ecosystem } from "@/components/Ecosystem";
import { Community } from "@/components/Community";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-grid">
      <Navbar />
      <main>
        <Hero />
        <Compliance />
        <Ecosystem />
        <Community />
      </main>
    </div>
  );
}
