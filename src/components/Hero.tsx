export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Main headline — large serif-like feel */}
        <h1 className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-foreground">Meet the chains</span>
          <br />
          <span className="text-foreground">building with</span>
          <br />
          <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent glow-text">
            Encrypted Finance
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-16 max-w-2xl text-lg leading-relaxed text-foreground/60 md:text-xl">
          Experience the power of private financial infrastructure and how
          it&apos;s being used to unlock new blockchain use cases across
          ecosystems.
        </p>

        {/* Stats row */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border/40 bg-surface-light/30 px-6 py-8 backdrop-blur-sm">
            <p className="text-4xl font-bold md:text-5xl">6+</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Supported Chains
            </p>
          </div>
          <div className="rounded-2xl border border-border/40 bg-surface-light/30 px-6 py-8 backdrop-blur-sm">
            <p className="text-4xl font-bold md:text-5xl">100%</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Private by Default
            </p>
          </div>
          <div className="rounded-2xl border border-border/40 bg-surface-light/30 px-6 py-8 backdrop-blur-sm">
            <p className="text-4xl font-bold md:text-5xl">∞</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Composability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
