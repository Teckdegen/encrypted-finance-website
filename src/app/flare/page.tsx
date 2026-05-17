import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encrypted Finance — Flare",
  description: "Private DeFi on Flare. One deposit, then everything is private.",
};

export default function FlarePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="px-6 py-5 md:px-12">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-24 pt-12 md:px-12 md:pb-32 md:pt-16">
        <div className="max-w-3xl">
          <h1 className="text-[2.5rem] font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            Every transfer you send on a public chain is{" "}
            <span className="italic text-white/50">visible to everyone.</span>
            <br />
            Forever.
          </h1>
          <p className="mt-8 text-white/30 text-sm">Until now.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="border-t border-white/[0.06] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-px md:grid-cols-3 bg-white/[0.04] rounded-2xl overflow-hidden">
          <div className="bg-[#0a0a0a] p-8 md:p-10">
            <span className="text-white/20 text-xs font-mono">01</span>
            <h3 className="mt-4 text-xl font-bold">Wrap</h3>
            <p className="mt-2 text-sm text-white/40 leading-relaxed">Any token enters the private system.</p>
            <div className="mt-6 font-mono text-xs text-white/30 flex items-center gap-2">
              <span className="text-white/60">100 TOKEN</span>
              <span>→</span>
              <span className="text-white/60">PRIVATE NOTE</span>
            </div>
          </div>
          <div className="bg-[#0a0a0a] p-8 md:p-10">
            <span className="text-white/20 text-xs font-mono">02</span>
            <h3 className="mt-4 text-xl font-bold">Transact</h3>
            <p className="mt-2 text-sm text-white/40 leading-relaxed">Send, swap, or earn. Nothing leaks.</p>
            <div className="mt-6 font-mono text-xs text-white/30 flex items-center gap-2">
              <span className="text-white/60">▓▓▓</span>
              <span>→</span>
              <span className="text-white/60">▓▓▓</span>
            </div>
          </div>
          <div className="bg-[#0a0a0a] p-8 md:p-10">
            <span className="text-white/20 text-xs font-mono">03</span>
            <h3 className="mt-4 text-xl font-bold">Unwrap</h3>
            <p className="mt-2 text-sm text-white/40 leading-relaxed">Back to your token. With yield.</p>
            <div className="mt-6 font-mono text-xs text-white/30 flex items-center gap-2">
              <span className="text-white/60">PRIVATE NOTE</span>
              <span>→</span>
              <span className="text-white/60">105 TOKEN</span>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-[10px] font-mono uppercase tracking-[0.3em] text-white/15">
          Powered by Flare Confidential Compute
        </p>
      </section>

      {/* What you can do */}
      <section className="border-t border-white/[0.06] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-16 md:text-3xl">What you can do privately.</h2>
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <Feature title="Swap" desc="Any token pair. No front-running." />
            <Feature title="Lend & Borrow" desc="Positions and liquidation levels stay hidden." />
            <Feature title="Stake" desc="Earn rewards without broadcasting holdings." />
            <Feature title="Transfer" desc="Send to any address. Recipient doesn't need us." />
            <Feature title="FAssets" desc="FXRP, FBTC, FDOGE, FXLM. All private." />
            <Feature title="Vote" desc="Governance without revealing your position." />
            <Feature title="Message" desc="Wallet-to-wallet. End-to-end encrypted." />
            <Feature title="Limit Orders" desc="Oracle-protected. No one sees your levels." />
            <Feature title="Delegate" desc="Wrap, delegate, claim. No public trace." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.06] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">
            How it <em className="italic font-normal text-white/50">actually</em> works.
          </h2>
          <p className="mt-2 mb-12 text-sm text-white/30">Privacy questions answered plainly.</p>

          <div className="flex flex-col divide-y divide-white/[0.06]">
            <FaqRow q="How does it work?" a="You deposit tokens once. After that, all your activity happens privately inside Flare Confidential Compute — secure hardware that no one can peek into. Your wallet never appears on-chain again." />
            <FaqRow q="Is my wallet address visible?" a="Only your initial deposit is visible. After that, everything runs through a shared system wallet. There's no link back to you." />
            <FaqRow q="Can I send to a fresh wallet?" a="Yes. The recipient doesn't need to have used Encrypted Finance before. They receive tokens normally." />
            <FaqRow q="What if your system goes down?" a="Your funds are always safe. Your spending key plus on-chain encrypted notes equals full recovery. We can never lock you out." />
            <FaqRow q="Why only Flare?" a="Flare has native Confidential Compute built into the network. Hardware-level privacy guarantees that other chains don't offer natively. More chains coming." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-8">
        <p className="text-center text-xs text-white/20">&copy; 2026 Encrypted Finance.</p>
      </footer>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white/90">{title}</h3>
      <p className="mt-1 text-sm text-white/30 leading-relaxed">{desc}</p>
    </div>
  );
}

function FaqRow({ q, a }: { q: string; a: string }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer items-center justify-between py-5 select-none">
        <span className="text-sm text-white/80 pr-4">{q}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="shrink-0 text-white/20 transition-transform group-open:rotate-90"
        >
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <p className="pb-5 text-sm text-white/40 leading-relaxed">{a}</p>
    </details>
  );
}
