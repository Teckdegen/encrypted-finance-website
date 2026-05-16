import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encrypted Finance — Flare",
  description: "Private DeFi on Flare. One deposit, then everything is private.",
};

export default function FlarePage() {
  return (
    <div className="min-h-screen">
      {/* Dark Hero Section */}
      <section className="relative bg-[#0a0a0a] px-6 py-16 md:px-16 md:py-24">
        {/* Back link */}
        <a
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors"
        >
          ← Back
        </a>

        <div className="max-w-4xl">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
            The Problem
          </p>
          <h1 className="text-3xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
            Every transfer you send on a public chain
            <br />
            is <em className="italic text-white/60">visible to everyone.</em>
            <br />
            Forever.
          </h1>
          <p className="mt-6 text-sm text-white/40">Until now.</p>
        </div>
      </section>

      {/* Steps Section — Light */}
      <section className="bg-[#f0ebe2] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Step 1 — Wrap */}
            <div className="rounded-xl border border-[#0a0a0a]/10 bg-white/60 p-6 md:p-8">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/40">01</p>
              <h3 className="mb-3 text-lg font-bold text-[#0a0a0a]">WRAP</h3>
              <p className="mb-6 text-sm text-[#0a0a0a]/50">Any token enters the private system.</p>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="rounded border border-[#0a0a0a]/10 px-2 py-1">100 TOKEN</span>
                <span className="text-[#0a0a0a]/30">→</span>
                <span className="rounded border border-[#0a0a0a]/10 px-2 py-1">PRIVATE NOTE</span>
              </div>
            </div>

            {/* Step 2 — Transact */}
            <div className="rounded-xl border border-[#0a0a0a]/10 bg-white/60 p-6 md:p-8">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/40">02</p>
              <h3 className="mb-3 text-lg font-bold text-[#0a0a0a]">TRANSACT</h3>
              <p className="mb-6 text-sm text-[#0a0a0a]/50">Send, swap, or earn. Nothing leaks.</p>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="rounded border border-[#0a0a0a]/10 px-2 py-1">▓▓▓ PRIVATE</span>
                <span className="text-[#0a0a0a]/30">→</span>
                <span className="rounded border border-[#0a0a0a]/10 px-2 py-1">▓▓▓ PRIVATE</span>
              </div>
            </div>

            {/* Step 3 — Unwrap */}
            <div className="rounded-xl border border-[#0a0a0a]/10 bg-white/60 p-6 md:p-8">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/40">03</p>
              <h3 className="mb-3 text-lg font-bold text-[#0a0a0a]">UNWRAP</h3>
              <p className="mb-6 text-sm text-[#0a0a0a]/50">Back to your token. With yield.</p>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="rounded border border-[#0a0a0a]/10 px-2 py-1">PRIVATE NOTE</span>
                <span className="text-[#0a0a0a]/30">→</span>
                <span className="rounded border border-[#0a0a0a]/10 px-2 py-1">105 TOKEN</span>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#0a0a0a]/30">
            Powered by Flare Confidential Compute
          </p>
        </div>
      </section>

      {/* What's Private — Light */}
      <section className="bg-[#f0ebe2] px-6 py-16 md:px-16 md:py-24 border-t border-[#0a0a0a]/5">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0a0a0a]/30">• • •</span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureItem title="Swaps" description="Trade any token pair without revealing your identity. No front-running. No sandwich attacks." />
            <FeatureItem title="Lending" description="Supply collateral and borrow privately. Your positions are invisible." />
            <FeatureItem title="Staking" description="Stake and earn rewards without broadcasting your holdings." />
            <FeatureItem title="Transfers" description="Send tokens to any Flare address privately." />
            <FeatureItem title="FAssets" description="Mint, redeem, and manage FAssets (FXRP, FBTC, FDOGE, FXLM) privately." />
            <FeatureItem title="Governance" description="Vote on proposals without revealing your position." />
            <FeatureItem title="Messaging" description="Encrypted messages between wallets. End-to-end encrypted." />
            <FeatureItem title="Oracle Trades" description="Set price conditions. Your trade executes when conditions are met privately." />
            <FeatureItem title="Wrapping" description="Wrap FLR, delegate, claim rewards, join collateral pools. No public trace." />
          </div>
        </div>
      </section>

      {/* FAQ Section — Light */}
      <section className="bg-[#f0ebe2] px-6 py-16 md:px-16 md:py-24 border-t border-[#0a0a0a]/5">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a0a0a] md:text-4xl">
              How it <em className="italic">actually</em> works.
            </h2>
            <p className="mt-2 text-sm text-[#0a0a0a]/50">Privacy questions answered plainly.</p>
          </div>

          <div className="flex flex-col">
            <FaqRow question="How does it work?" answer="You deposit tokens once. After that, all your activity happens privately inside Flare Confidential Compute (FCC) — secure hardware that no one can peek into. Your wallet never appears on-chain again." />
            <FaqRow question="Is my wallet address visible?" answer="Only your initial deposit is visible. After that, everything runs through a shared system wallet. There's no link back to you." />
            <FaqRow question="Can I send to a fresh wallet?" answer="Yes. The recipient doesn't need to have used Encrypted Finance before. They receive tokens normally." />
            <FaqRow question="What if your system goes down?" answer="Your funds are always safe. Your spending key + on-chain encrypted notes = full recovery. We can never lock you out." />
            <FaqRow question="Why only Flare?" answer="Flare has native Confidential Compute (FCC) built into the network. This gives us hardware-level privacy guarantees that other chains don't offer natively. More chains coming as they add similar capabilities." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f0ebe2] border-t border-[#0a0a0a]/5 px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-center">
          <p className="text-xs text-[#0a0a0a]/30">&copy; 2026 Encrypted Finance.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="mb-1 text-sm font-bold text-[#0a0a0a]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#0a0a0a]/50">{description}</p>
    </div>
  );
}

function FaqRow({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-[#0a0a0a]/10">
      <summary className="flex cursor-pointer items-center justify-between py-5 select-none">
        <span className="text-sm font-medium text-[#0a0a0a] md:text-base">{question}</span>
        <span className="ml-4 text-[#0a0a0a]/30 transition-transform group-open:rotate-45 text-lg shrink-0">+</span>
      </summary>
      <div className="pb-5">
        <p className="text-sm leading-relaxed text-[#0a0a0a]/60">{answer}</p>
      </div>
    </details>
  );
}
