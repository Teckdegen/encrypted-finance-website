import { SiteLogo } from "@/components/SiteLogo";

const chains = [
  {
    id: "flare",
    name: "Flare",
    description: "Private DeFi execution layer powered by Flare Confidential Compute.",
    href: "/flare",
    tags: ["EVM", "TEE"],
    live: true,
    logo: "https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg",
  },
  {
    id: "monad",
    name: "Monad",
    description: "High-performance EVM chain with private financial infrastructure coming soon.",
    href: "#",
    tags: ["EVM"],
    live: false,
    logo: "https://pbs.twimg.com/profile_images/1967693862559698944/XTfCXXGa_400x400.jpg",
  },
  {
    id: "megaeth",
    name: "MegaETH",
    description: "Real-time Ethereum L2 with encrypted finance support coming soon.",
    href: "#",
    tags: ["EVM"],
    live: false,
    logo: "https://pbs.twimg.com/profile_images/1861751545790070784/KvlxTzAq_400x400.jpg",
  },
];

export default function ChainsPage() {
  return (
    <div className="min-h-screen bg-surface-light text-foreground">
      <header className="sticky top-0 z-50 flex h-14 items-center border-b border-foreground/10 bg-surface-light/90 px-4 backdrop-blur-md md:px-6">
        <SiteLogo />
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-10 md:px-10 md:py-14">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
          Get Started
        </p>
        <h1 className="font-serif text-[32px] leading-tight md:text-[38px]">
          Supported Chains
        </h1>
        <p className="mt-5 text-[15px] leading-[1.8] text-foreground/55">
          Build private applications on public blockchains. Encrypted Finance adapts its privacy layer to each ecosystem while preserving how the underlying networks operate.
        </p>
        <p className="mt-3 text-[15px] leading-[1.8] text-foreground/55">
          Select a chain below to read the documentation and integration details for that network.
        </p>

        <div className="mt-10 space-y-4">
          {chains.map((chain) => (
            <div
              key={chain.id}
              className="rounded-2xl border border-foreground/10 bg-surface/40 p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <img
                    src={chain.logo}
                    alt={chain.name}
                    className="h-11 w-11 rounded-full ring-1 ring-foreground/10"
                  />
                  <div>
                    <h2 className="font-serif text-[24px]">{chain.name}</h2>
                    <p className="mt-2 max-w-lg text-[14px] leading-[1.7] text-foreground/55">
                      {chain.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {chain.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-foreground/[0.05] px-2.5 py-0.5 text-[10px] font-medium text-foreground/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {chain.live ? (
                  <a
                    href={chain.href}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-foreground/15 px-4 py-2 text-[11px] font-semibold text-foreground/70 transition-colors hover:border-foreground/25 hover:text-foreground"
                  >
                    View docs
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 6H9M9 6L6.5 3.5M9 6L6.5 8.5" />
                    </svg>
                  </a>
                ) : (
                  <span className="shrink-0 rounded-full bg-foreground/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/35">
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
