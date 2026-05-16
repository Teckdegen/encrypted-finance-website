export function ClosingStatement() {
  return (
    <section className="relative px-6 py-32 bg-foreground text-background">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-5xl font-medium tracking-tight md:text-7xl lg:text-8xl">
          Public Settlement.
          <br />
          Private Finance.
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-lg leading-relaxed text-background/70 md:text-xl">
          The future of blockchain infrastructure is private by default.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#ecosystem"
            className="flex h-12 items-center justify-center rounded-full bg-background px-8 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-background/90"
          >
            Explore Chains
          </a>
          <a
            href="#docs"
            className="flex h-12 items-center justify-center rounded-full border-2 border-background px-8 text-sm font-bold uppercase tracking-widest text-background transition-colors hover:bg-background/10"
          >
            Read Docs
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full border-2 border-background px-8 text-sm font-bold uppercase tracking-widest text-background transition-colors hover:bg-background/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
