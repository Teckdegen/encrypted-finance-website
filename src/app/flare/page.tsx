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
          <a
            href="https://flare.tee.encrypted.finance"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex h-9 items-center rounded-full bg-foreground px-5 text-xs font-semibold text-background transition-opacity hover:opacity-90"
          >
            Launch App
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
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg"
              alt="Flare"
              className="h-14 w-14 rounded-full"
            />
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Private DeFi. Every Chain.
              </h1>
            </div>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
            One deposit. Then everything is private. Swaps, lending, staking, bridging, governance. Your wallet never shows up on-chain again.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://flare.tee.encrypted.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Launch App
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium text-foreground/80 transition-colors hover:border-foreground/30"
            >
              Read the Docs
            </a>
          </div>
        </div>

        {/* The Problem */}
        <section className="mb-20">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">The Problem</h2>
          <p className="text-base leading-relaxed text-foreground/70">
            Every transaction on a public blockchain is visible. Your wallet, your balances, your trades, your strategies. Anyone can see everything. MEV bots front-run you. Competitors track your moves. Your financial life is an open book.
          </p>
        </section>

        {/* The Solution */}
        <section className="mb-20">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">The Solution</h2>
          <p className="text-base leading-relaxed text-foreground/70">
            Encrypted Finance is a privacy layer built on Flare using FCC (Flare Confidential Compute). You deposit once, and after that your wallet never appears on-chain again. All your DeFi activity happens privately inside secure hardware that no one — not even us — can peek into.
          </p>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="mb-20">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">How It Works</h2>
          <div className="grid gap-4">
            <div className="rounded-xl border border-border/50 bg-surface-light/30 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">1</span>
                <div>
                  <h3 className="font-bold">You deposit once</h3>
                  <p className="mt-1 text-sm text-foreground/60">Your only on-chain transaction. After this, you&apos;re invisible.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border/50 bg-surface-light/30 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">2</span>
                <div>
                  <h3 className="font-bold">You sign instructions off-chain</h3>
                  <p className="mt-1 text-sm text-foreground/60">Zero gas. The SDK handles everything.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border/50 bg-surface-light/30 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">3</span>
                <div>
                  <h3 className="font-bold">FCC executes privately</h3>
                  <p className="mt-1 text-sm text-foreground/60">Your instruction runs inside secure hardware from a shared wallet. No link back to you.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border/50 bg-surface-light/30 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">4</span>
                <div>
                  <h3 className="font-bold">You receive encrypted notes</h3>
                  <p className="mt-1 text-sm text-foreground/60">Your balance is encrypted on-chain. Only your key can read it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">Tech Stack</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "FCC (Flare Confidential Compute) for private execution",
              "ECIES encryption for payload security",
              "EIP-712 signatures for authorization",
              "TEE hardware attestation for trust",
              "WebSocket indexer for real-time balance updates",
              "FTSO oracle integration for price feeds",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-lg border border-border/30 bg-surface-light/20 px-4 py-3">
                <span className="mt-0.5 text-accent">•</span>
                <span className="text-sm text-foreground/70">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What's Private */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">What&apos;s Private</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <FeatureCard title="Swaps" description="Trade any token pair without revealing your identity. Swaps route through SparkDEX, Kinetic, and other Flare DEXs. Same liquidity, same prices, but private. No front-running. No sandwich attacks." />
            <FeatureCard title="Lending" description="Supply collateral and borrow privately. Your positions and liquidation levels are invisible." />
            <FeatureCard title="Staking" description="Stake and earn rewards without broadcasting your holdings. Delegate to FTSO providers privately." />
            <FeatureCard title="Transfers" description="Send tokens to any Flare address privately. The recipient doesn't even need to have used Encrypted Finance before." />
            <FeatureCard title="FAssets" description="Mint, redeem, and manage FAssets (FXRP, FBTC, FDOGE, FXLM) privately. Firelight vaults, Upshift vaults, LayerZero bridging — all private." />
            <FeatureCard title="Governance" description="Vote on proposals without revealing your position. No vote buying. No social pressure." />
            <FeatureCard title="Messaging" description="Encrypted messages between wallets. End-to-end encrypted, readable only by the recipient." />
            <FeatureCard title="Oracle-Protected Trades" description="Set price conditions. The FCC only executes your trade when conditions are met. No one sees your limit orders." />
            <FeatureCard title="Wrapping & Delegation" description="Wrap FLR, delegate, claim rewards, join collateral pools. No public trace." />
            <FeatureCard title="FCC-Exclusive Operations" description="Dark pools, sealed-bid auctions, credit scoring, portfolio rebalancing, MEV protection, streaming payments, compliance proofs, private DAO participation." />
          </div>
        </section>

        {/* Security */}
        <section className="mb-20">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">Security</h2>
          <div className="grid gap-4">
            <div className="rounded-xl border border-border/50 bg-surface-light/30 p-6">
              <h3 className="font-bold">Your keys, your funds.</h3>
              <p className="mt-1 text-sm text-foreground/60">Spending key is generated and stored on your device. No custodian.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-surface-light/30 p-6">
              <h3 className="font-bold">Self-sovereign recovery.</h3>
              <p className="mt-1 text-sm text-foreground/60">If the FCC goes down, your spending key + on-chain notes = full recovery. Zero fund loss.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-surface-light/30 p-6">
              <h3 className="font-bold">Four layers of double-spend prevention.</h3>
              <p className="mt-1 text-sm text-foreground/60">On-chain checks, FCC pre-validation, instruction replay tracking, signature nonces.</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-surface-light/30 p-6">
              <h3 className="font-bold">Vault safety.</h3>
              <p className="mt-1 text-sm text-foreground/60">Note commitments, reentrancy guards, fee-on-transfer protection, gas DoS caps.</p>
            </div>
          </div>
        </section>

        {/* Multi-Chain */}
        <section className="mb-20">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Multi-Chain</h2>
          <p className="mb-6 text-base leading-relaxed text-foreground/70">
            Encrypted Finance is not Flare-only. The privacy layer deploys across multiple chains. Each chain gets its own FCC extension, vault contracts, and SDK.
          </p>
          <div className="overflow-hidden rounded-xl border border-border/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50 bg-surface-light/30">
                  <th className="px-4 py-3 text-left font-semibold">Chain</th>
                  <th className="px-4 py-3 text-left font-semibold">SDK</th>
                  <th className="px-4 py-3 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/30">
                  <td className="px-4 py-3">Flare</td>
                  <td className="px-4 py-3 font-mono text-xs text-accent">@encrypted-finance/flare</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">Testnet live (Coston2)</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3">More chains</td>
                  <td className="px-4 py-3 text-foreground/50">Coming soon</td>
                  <td className="px-4 py-3 text-foreground/50">In development</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-foreground/50">Same privacy. Same UX. One SDK per chain.</p>
        </section>

        {/* Gas */}
        <section className="mb-20">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Gas</h2>
          <div className="overflow-hidden rounded-xl border border-border/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50 bg-surface-light/30">
                  <th className="px-4 py-3 text-left font-semibold">Operation</th>
                  <th className="px-4 py-3 text-left font-semibold">Who Pays</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/30">
                  <td className="px-4 py-3">Deposit (your only TX)</td>
                  <td className="px-4 py-3">You</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Everything else</td>
                  <td className="px-4 py-3">FCC hot wallet</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-foreground/50">A small relay fee (0.2–0.5%) covers gas. You never need FLR for gas after your deposit.</p>
        </section>

        {/* Testnet */}
        <section className="mb-20">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Testnet (Coston2)</h2>
          <p className="mb-4 text-base text-foreground/70">Live now. Try it:</p>
          <div className="grid gap-3">
            <div className="flex items-center gap-3 rounded-lg border border-border/30 bg-surface-light/20 px-4 py-3">
              <span className="text-sm font-semibold text-foreground/50">Chain ID:</span>
              <span className="font-mono text-sm">114</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border/30 bg-surface-light/20 px-4 py-3">
              <span className="text-sm font-semibold text-foreground/50">Faucet:</span>
              <a href="https://faucet.flare.network/coston2" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-accent hover:underline">faucet.flare.network/coston2</a>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border/30 bg-surface-light/20 px-4 py-3">
              <span className="text-sm font-semibold text-foreground/50">App:</span>
              <a href="https://flare.tee.encrypted.finance" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-accent hover:underline">flare.tee.encrypted.finance</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">FAQ</h2>
          <div className="grid gap-4">
            <FaqItem question="Do I need to install anything?" answer="No. Connect any EVM wallet to the web app." />
            <FaqItem question="Can anyone see my balance?" answer="No. Only your spending key can decrypt your notes." />
            <FaqItem question="What if the FCC goes down?" answer="You still have your spending key. All notes are on-chain. Full recovery." />
            <FaqItem question="Is this custodial?" answer="No. The FCC cannot move funds without your signature." />
            <FaqItem question="What chains will Encrypted Finance support?" answer="Starting with Flare. More EVM chains coming." />
            <FaqItem question="How is this different from mixers?" answer="Mixers shuffle tokens. Encrypted Finance is a full private DeFi execution layer. Swap, lend, stake, bridge, vote, message — all without leaving privacy." />
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-xl border border-border/50 bg-surface-light/30 p-6">
      <h3 className="mb-2 font-bold">{question}</h3>
      <p className="text-sm text-foreground/60">{answer}</p>
    </div>
  );
}
