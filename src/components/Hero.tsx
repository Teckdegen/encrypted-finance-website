export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center mt-12">
        {/* Main headline */}
        <h1 className="mb-6 text-5xl font-medium tracking-tight md:text-7xl lg:text-8xl text-foreground">
          Encrypted Layer <br />for Public Chains
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
          Private financial infrastructure for blockchain ecosystems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-10">
          <a
            href="#ecosystem"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-bold uppercase tracking-widest text-background transition-colors hover:bg-foreground/90"
          >
            Explore Chains
          </a>
          <a
            href="#learn-more"
            className="flex h-12 items-center justify-center rounded-full border-2 border-foreground px-8 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
