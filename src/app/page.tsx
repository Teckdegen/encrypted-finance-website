import { Hero } from "@/components/Hero";
import { CoreIntro } from "@/components/CoreIntro";
import { PrivacyPhilosophy } from "@/components/PrivacyPhilosophy";
import { PrivacyComparison } from "@/components/PrivacyComparison";
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
          <PrivacyComparison />
        </div>
        {/* Light sections */}
        <Community />
        <ClosingStatement />
      </main>
    </div>
  );
}
