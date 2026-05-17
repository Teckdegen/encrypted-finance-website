"use client";

import { useState } from "react";
import type { ReactNode } from "react";

const nav = [
  { id: "overview", label: "Overview", icon: "🏠" },
  { id: "problem", label: "The Problem", icon: "⚠️" },
  { id: "how-it-works", label: "How It Works", icon: "⚙️" },
  { id: "privacy-stack", label: "FCC", icon: "🔒" },
  { id: "features", label: "What's Private", icon: "👁️" },
  { id: "faq", label: "FAQ", icon: "❓" },
];

export default function FlarePage() {
  const [active, setActive] = useState("overview");

  return (
    <div className="flex min-h-screen bg-[#0d0d0d] text-white">
      {/* Sidebar */}
      <aside className="hidden md:flex w-[240px] shrink-0 flex-col border-r border-white/[0.06] bg-[#111111] px-3 py-5 sticky top-0 h-screen overflow-y-auto">
        <a href="/" className="flex items-center gap-2.5 mb-8 px-3">
          <img
            src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg"
            alt="Flare"
            className="h-6 w-6 rounded-md"
          />
          <span className="text-sm font-semibold">Encrypted Finance</span>
        </a>

        <nav className="flex flex-col gap-0.5">
          {nav.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                active === s.id
                  ? "bg-white/[0.08] text-white font-medium"
                  : "text-white/40 hover:text-white/70 hover:bg-white/[0.04]"
              }`}
            >
              <span className="text-[12px]">{s.icon}</span>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 px-3">
          <a
            href="/"
            className="text-[11px] text-white/20 hover:text-white/50 transition-colors"
          >
            Back to home
          </a>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/[0.06] px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg"
            alt="Flare"
            className="h-6 w-6 rounded-md"
          />
          <span className="text-sm font-semibold">Flare Docs</span>
        </a>
        <a href="/" className="text-xs text-white/30">Back</a>
      </div>

      {/* Main content */}
      <main className="flex-1 min-w-0 px-6 py-12 md:px-14 md:py-12 max-w-[700px] pt-20 md:pt-12">

        {/* Overview */}
        <Section id="overview">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg"
              alt="Flare"
              className="h-8 w-8 rounded-lg"
            />
            <h1 className="text-[24px] font-bold md:text-[28px]">Private DeFi on Flare</h1>
          </div>
          <p className="mt-4 text-[14px] text-white/50 leading-[1.8]">
            One deposit. Then everything is private. Swaps, lending, staking, bridging, governance. Your wallet never shows up on-chain again.
          </p>
          <p className="mt-3 text-[14px] text-white/50 leading-[1.8]">
            Encrypted Finance is a privacy layer built on Flare using FCC (Flare Confidential Compute). You deposit once, and after that your wallet never appears on-chain again. All your DeFi activity happens privately inside secure hardware that no one, not even us, can peek into.
          </p>
        </Section>

        <Hr />

        {/* The Problem */}
        <Section id="problem">
          <h2 className="text-[20px] font-bold mb-4">The Problem</h2>
          <p className="text-[14px] text-white/50 leading-[1.8]">
            Every transaction on a public blockchain is visible. Your wallet, your balances, your trades, your strategies. Anyone can see everything. MEV bots front-run you. Competitors track your moves. Your financial life is an open book.
          </p>
        </Section>

        <Hr />

        {/* How It Works */}
        <Section id="how-it-works">
          <h2 className="text-[20px] font-bold mb-6">How It Works</h2>
          <div className="space-y-5">
            <Step n="1" title="You deposit once" text="Your only on-chain transaction. After this, you are invisible." />
            <Step n="2" title="You sign instructions off-chain" text="Zero gas. Everything is handled for you." />
            <Step n="3" title="FCC executes privately" text="Your instruction runs inside secure hardware from a shared wallet. No link back to you." />
            <Step n="4" title="You receive encrypted notes" text="Your balance is encrypted on-chain. Only your key can read it." />
          </div>
        </Section>

        <Hr />

        {/* Privacy Stack */}
        <Section id="privacy-stack">
          <h2 className="text-[20px] font-bold mb-4">FCC</h2>
          <p className="text-[14px] text-white/50 leading-[1.8] mb-6">
            All private execution on Flare runs inside FCC (Flare Confidential Compute). This is TEE-based secure hardware built natively into the Flare network. No one, including Encrypted Finance, can see what happens inside.
          </p>
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-5">
            <p className="text-[13px] text-white/60 leading-[1.7]">
              Your transactions are signed off-chain and executed from a shared wallet, breaking any on-chain link to your identity. The FCC cannot move funds without your signature. Your keys, your funds.
            </p>
          </div>
        </Section>

        <Hr />

        {/* What's Private */}
        <Section id="features">
          <h2 className="text-[20px] font-bold mb-6">What&apos;s Private</h2>
          <div className="space-y-3">
            <Feature title="Swaps" desc="Any token pair. No front-running. No sandwich attacks." />
            <Feature title="Lending" desc="Positions and liquidation levels stay hidden." />
            <Feature title="Staking" desc="Earn rewards without broadcasting holdings." />
            <Feature title="Transfers" desc="Send to any address. Recipient does not need us." />
            <Feature title="FAssets" desc="FXRP, FBTC, FDOGE, FXLM. All private." />
            <Feature title="Governance" desc="Vote without revealing your position." />
            <Feature title="Messaging" desc="Wallet-to-wallet. End-to-end encrypted." />
            <Feature title="Limit Orders" desc="Oracle-protected. No one sees your levels." />
            <Feature title="Delegation" desc="Wrap, delegate, claim. No public trace." />
          </div>
        </Section>

        <Hr />

        {/* FAQ */}
        <Section id="faq">
          <h2 className="text-[20px] font-bold mb-6">FAQ</h2>
          <div className="divide-y divide-white/[0.06]">
            <Faq q="How does it work?" a="You deposit tokens once. After that, all your activity happens privately inside FCC, secure hardware that no one can peek into. Your wallet never appears on-chain again." />
            <Faq q="Is my wallet address visible?" a="Only your initial deposit is visible. After that, everything runs through a shared system wallet. There is no link back to you." />
            <Faq q="Can I send to a fresh wallet?" a="Yes. The recipient does not need to have used Encrypted Finance before. They receive tokens normally." />
            <Faq q="What if your system goes down?" a="Your funds are always safe. Your spending key plus on-chain encrypted notes equals full recovery. We can never lock you out." />
            <Faq q="Why only Flare?" a="Flare has native Confidential Compute built into the network. Hardware-level privacy that other chains do not offer natively yet." />
            <Faq q="Is this custodial?" a="No. The FCC cannot move funds without your signature. Your keys, your funds." />
          </div>
        </Section>

        {/* Footer */}
        <div className="mt-14 pt-6 border-t border-white/[0.06]">
          <p className="text-[11px] text-white/15">&copy; 2026 Encrypted Finance.</p>
        </div>
      </main>
    </div>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-20 py-6">{children}</section>;
}

function Hr() {
  return <hr className="border-white/[0.04] my-2" />;
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="flex gap-3.5">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.06] text-[11px] font-mono text-white/50">
        {n}
      </div>
      <div>
        <p className="text-[14px] font-medium text-white/80">{title}</p>
        <p className="text-[13px] text-white/40 leading-[1.6] mt-0.5">{text}</p>
      </div>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-white/[0.04] bg-white/[0.02] px-4 py-3">
      <span className="text-[13px] font-medium text-white/80">{title}</span>
      <span className="text-[13px] text-white/35 ml-2">{desc}</span>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer items-center justify-between py-3.5 select-none">
        <span className="text-[13px] text-white/60 pr-4">{q}</span>
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 text-white/20 transition-transform group-open:rotate-90">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <p className="pb-4 text-[13px] text-white/35 leading-[1.7]">{a}</p>
    </details>
  );
}
