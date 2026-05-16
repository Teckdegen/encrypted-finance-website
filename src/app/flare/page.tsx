import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encrypted Finance — Flare",
  description: "Private DeFi on Flare. One deposit, then everything is private.",
};

export default function FlarePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://pbs.twimg.com/profile_images/2052396648999923715/s8bKFJnU_400x400.jpg"
              alt="Logo"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-lg font-semibold tracking-tight">
              Encrypted Finance
            </span>
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 pt-32 pb-24">
        {/* Back link */}
        <a
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </a>

        {/* Hero */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg"
              alt="Flare"
              className="h-14 w-14 rounded-full"
            />
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Private DeFi on Flare
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
            One deposit. Then everything is private. Swaps, lending, staking, bridging, governance. Your wallet never shows up on-chain again.
          </p>
        </div>

        {/* The Problem */}
        <section className="mb-24">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
            The Problem
          </p>
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Every transfer you send on a public chain is visible to everyone. Forever.
          </h2>
          <p className="text-lg text-foreground/70">Until now.</p>
        </section>

        {/* How It Works — 3 Steps */}
        <section className="mb-24">
          <div className="grid gap-6">
            {/* Step 01 — Wrap */}
            <div className="rounded-2xl border border-border/50 bg-surface-light/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">01</span>
                <h3 className="text-xl font-bold">WRAP</h3>
              </div>
              <p className="text-sm text-foreground/60 mb-6">Any token enters the private system.</p>
              <div className="flex items-center gap-4 font-mono text-sm">
                <span className="rounded-lg bg-surface px-3 py-2 text-foreground/70">100 TOKEN</span>
                <span className="text-foreground/30">→</span>
                <span className="rounded-lg bg-accent/10 px-3 py-2 text-accent">PRIVATE NOTE</span>
              </div>
            </div>

            {/* Step 02 — Transact */}
            <div className="rounded-2xl border border-border/50 bg-surface-light/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">02</span>
                <h3 className="text-xl font-bold">TRANSACT</h3>
              </div>
              <p className="text-sm text-foreground/60 mb-6">Send, swap, or earn. Nothing leaks.</p>
              <div className="flex items-center gap-4 font-mono text-sm">
                <span className="rounded-lg bg-surface px-3 py-2 text-foreground/70">▓▓▓ PRIVATE</span>
                <span className="text-foreground/30">→</span>
                <span className="rounded-lg bg-surface px-3 py-2 text-foreground/70">▓▓▓ PRIVATE</span>
              </div>
            </div>

            {/* Step 03 — Unwrap */}
            <div className="rounded-2xl border border-border/50 bg-surface-light/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">03</span>
                <h3 className="text-xl font-bold">UNWRAP</h3>
              </div>
              <p className="text-sm text-foreground/60 mb-6">Back to your token. With yield.</p>
              <div className="flex items-center gap-4 font-mono text-sm">
                <span className="rounded-lg bg-accent/10 px-3 py-2 text-accent">PRIVATE NOTE</span>
                <span className="text-foreground/30">→</span>
                <span className="rounded-lg bg-surface px-3 py-2 text-foreground/70">105 TOKEN</span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
            Powered by Flare Confidential Compute
          </p>
        </section>

        {/* What's Private */}
        <section className="mb-24">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
            What&apos;s Private
          </p>
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Everything.</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard title="Swaps" description="Trade any token pair without revealing your identity. No front-running. No sandwich attacks." />
            <FeatureCard title="Lending" description="Supply collateral and borrow privately. Your positions are invisible." />
            <FeatureCard title="Staking" description="Stake and earn rewards without broadcasting your holdings." />
            <FeatureCard title="Transfers" description="Send tokens to any Flare address privately." />
            <FeatureCard title="FAssets" description="Mint, redeem, and manage FAssets privately." />
            <FeatureCard title="Governance" description="Vote on proposals without revealing your position." />
            <FeatureCard title="Messaging" description="Encrypted messages between wallets. End-to-end encrypted." />
            <FeatureCard title="Oracle-Protected Trades" description="Set price conditions. Your trade executes when conditions are met. No one sees your limit orders." />
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
            FAQ
          </p>
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">How it actually works.</h2>
          <p className="mb-8 text-sm text-foreground/50">Privacy questions answered plainly.</p>

          <div className="grid gap-3">
            <FaqItem
              category="BASICS"
              question="How does it work?"
              answer="You deposit tokens once. After that, all your activity happens privately inside Flare Confidential Compute (FCC) — secure hardware that no one can peek into. Your wallet never appears on-chain again."
            />
            <FaqItem
              category="PRIVACY"
              question="Is my wallet address visible?"
              answer="Only your initial deposit is visible. After that, everything runs through a shared system wallet. There's no link back to you."
            />
            <FaqItem
              category="BASICS"
              question="Can I send to a fresh wallet?"
              answer="Yes. The recipient doesn't need to have used Encrypted Finance before. They receive tokens normally."
            />
            <FaqItem
              category="PRIVACY"
              question="What if your system goes down?"
              answer="Your funds are always safe. Your spending key + on-chain encrypted notes = full recovery. We can never lock you out."
            />
            <FaqItem
              category="TEE"
              question="Why only Flare?"
              answer="Flare has native Confidential Compute (FCC) built into the network. This gives us hardware-level privacy guarantees that other chains don't offer natively. More chains coming as they add similar capabilities."
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-center">
          <p className="text-xs text-foreground/40">&copy; 2026 Encrypted Finance.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-border/50 bg-surface-light/30 p-6">
      <h3 className="mb-2 font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-foreground/60">{description}</p>
    </div>
  );
}

function FaqItem({ category, question, answer }: { category: string; question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-border/50 bg-surface-light/30 overflow-hidden">
      <summary className="flex cursor-pointer items-center gap-3 p-6 select-none">
        <span className="rounded bg-foreground/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground/50">
          {category}
        </span>
        <span className="flex-1 font-medium">{question}</span>
        <span className="text-foreground/30 transition-transform group-open:rotate-45 text-xl">+</span>
      </summary>
      <div className="px-6 pb-6 pt-0">
        <p className="text-sm leading-relaxed text-foreground/60">{answer}</p>
      </div>
    </details>
  );
}
