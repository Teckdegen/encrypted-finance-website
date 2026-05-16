export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
      {/* Light background */}
      <div className="pointer-events-none absolute inset-0 bg-[#f0ebe2]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content grid: text left, graphic right */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left side — text */}
        <div>
          <h1 className="text-[3rem] font-bold leading-[1.05] tracking-tight text-[#0a0a0a] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem]">
            Encrypted Layer
            <br />
            for Public
            <br />
            Chains
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#0a0a0a]/60 md:text-base">
            Most blockchains put your financial life on display. Every payment,
            business transaction, and payroll detail is permanently broadcasted
            to the world. Encrypted enables private and compliant finance.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#ecosystem"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#0a0a0a]/20 px-6 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#0a0a0a]/5"
            >
              Explore Chains
            </a>
            <a
              href="#community"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#0a0a0a] px-6 text-sm font-medium text-[#f0ebe2] transition-opacity hover:opacity-90"
            >
              Join Community
            </a>
          </div>
        </div>

        {/* Right side — dotted globe graphic */}
        <div className="relative hidden md:flex items-center justify-center">
          <svg
            viewBox="0 0 500 500"
            fill="none"
            className="w-full max-w-[500px] h-auto"
          >
            {/* Dotted circle (globe outline) */}
            <circle
              cx="250"
              cy="250"
              r="200"
              stroke="#0a0a0a"
              strokeWidth="1"
              strokeDasharray="3 6"
              opacity="0.3"
            />
            <circle
              cx="250"
              cy="250"
              r="150"
              stroke="#0a0a0a"
              strokeWidth="1"
              strokeDasharray="3 6"
              opacity="0.2"
            />
            <circle
              cx="250"
              cy="250"
              r="100"
              stroke="#0a0a0a"
              strokeWidth="1"
              strokeDasharray="3 6"
              opacity="0.15"
            />

            {/* Horizontal latitude lines */}
            <ellipse
              cx="250"
              cy="180"
              rx="180"
              ry="30"
              stroke="#0a0a0a"
              strokeWidth="1"
              strokeDasharray="2 5"
              opacity="0.2"
              fill="none"
            />
            <ellipse
              cx="250"
              cy="250"
              rx="200"
              ry="40"
              stroke="#0a0a0a"
              strokeWidth="1"
              strokeDasharray="2 5"
              opacity="0.25"
              fill="none"
            />
            <ellipse
              cx="250"
              cy="320"
              rx="180"
              ry="30"
              stroke="#0a0a0a"
              strokeWidth="1"
              strokeDasharray="2 5"
              opacity="0.2"
              fill="none"
            />

            {/* Vertical meridian lines */}
            <ellipse
              cx="250"
              cy="250"
              rx="40"
              ry="200"
              stroke="#0a0a0a"
              strokeWidth="1"
              strokeDasharray="2 5"
              opacity="0.2"
              fill="none"
            />
            <ellipse
              cx="250"
              cy="250"
              rx="100"
              ry="200"
              stroke="#0a0a0a"
              strokeWidth="1"
              strokeDasharray="2 5"
              opacity="0.15"
              fill="none"
            />

            {/* Dots representing nodes/chains */}
            <circle cx="180" cy="160" r="6" fill="#0a0a0a" />
            <circle cx="320" cy="140" r="5" fill="#0a0a0a" />
            <circle cx="350" cy="220" r="7" fill="#0a0a0a" />
            <circle cx="150" cy="280" r="5" fill="#0a0a0a" />
            <circle cx="300" cy="320" r="6" fill="#0a0a0a" />
            <circle cx="220" cy="350" r="4" fill="#0a0a0a" />
            <circle cx="380" cy="300" r="5" fill="#8b5cf6" />
            <circle cx="130" cy="200" r="4" fill="#8b5cf6" />

            {/* Connection lines between nodes */}
            <line x1="180" y1="160" x2="320" y2="140" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.3" />
            <line x1="320" y1="140" x2="350" y2="220" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.3" />
            <line x1="350" y1="220" x2="300" y2="320" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.3" />
            <line x1="180" y1="160" x2="150" y2="280" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.3" />
            <line x1="150" y1="280" x2="220" y2="350" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.3" />
            <line x1="300" y1="320" x2="380" y2="300" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.3" />
            <line x1="130" y1="200" x2="180" y2="160" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.4" />
            <line x1="380" y1="300" x2="350" y2="220" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.4" />

            {/* Small labels near nodes */}
            <text x="325" y="130" fontSize="8" fill="#0a0a0a" opacity="0.6" fontFamily="monospace">ETH</text>
            <text x="360" y="215" fontSize="8" fill="#0a0a0a" opacity="0.6" fontFamily="monospace">SOL</text>
            <text x="155" y="155" fontSize="8" fill="#0a0a0a" opacity="0.6" fontFamily="monospace">SUI</text>
            <text x="305" y="335" fontSize="8" fill="#0a0a0a" opacity="0.6" fontFamily="monospace">APT</text>
            <text x="385" y="295" fontSize="8" fill="#8b5cf6" opacity="0.7" fontFamily="monospace">MONAD</text>
            <text x="100" y="195" fontSize="8" fill="#8b5cf6" opacity="0.7" fontFamily="monospace">BERA</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
