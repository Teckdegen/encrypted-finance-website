export function ClosingStatement() {
  return (
    <section className="relative px-6 py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 bottom-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          Public Settlement.{" "}
          <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
            Private Finance.
          </span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-foreground/60">
          The future of blockchain infrastructure is private by default.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#ecosystem"
            className="glow inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-white transition-all hover:bg-accent-dim hover:scale-105"
          >
            Explore Chains
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface px-8 text-sm font-medium text-foreground/80 transition-all hover:border-accent/50 hover:text-foreground"
          >
            Read Docs
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface px-8 text-sm font-medium text-foreground/80 transition-all hover:border-accent/50 hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
