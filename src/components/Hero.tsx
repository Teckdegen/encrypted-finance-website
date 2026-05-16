export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center mt-12">
        {/* Main headline */}
        <h1 className="mb-8 text-6xl font-black italic tracking-tighter md:text-8xl lg:text-[10rem] leading-[0.85] text-foreground">
          Encrypted Layer <br />for Public Chains
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
          Private financial infrastructure for blockchain ecosystems.
        </p>
      </div>
    </section>
  );
}
