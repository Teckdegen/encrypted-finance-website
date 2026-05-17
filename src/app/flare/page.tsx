"use client";

import { useState } from "react";
import type { ReactNode } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "how-it-works", label: "How It Works" },
  { id: "features", label: "What\u2019s Private" },
  { id: "faq", label: "FAQ" },
];

export default function FlarePage() {
  const [active, setActive] = useState("overview");

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-white/[0.06] px-4 py-6 sticky top-0 h-screen overflow-y-auto">
        <a href="/" className="flex items-center gap-2 mb-10 px-2">
          <img
            src="https://pbs.twimg.com/profile_images/2052396648999923715/s8bKFJnU_400x400.jpg"
            alt="Logo"
            className="h-7 w-7 rounded-full"
          />
          <span className="text-sm font-semibold">Encrypted Finance</span>
        </a>

        <nav className="flex flex-col gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setActive(s.id)}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                active === s.id
                  ? "bg-white/[0.06] text-white"
                  : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-8 px-2">
          <a
            href="/"
            className="text-xs text-white/20 hover:text-white/40 transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06] px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://pbs.twimg.com/profile_images/2052396648999923715/s8bKFJnU_400x400.jpg"
            alt="Logo"
            className="h-6 w-6 rounded-full"
          />
          <span className="text-sm font-semibold">Docs</span>
        </a>
        <a href="/" className="text-xs text-white/40">← Back</a>
      </div>

      {/* Main content */}
      <main className="flex-1 px-6 py-16 md:px-12 md:py-16 max-w-3xl pt-20 md:pt-16">
        {/* Overview */}
        <Section id="overview">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg"
              alt="Flare"
              className="h-10 w-10 rounded-full"
            />
            <h1 className="text-2xl font-bold md:text-3xl">Encrypted Finance on Flare</h1>
          </div>
          <p className="text-white/50 leading-relaxed">
            One deposit. Then everything is private. Swaps, lending, staking, bridging, governance. Your wallet never shows up on-chain again.
          </p>
          <p className="mt-4 text-white/50 leading-relaxed">
            Encrypted Finance is a privacy layer built on Flare using FCC (Flare Confidential Compute). You deposit once, and after that your wallet never appears on-chain again. All your DeFi activity happens privately inside secure hardware that no one — not even us — can peek into.
          </p>
        </Section>

        <Divider />

        {/* The Problem */}
        <Section id="problem">
          <h2 className="text-xl font-bold mb-4 md:text-2xl">The Problem</h2>
          <p className="text-white/50 leading-relaxed">
            Every transaction on a public blockchain is visible. Your wallet, your balances, your trades, your strategies. Anyone can see everything. MEV bots front-run you. Competitors track your moves. Your financial life is an open book.
          </p>
        </Section>

        <Divider />

        {/* How It Works */}
        <Section id="how-it-works">
          <h2 className="text-xl font-bold mb-6 md:text-2xl">How It Works</h2>

          <div className="space-y-6">
            <Step num="1" title="You deposit once" desc="Your only on-chain transaction. After this, you're invisible." />
            <Step num="2" title="You sign instructions off-chain" desc="Zero gas. Everything is handled for you." />
            <Step num="3" title="FCC executes privately" desc="Your instruction runs inside secure hardware from a shared wallet. No link back to you." />
            <Step num="4" title="You receive encrypted notes" desc="Your balance is encrypted on-chain. Only your key can read it." />
          </div>

          <div className="mt-8 rounded-lg bg-white/[0.03] border border-white/[0.06] p-4">
            <p className="text-xs text-white/30 font-mono">
              Powered by Flare Confidential Compute (FCC) — TEE hardware attestation for trust.
            </p>
          </div>
        </Section>

        <Divider />

        {/* What's Private */}
        <Section id="features">
          <h2 className="text-xl font-bold mb-6 md:text-2xl">What&apos;s Private</h2>

          <div className="space-y-4">
            <FeatureRow title="Swaps" desc="Trade any token pair without revealing your identity. No front-running. No sandwich attacks." />
            <FeatureRow title="Lending" desc="Supply collateral and borrow privately. Your positions and liquidation levels are invisible." />
            <FeatureRow title="Staking" desc="Stake and earn rewards without broadcasting your holdings. Delegate to FTSO providers privately." />
            <FeatureRow title="Transfers" desc="Send tokens to any Flare address privately. The recipient doesn't need to have used Encrypted Finance before." />
            <FeatureRow title="FAssets" desc="Mint, redeem, and manage FAssets (FXRP, FBTC, FDOGE, FXLM) privately." />
            <FeatureRow title="Governance" desc="Vote on proposals without revealing your position. No vote buying. No social pressure." />
            <FeatureRow title="Messaging" desc="Encrypted messages between wallets. End-to-end encrypted, readable only by the recipient." />
            <FeatureRow title="Oracle-Protected Trades" desc="Set price conditions. The FCC only executes your trade when conditions are met. No one sees your limit orders." />
            <FeatureRow title="Wrapping & Delegation" desc="Wrap FLR, delegate, claim rewards, join collateral pools. No public trace." />
          </div>
        </Section>

        <Divider />

        {/* FAQ */}
        <Section id="faq">
          <h2 className="text-xl font-bold mb-6 md:text-2xl">FAQ</h2>

          <div className="space-y-0 divide-y divide-white/[0.06]">
            <FaqItem q="How does it work?" a="You deposit tokens once. After that, all your activity happens privately inside Flare Confidential Compute — secure hardware that no one can peek into. Your wallet never appears on-chain again." />
            <FaqItem q="Is my wallet address visible?" a="Only your initial deposit is visible. After that, everything runs through a shared system wallet. There's no link back to you." />
            <FaqItem q="Can I send to a fresh wallet?" a="Yes. The recipient doesn't need to have used Encrypted Finance before. They receive tokens normally." />
            <FaqItem q="What if your system goes down?" a="Your funds are always safe. Your spending key plus on-chain encrypted notes equals full recovery. We can never lock you out." />
            <FaqItem q="Why only Flare?" a="Flare has native Confidential Compute built into the network. Hardware-level privacy guarantees that other chains don't offer natively. More chains coming." />
            <FaqItem q="Is this custodial?" a="No. The FCC cannot move funds without your signature. Your keys, your funds." />
          </div>
        </Section>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-white/20">&copy; 2026 Encrypted Finance.</p>
        </div>
      </main>
    </div>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-8">
      {children}
    </section>
  );
}

function Divider() {
  return <hr className="border-white/[0.06]" />;
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-xs font-mono text-white/50">
        {num}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white/90">{title}</h3>
        <p className="mt-1 text-sm text-white/40 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FeatureRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] px-4 py-4">
      <h3 className="text-sm font-semibold text-white/80">{title}</h3>
      <p className="mt-1 text-sm text-white/35 leading-relaxed">{desc}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer items-center justify-between py-4 select-none">
        <span className="text-sm text-white/70 pr-4">{q}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          className="shrink-0 text-white/20 transition-transform group-open:rotate-90"
        >
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <p className="pb-4 text-sm text-white/35 leading-relaxed">{a}</p>
    </details>
  );
}
