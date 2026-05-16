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
          Meet the chains<br />building with Encrypted Finance
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
          Experience the power of private financial infrastructure and how
          it&apos;s being used to unlock new blockchain use cases across
          ecosystems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-20">
          <a
            href="#how-it-works"
            className="flex h-12 items-center justify-center rounded-full border-2 border-foreground px-8 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground/10"
          >
            How it works
          </a>
          <a
            href="#apply"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-bold uppercase tracking-widest text-background transition-colors hover:bg-foreground/90"
          >
            Apply for funding
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-2"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Stats row - White/Beige Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-2 sm:grid-cols-3 -mb-16">
          <div className="rounded-t-3xl rounded-b-xl bg-foreground px-6 py-12 shadow-2xl transition-transform hover:-translate-y-1">
            <p className="text-5xl font-medium text-background md:text-7xl">50+</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-background/60">
              ECOSYSTEM PROJECTS
            </p>
          </div>
          <div className="rounded-t-3xl rounded-b-xl bg-foreground px-6 py-12 shadow-2xl transition-transform hover:-translate-y-1 z-10 sm:-mt-4">
            <p className="text-5xl font-medium text-background md:text-7xl">1000+</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-background/60">
              DEVELOPERS
            </p>
          </div>
          <div className="rounded-t-3xl rounded-b-xl bg-foreground px-6 py-12 shadow-2xl transition-transform hover:-translate-y-1">
            <p className="text-5xl font-medium text-background md:text-7xl">10+</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-background/60">
              ENTERPRISE PILOTS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
