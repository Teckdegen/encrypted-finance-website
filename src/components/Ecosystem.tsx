const chains = [
  "Ethereum",
  "Solana",
  "Sui",
  "Aptos",
  "Monad",
  "Berachain",
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-foreground">
            Choose an ecosystem.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
            Explore how Encrypted brings private financial infrastructure to
            different blockchain environments.
          </p>
        </div>

        {/* Chains Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chains.map((chain) => (
            <a
              key={chain}
              href={`#${chain.toLowerCase()}`}
              className="group flex h-32 items-center justify-between rounded-2xl border-2 border-foreground/10 bg-surface/50 px-8 transition-all hover:border-foreground hover:bg-surface-light"
            >
              <span className="text-2xl font-bold text-foreground">
                {chain}
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-foreground opacity-50 transition-all group-hover:translate-x-2 group-hover:opacity-100"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
