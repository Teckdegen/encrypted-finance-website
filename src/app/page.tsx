import { Hero } from "@/components/Hero";
import { CoreIntro } from "@/components/CoreIntro";
import { PrivacyPhilosophy } from "@/components/PrivacyPhilosophy";
import { Ecosystem } from "@/components/Ecosystem";
import { Community } from "@/components/Community";
import { ClosingStatement } from "@/components/ClosingStatement";
import { Navbar } from "@/components/Navbar";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative bg-[#f0ebe2]">
      {/* Global animated grid background */}
      <AnimatedBackground />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <CoreIntro />
        <PrivacyPhilosophy />
        <Ecosystem />
        <Community />
        <ClosingStatement />
      </main>
    </div>
  );
}
