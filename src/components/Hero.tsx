export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6">
      {/* Light background with subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[#f0ebe2]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Bold italic headline — sized to match reference */}
        <h1 className="text-[3.5rem] font-black italic leading-[0.95] tracking-tight text-[#0a0a0a] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem]">
          Encrypted Layer
          <br />
          for Public Chains
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-[#0a0a0a]/50 md:text-base">
          Private financial infrastructure for blockchain ecosystems.
        </p>
      </div>
    </section>
  );
}
