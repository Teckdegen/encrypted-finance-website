import { Hero } from "@/components/Hero";
import { CoreIntro } from "@/components/CoreIntro";
import { PrivacyPhilosophy } from "@/components/PrivacyPhilosophy";
import { ConfidentialProtocols } from "@/components/ConfidentialProtocols";
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
          <ConfidentialProtocols />
        </div>
        {/* Light sections */}
        <Community />
        <ClosingStatement />
      </main>
    </div>
  );
}
