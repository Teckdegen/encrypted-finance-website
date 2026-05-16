export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Light grid background overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#f5f5f3]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Massive bold italic headline */}
        <h1 className="text-[4rem] font-black italic leading-[0.9] tracking-tighter text-[#0a0a0a] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
          Encrypted
          <br />
          Layer
          <br />
          for Public
          <br />
          Chains
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[#0a0a0a]/60 md:text-lg">
          Private financial infrastructure for blockchain ecosystems.
        </p>
      </div>
    </section>
  );
}
