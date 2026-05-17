"use client";

import { useState } from "react";
import type { ReactNode } from "react";

const nav = [
  { id: "overview", label: "Overview", icon: "home" },
  { id: "problem", label: "The Problem", icon: "alert" },
  { id: "how-it-works", label: "How It Works", icon: "gear" },
  { id: "privacy-stack", label: "FCC", icon: "lock" },
  { id: "selective-disclosure", label: "Selective Disclosure", icon: "eye" },
  { id: "features", label: "What's Private", icon: "eye" },
  { id: "faq", label: "FAQ", icon: "question" },
];

function NavIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "home":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 6.5L8 2L14 6.5V13.5C14 14 13.5 14.5 13 14.5H3C2.5 14.5 2 14 2 13.5V6.5Z" />
          <path d="M6 14.5V8.5H10V14.5" />
        </svg>
      );
    case "alert":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 1.5L1.5 13H14.5L8 1.5Z" />
          <path d="M8 6V9" />
          <circle cx="8" cy="11" r="0.5" fill="currentColor" />
        </svg>
      );
    case "gear":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="8" r="2.5" />
          <path d="M8 1V3M8 13V15M1 8H3M13 8H15M2.5 2.5L4 4M12 12L13.5 13.5M13.5 2.5L12 4M4 12L2.5 13.5" />
        </svg>
      );
    case "lock":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="7" width="10" height="7" rx="1" />
          <path d="M5 7V5C5 3.3 6.3 2 8 2C9.7 2 11 3.3 11 5V7" />
        </svg>
      );
    case "eye":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 8C1 8 4 3 8 3C12 3 15 8 15 8C15 8 12 13 8 13C4 13 1 8 1 8Z" />
          <circle cx="8" cy="8" r="2" />
        </svg>
      );
    case "question":
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="8" r="6.5" />
          <path d="M6 6C6 4.9 6.9 4 8 4C9.1 4 10 4.9 10 6C10 7 9 7.5 8 7.5V9" />
          <circle cx="8" cy="11" r="0.5" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export default function FlarePage() {
  const [active, setActive] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0d0d0f] text-white">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-[240px] shrink-0 flex-col border-r border-white/[0.06] bg-[#0d0d0f] px-3 py-5 sticky top-0 h-screen overflow-y-auto">
        <a href="/" className="flex items-center gap-2.5 mb-8 px-3">
          <img
            src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg"
            alt="Flare"
            className="h-6 w-6 rounded-md"
          />
          <span className="text-sm font-semibold">Encrypted Finance</span>
        </a>

        <nav className="flex flex-col gap-1">
          {nav.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] transition-colors ${
                active === s.id
                  ? "bg-white/[0.08] text-white font-medium"
                  : "text-white/40 hover:text-white/70 hover:bg-white/[0.04]"
              }`}
            >
              <span className={active === s.id ? "text-white/80" : "text-white/30"}>
                <NavIcon icon={s.icon} />
              </span>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 px-3">
          <a href="/" className="text-[11px] text-white/20 hover:text-white/50 transition-colors">
            Back to home
          </a>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0d0d0f]/95 backdrop-blur-md border-b border-white/[0.06] px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg"
            alt="Flare"
            className="h-6 w-6 rounded-md"
          />
          <span className="text-sm font-semibold">Docs</span>
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-white/[0.06]"
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 4L12 12M12 4L4 12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M2 4H14M2 8H14M2 12H14" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0d0d0f] pt-16 px-4">
          <nav className="flex flex-col gap-1 mt-4">
            {nav.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => { setActive(s.id); setMobileMenuOpen(false); }}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                  active === s.id
                    ? "bg-white/[0.08] text-white font-medium"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                <span className={active === s.id ? "text-white/80" : "text-white/30"}>
                  <NavIcon icon={s.icon} />
                </span>
                {s.label}
              </a>
            ))}
          </nav>
          <a href="/" className="mt-8 block text-xs text-white/20 px-4">Back to home</a>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 min-w-0 px-6 py-12 md:px-14 md:py-14 max-w-[700px] pt-20 md:pt-14">

        {/* Overview */}
        <Section id="overview">
          <h1 className="text-[26px] font-bold leading-tight md:text-[30px]">Private DeFi on Flare</h1>
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
          <h2 className="text-[20px] font-bold">The Problem</h2>
          <p className="mt-4 text-[14px] text-white/50 leading-[1.8]">
            Every transaction on a public blockchain is visible. Your wallet, your balances, your trades, your strategies. Anyone can see everything. MEV bots front-run you. Competitors track your moves. Your financial life is an open book.
          </p>
        </Section>

        <Hr />

        {/* How It Works */}
        <Section id="how-it-works">
          <h2 className="text-[20px] font-bold">How It Works</h2>
          <div className="mt-6 space-y-5">
            <Step n="1" title="You deposit once" text="Your only on-chain transaction. After this, you are invisible." />
            <Step n="2" title="You sign instructions off-chain" text="Zero gas. Everything is handled for you." />
            <Step n="3" title="FCC executes privately" text="Your instruction runs inside secure hardware from a shared wallet. No link back to you." />
            <Step n="4" title="You receive encrypted notes" text="Your balance is encrypted on-chain. Only your key can read it." />
          </div>
        </Section>

        <Hr />

        {/* Privacy Stack */}
        <Section id="privacy-stack">
          <h2 className="text-[20px] font-bold">FCC (Flare Confidential Compute)</h2>
          <p className="mt-4 text-[14px] text-white/50 leading-[1.8]">
            All private execution on Flare runs inside FCC. TEE-based secure hardware built natively into the Flare network. No one, including Encrypted Finance, can see what happens inside. Your transactions are signed off-chain and executed from a shared wallet, breaking any on-chain link to your identity.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2">
            <InfoBox label="Encryption" value="ECIES" />
            <InfoBox label="Authorization" value="EIP-712 Signatures" />
            <InfoBox label="Trust" value="TEE Attestation" />
            <InfoBox label="Price Feeds" value="FTSO Oracle" />
          </div>
        </Section>

        <Hr />

        {/* Selective Disclosure */}
        <Section id="selective-disclosure">
          <h2 className="text-[20px] font-bold">Selective Disclosure</h2>
          <p className="mt-4 text-[14px] text-white/50 leading-[1.8]">
            Privacy does not mean hiding everything forever. Encrypted Finance supports selective disclosure, letting you prove specific things about your activity without revealing the full picture.
          </p>
          <p className="mt-3 text-[14px] text-white/50 leading-[1.8]">
            You can generate proofs that show you meet certain criteria (compliance, solvency, trade history) without exposing your wallet, balances, or transaction details. You choose what to reveal, when, and to whom.
          </p>
          <div className="mt-6 space-y-3">
            <Feature title="Compliance proofs" desc="Prove you meet regulatory requirements without exposing your full history." />
            <Feature title="Solvency attestation" desc="Show you hold enough collateral without revealing exact amounts." />
            <Feature title="Audit trails" desc="Generate verifiable records for specific counterparties on demand." />
            <Feature title="Identity verification" desc="Prove identity attributes without linking to your on-chain activity." />
          </div>
        </Section>

        <Hr />

        {/* What's Private */}
        <Section id="features">
          <h2 className="text-[20px] font-bold">What&apos;s Private</h2>
          <div className="mt-6 space-y-3">
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
          <h2 className="text-[20px] font-bold">FAQ</h2>
          <div className="mt-6 divide-y divide-white/[0.06]">
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
          <p className="text-[11px] text-white/15">2026 Encrypted Finance.</p>
        </div>
      </main>
    </div>
  );
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-20 py-6">{children}</section>;
}

function Hr() {
  return <hr className="border-white/[0.06] my-2" />;
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="flex gap-3.5">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/[0.1] text-[11px] font-mono text-white/40">
        {n}
      </div>
      <div>
        <p className="text-[13px] font-semibold text-white/90">{title}</p>
        <p className="text-[13px] text-white/40 leading-[1.7]">{text}</p>
      </div>
    </div>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
      <p className="text-[10px] uppercase tracking-wider text-white/25 font-medium">{label}</p>
      <p className="text-[12px] font-medium text-white/60 mt-0.5">{value}</p>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
      <p className="text-[13px] text-white/50 leading-[1.7]">
        <span className="font-medium text-white/80">{title}</span> {desc}
      </p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer items-center justify-between py-3.5 select-none">
        <span className="text-[13px] text-white/70 pr-4">{q}</span>
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 text-white/20 transition-transform group-open:rotate-90">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <p className="pb-3.5 text-[13px] text-white/35 leading-[1.7]">{a}</p>
    </details>
  );
}
