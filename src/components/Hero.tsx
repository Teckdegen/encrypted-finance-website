export function Hero() {
  return (
    <section className="relative bg-background bg-grid px-6 pb-20 pt-28 sm:pt-32 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex min-h-[calc(100dvh-11rem)] flex-col justify-center">
          <h1 className="font-serif text-[clamp(2.5rem,9vw,7rem)] font-normal uppercase leading-[0.9] tracking-[-0.02em] text-foreground">
            Encrypted
            <br />
            Finance.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/55 sm:text-xl md:text-2xl">
            Confidential layer for public chains. Encrypted Finance brings
            confidential DeFi execution to public chains.
          </p>

          <div className="mt-9">
            <a
              href="/chains"
              className="inline-flex h-12 items-center rounded-full bg-[#111110] px-8 text-sm font-semibold text-[#f0ebe2] transition-opacity hover:opacity-85 sm:h-14 sm:px-10 sm:text-base"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
