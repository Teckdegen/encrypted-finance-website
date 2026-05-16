import { Hero } from "@/components/Hero";
import { CoreIntro } from "@/components/CoreIntro";
import { PrivacyInfrastructure } from "@/components/PrivacyInfrastructure";
import { Ecosystem } from "@/components/Ecosystem";
import { Community } from "@/components/Community";
import { ClosingStatement } from "@/components/ClosingStatement";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-grid">
      <Navbar />
      <main>
        <Hero />
        <CoreIntro />
        <PrivacyInfrastructure />
        <Ecosystem />
        <Community />
        <ClosingStatement />
      </main>
    </div>
  );
}
