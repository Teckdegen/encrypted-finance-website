"use client";

import { useState } from "react";
import type { ReactNode } from "react";

const nav = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "how-it-works", label: "How It Works" },
  { id: "privacy-stack", label: "Privacy Stack" },
  { id: "features", label: "What\u2019s Private" },
  { id: "faq", label: "FAQ" },
];

export default function FlarePage() {
  const [active, setActive] = useState("overview");

  return (
    <div className="flex min-h-screen bg-white text-[#1a1a2e]">
      {/* Sidebar */}
      <aside className="hidden md:flex w-[260px] shrink-0 flex-col border-r border-[#e8e8e8] bg-[#fafafa] px-4 py-5 sticky top-0 h-screen overflow-y-auto">
        <a href="/" className="flex items-center gap-2.5 mb-8 px-2">
          <img
            src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg"
            alt="Flare"
            className="h-7 w-7 rounded-md"
          />
          <span className="text-sm font-semibold text-[#1a1a2e]">Flare</span>
          <span className="text-[10px] text-[#1a1a2e]/40 ml-auto">by Encrypted Finance</span>
        </a>

        <nav className="flex flex-col gap-0.5">
          {nav.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setActive(s.id)}
              className={`rounded-md px-3 py-2 text-[13px] transition-colors ${
                active === s.id
                  ? "bg-[#E62058]/[0.08] text-[#E62058] font-medium"
                  : "text-[#1a1a2e]/50 hover:text-[#1a1a2e]/80 hover:bg-[#f0f0f0]"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 px-2 border-t border-[#e8e8e8]">
          <a
            href="/"
            className="text-[11px] text-[#1a1a2e]/30 hover:text-[#1a1a2e]/60 transition-colors"
          >
            ← Back to Encrypted Finance
          </a>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e8e8e8] px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg"
            alt="Flare"
            className="h-6 w-6 rounded-md"
          />
          <span className="text-sm font-semibold">Flare Docs</span>
        </a>
        <a href="/" className="text-xs text-[#1a1a2e]/40">← Back</a>
      </div>

      {/* Main content */}
      <main className="flex-1 min-w-0 px-6 py-12 md:px-16 md:py-14 max-w-[720px] pt-20 md:pt-14">

        {/* Overview */}
        <Section id="overview">
          <h1 className="text-[28px] font-bold leading-tight md:text-[32px]">Private DeFi on Flare</h1>
          <p className="mt-4 text-[15px] text-[#1a1a2e]/60 leading-[1.7]">
            One deposit. Then everything is private. Swaps, lending, staking, bridging, governance. Your wallet never shows up on-chain again.
          </p>
          <p className="mt-3 text-[15px] text-[#1a1a2e]/60 leading-[1.7]">
            Encrypted Finance is a privacy layer built on Flare using FCC (Flare Confidential Compute). You deposit once, and after that your wallet never appears on-chain again. All your DeFi activity happens privately inside secure hardware that no one — not even us — can peek into.
          </p>
        </Section>

        <Hr />

        {/* The Problem */}
        <Section id="problem">
          <h2 className="text-[22px] font-bold">The Problem</h2>
          <p className="mt-4 text-[15px] text-[#1a1a2e]/60 leading-[1.7]">
            Every transaction on a public blockchain is visible. Your wallet, your balances, your trades, your strategies. Anyone can see everything. MEV bots front-run you. Competitors track your moves. Your financial life is an open book.
          </p>
        </Section>

        <Hr />

        {/* How It Works */}
        <Section id="how-it-works">
          <h2 className="text-[22px] font-bold">How It Works</h2>
          <div className="mt-6 space-y-4">
            <Step n="1" title="You deposit once" text="Your only on-chain transaction. After this, you're invisible." />
            <Step n="2" title="You sign instructions off-chain" text="Zero gas. Everything is handled for you." />
            <Step n="3" title="FCC executes privately" text="Your instruction runs inside secure hardware from a shared wallet. No link back to you." />
            <Step n="4" title="You receive encrypted notes" text="Your balance is encrypted on-chain. Only your key can read it." />
          </div>
        </Section>

        <Hr />

        {/* Privacy Stack */}
        <Section id="privacy-stack">
          <h2 className="text-[22px] font-bold">Privacy Stack</h2>
          <div className="mt-6 rounded-lg border border-[#E62058]/20 bg-[#E62058]/[0.03] p-5">
            <h3 className="text-sm font-bold text-[#E62058]">FCC — Flare Confidential Compute</h3>
            <p className="mt-2 text-[13px] text-[#1a1a2e]/50 leading-[1.7]">
              All private execution on Flare runs inside FCC — TEE-based secure hardware built natively into the Flare network. No one, including Encrypted Finance, can see what happens inside. Your transactions are signed off-chain and executed from a shared wallet, breaking any on-chain link to your identity.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <InfoBox label="Encryption" value="ECIES" />
            <InfoBox label="Authorization" value="EIP-712 Signatures" />
            <InfoBox label="Trust" value="TEE Hardware Attestation" />
            <InfoBox label="Price Feeds" value="FTSO Oracle" />
          </div>
        </Section>

        <Hr />

        {/* What's Private */}
        <Section id="features">
          <h2 className="text-[22px] font-bold">What&apos;s Private</h2>
          <div className="mt-6 space-y-3">
            <Feature title="Swaps" desc="Any token pair. No front-running. No sandwich attacks." />
            <Feature title="Lending" desc="Positions and liquidation levels stay hidden." />
            <Feature title="Staking" desc="Earn rewards without broadcasting holdings." />
            <Feature title="Transfers" desc="Send to any address. Recipient doesn't need us." />
            <Feature title="FAssets" desc="FXRP, FBTC, FDOGE, FXLM — all private." />
            <Feature title="Governance" desc="Vote without revealing your position." />
            <Feature title="Messaging" desc="Wallet-to-wallet. End-to-end encrypted." />
            <Feature title="Limit Orders" desc="Oracle-protected. No one sees your levels." />
            <Feature title="Delegation" desc="Wrap, delegate, claim. No public trace." />
          </div>
        </Section>

        <Hr />

        {/* FAQ */}
        <Section id="faq">
          <h2 className="text-[22px] font-bold">FAQ</h2>
          <div className="mt-6 divide-y divide-[#e8e8e8]">
            <Faq q="How does it work?" a="You deposit tokens once. After that, all your activity happens privately inside FCC — secure hardware that no one can peek into. Your wallet never appears on-chain again." />
            <Faq q="Is my wallet address visible?" a="Only your initial deposit is visible. After that, everything runs through a shared system wallet. There's no link back to you." />
            <Faq q="Can I send to a fresh wallet?" a="Yes. The recipient doesn't need to have used Encrypted Finance before. They receive tokens normally." />
            <Faq q="What if your system goes down?" a="Your funds are always safe. Your spending key plus on-chain encrypted notes equals full recovery. We can never lock you out." />
            <Faq q="Why only Flare?" a="Flare has native Confidential Compute built into the network. Hardware-level privacy that other chains don't offer natively yet." />
            <Faq q="Is this custodial?" a="No. The FCC cannot move funds without your signature. Your keys, your funds." />
          </div>
        </Section>

        {/* Footer */}
        <div className="mt-14 pt-6 border-t border-[#e8e8e8]">
          <p className="text-[11px] text-[#1a1a2e]/25">&copy; 2026 Encrypted Finance.</p>
        </div>
      </main>
    </div>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-20 py-6">{children}</section>;
}

function Hr() {
  return <hr className="border-[#e8e8e8] my-2" />;
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="flex gap-3.5">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E62058]/10 text-[11px] font-bold text-[#E62058]">
        {n}
      </div>
      <div>
        <p className="text-[14px] font-semibold text-[#1a1a2e]">{title}</p>
        <p className="text-[13px] text-[#1a1a2e]/50 leading-[1.6]">{text}</p>
      </div>
    </div>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-[#e8e8e8] bg-[#fafafa] px-3 py-2.5">
      <p className="text-[10px] uppercase tracking-wider text-[#1a1a2e]/30 font-medium">{label}</p>
      <p className="text-[13px] font-medium text-[#1a1a2e]/70 mt-0.5">{value}</p>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E62058]/40" />
      <div>
        <span className="text-[14px] font-medium text-[#1a1a2e]">{title}</span>
        <span className="text-[14px] text-[#1a1a2e]/45"> — {desc}</span>
      </div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer items-center justify-between py-3.5 select-none">
        <span className="text-[14px] text-[#1a1a2e]/80 pr-4">{q}</span>
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#1a1a2e]/20 transition-transform group-open:rotate-90">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <p className="pb-3.5 text-[13px] text-[#1a1a2e]/50 leading-[1.7]">{a}</p>
    </details>
  );
}
