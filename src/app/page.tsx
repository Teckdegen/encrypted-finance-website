import { Hero } from "@/components/Hero";
import { CoreIntro } from "@/components/CoreIntro";
import { PrivacyPhilosophy } from "@/components/PrivacyPhilosophy";
import { EncryptedCompute } from "@/components/EncryptedCompute";
import { Ecosystem } from "@/components/Ecosystem";
import { ClosingStatement } from "@/components/ClosingStatement";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-grid">
      <Navbar />
      <main>
        <Hero />
        <CoreIntro />
        <EncryptedCompute />
        <PrivacyPhilosophy />
        <Ecosystem />
        <ClosingStatement />
      </main>
    </div>
  );
}
