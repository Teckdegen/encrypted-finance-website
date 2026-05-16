import { Hero } from "@/components/Hero";
import { CoreIntro } from "@/components/CoreIntro";
import { PrivacyPhilosophy } from "@/components/PrivacyPhilosophy";
import { Ecosystem } from "@/components/Ecosystem";
import { Community } from "@/components/Community";
import { ClosingStatement } from "@/components/ClosingStatement";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        {/* Dark sections */}
        <div className="bg-background bg-grid">
          <CoreIntro />
          <PrivacyPhilosophy />
          <Ecosystem />
          <Community />
        </div>
        {/* Light footer */}
        <ClosingStatement />
      </main>
    </div>
  );
}
