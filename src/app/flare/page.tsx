import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encrypted Finance — Flare",
  description: "Private DeFi on Flare powered by FCC.",
};

export default function FlarePage() {
  return (
    <div className="min-h-screen bg-[#f0ebe2]">
      {/* Nav */}
      <nav className="px-6 py-5 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://pbs.twimg.com/profile_images/2052396648999923715/s8bKFJnU_400x400.jpg"
            alt="Logo"
            className="h-7 w-7 rounded-full"
          />
          <span className="text-sm font-semibold text-[#0a0a0a]">Encrypted Finance</span>
        </a>
        <a href="/" className="text-xs text-[#0a0a0a]/40 hover:text-[#0a0a0a]/70 transition-colors">
          ← Back
        </a>
      </nav>

      {/* Hero gradient banner */}
      <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28">
        {/* Subtle gradient using Flare's red */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#E62058]/[0.06] via-transparent to-[#E62058]/[0.03]" />

        <div className="relative max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg"
              alt="Flare"
              className="h-12 w-12 rounded-xl"
            />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E62058]/60">Flare Network</p>
              <h1 className="text-2xl font-bold text-[#0a0a0a] md:text-4xl">
                Private DeFi on Flare
              </h1>
            </div>
          </div>
          <p className="max-w-xl text-sm text-[#0a0a0a]/60 leading-relaxed md:text-base">
            One deposit. Then everything is private. Swaps, lending, staking, bridging, governance. Your wallet never shows up on-chain again.
          </p>
        </div>
      </section>

      {/* Privacy Stack callout */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-3xl rounded-xl border border-[#E62058]/15 bg-[#E62058]/[0.04] px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E62058]/10">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L2 4V7.5C2 11.1 4.5 14.4 8 15C11.5 14.4 14 11.1 14 7.5V4L8 1Z" stroke="#E62058" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-bold text-[#E62058]">Privacy Stack: FCC</p>
              <p className="text-xs text-[#0a0a0a]/50">Flare Confidential Compute — hardware-level private execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/30 mb-3">The Problem</p>
          <h2 className="text-xl font-bold text-[#0a0a0a] mb-4 md:text-2xl">
            Every transaction on a public chain is visible. Forever.
          </h2>
          <p className="text-sm text-[#0a0a0a]/50 leading-relaxed">
            Your wallet, your balances, your trades, your strategies — anyone can see everything. MEV bots front-run you. Competitors track your moves. Your financial life is an open book.
          </p>
        </div>
      </section>

      {/* How It Works — 3 steps */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/30 mb-6">How It Works</p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <StepCard num="01" title="Wrap" desc="Any token enters the private system." flow="100 TOKEN → PRIVATE NOTE" accent="#E62058" />
            <StepCard num="02" title="Transact" desc="Send, swap, or earn. Nothing leaks." flow="▓▓▓ → ▓▓▓" accent="#E62058" />
            <StepCard num="03" title="Unwrap" desc="Back to your token. With yield." flow="PRIVATE NOTE → 105 TOKEN" accent="#E62058" />
          </div>

          <p className="mt-6 text-center text-[10px] font-mono uppercase tracking-[0.2em] text-[#0a0a0a]/25">
            All execution happens inside FCC secure hardware
          </p>
        </div>
      </section>

      {/* What's Private */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/30 mb-6">What&apos;s Private</p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <FeatureRow title="Swaps" desc="Any token pair. No front-running. No sandwich attacks." />
            <FeatureRow title="Lending" desc="Positions and liquidation levels stay hidden." />
            <FeatureRow title="Staking" desc="Earn rewards without broadcasting holdings." />
            <FeatureRow title="Transfers" desc="Send to any address. Recipient doesn't need us." />
            <FeatureRow title="FAssets" desc="FXRP, FBTC, FDOGE, FXLM — all private." />
            <FeatureRow title="Governance" desc="Vote without revealing your position." />
            <FeatureRow title="Messaging" desc="Wallet-to-wallet. End-to-end encrypted." />
            <FeatureRow title="Limit Orders" desc="Oracle-protected. No one sees your levels." />
            <FeatureRow title="Delegation" desc="Wrap, delegate, claim. No public trace." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/30 mb-2">FAQ</p>
          <h2 className="text-xl font-bold text-[#0a0a0a] mb-8 md:text-2xl">
            How it <em className="italic font-normal text-[#0a0a0a]/50">actually</em> works.
          </h2>

          <div className="divide-y divide-[#0a0a0a]/[0.06]">
            <FaqRow q="How does it work?" a="You deposit tokens once. After that, all your activity happens privately inside FCC — secure hardware that no one can peek into. Your wallet never appears on-chain again." />
            <FaqRow q="Is my wallet address visible?" a="Only your initial deposit is visible. After that, everything runs through a shared system wallet. There's no link back to you." />
            <FaqRow q="Can I send to a fresh wallet?" a="Yes. The recipient doesn't need to have used Encrypted Finance before. They receive tokens normally." />
            <FaqRow q="What if your system goes down?" a="Your funds are always safe. Your spending key plus on-chain encrypted notes equals full recovery. We can never lock you out." />
            <FaqRow q="Why only Flare?" a="Flare has native Confidential Compute (FCC) built into the network. Hardware-level privacy that other chains don't offer natively yet." />
            <FaqRow q="Is this custodial?" a="No. The FCC cannot move funds without your signature. Your keys, your funds." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 md:px-12">
        <p className="text-xs text-[#0a0a0a]/25">&copy; 2026 Encrypted Finance.</p>
      </footer>
    </div>
  );
}

function StepCard({ num, title, desc, flow, accent }: { num: string; title: string; desc: string; flow: string; accent: string }) {
  return (
    <div className="rounded-xl border border-[#0a0a0a]/[0.06] bg-white/50 p-5">
      <span className="text-[10px] font-mono" style={{ color: accent }}>{num}</span>
      <h3 className="mt-2 text-base font-bold text-[#0a0a0a]">{title}</h3>
      <p className="mt-1 text-xs text-[#0a0a0a]/45 leading-relaxed">{desc}</p>
      <p className="mt-4 font-mono text-[10px] text-[#0a0a0a]/30">{flow}</p>
    </div>
  );
}

function FeatureRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-[#0a0a0a]/[0.05] bg-white/40 px-4 py-3">
      <h3 className="text-sm font-semibold text-[#0a0a0a]/80">{title}</h3>
      <p className="mt-0.5 text-xs text-[#0a0a0a]/40 leading-relaxed">{desc}</p>
    </div>
  );
}

function FaqRow({ q, a }: { q: string; a: string }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer items-center justify-between py-4 select-none">
        <span className="text-sm text-[#0a0a0a]/70 pr-4">{q}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          className="shrink-0 text-[#0a0a0a]/20 transition-transform group-open:rotate-90"
        >
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <p className="pb-4 text-sm text-[#0a0a0a]/45 leading-relaxed">{a}</p>
    </details>
  );
}
