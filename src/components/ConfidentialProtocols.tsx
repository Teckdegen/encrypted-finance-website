"use client";

import { useEffect, useState } from "react";

type Protocol = {
  id: string;
  name: string;
  logo: string;
  action: string;
  amount: string;
};

const UNLINK =
  "https://www.unlink.xyz/_next/image?w=96&q=75&dpl=dpl_7rFafbVhHEtrx9NBUJCG4KTZRh7i&url=%2Fimages%2Fprotocols%2F";

const protocols: Protocol[] = [
  { id: "lido", name: "Lido", logo: "/protocols/lido.png", action: "Stake ETH", amount: "48.20 ETH" },
  { id: "aave", name: "Aave", logo: "/protocols/aave.png", action: "Supply & borrow", amount: "125,000 USDC" },
  { id: "uniswap", name: "Uniswap", logo: "/protocols/uniswap.jpg", action: "Swap", amount: "12,450 USDC" },
  { id: "morpho", name: "Morpho", logo: "/protocols/morpho.jpg", action: "Lend", amount: "80,000 USDC" },
  { id: "curve", name: "Curve", logo: "/protocols/curve.jpg", action: "Provide liquidity", amount: "64,300 crvUSD" },
  { id: "compound", name: "Compound", logo: `${UNLINK}compound-v3.png`, action: "Supply & borrow", amount: "60,000 USDC" },
  { id: "euler", name: "Euler", logo: `${UNLINK}euler-v2.png`, action: "Lend", amount: "35,000 USDC" },
  { id: "pendle", name: "Pendle", logo: "https://icons.llamao.fi/icons/protocols/pendle?w=128&h=128", action: "Trade yield", amount: "22.5 ETH" },
  { id: "ethena", name: "Ethena", logo: "https://icons.llamao.fi/icons/protocols/ethena?w=128&h=128", action: "Mint USDe", amount: "90,000 USDe" },
];

const SCRAMBLE = "0123456789ABCDEF✳✦░▓█";

function scramble(len: number) {
  let out = "";
  for (let i = 0; i < len; i++) {
    out += SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)];
  }
  return out;
}

export function ConfidentialProtocols() {
  const [active, setActive] = useState(0);
  const [encrypting, setEncrypting] = useState(false);
  const [cipher, setCipher] = useState("");
  const p = protocols[active];

  // Auto-cycle through protocols every 2 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % protocols.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Re-run the "encrypting" sequence whenever the selected protocol changes.
  useEffect(() => {
    setEncrypting(true);
    let ticks = 0;
    const scrambleTimer = setInterval(() => {
      setCipher(scramble(18));
      ticks++;
      if (ticks > 6) clearInterval(scrambleTimer);
    }, 70);
    const done = setTimeout(() => setEncrypting(false), 560);
    return () => {
      clearInterval(scrambleTimer);
      clearTimeout(done);
    };
  }, [active]);

  return (
    <section id="protocols" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
            Confidential execution
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Your favorite protocols, made private
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/50 md:text-base">
            Route any DeFi action through Encrypted Finance. On-chain it settles as
            a confidential transaction — the protocol executes, the details stay yours.
          </p>
        </div>

        {/* Rotating spotlight — one protocol on the line at a time */}
        <div className="relative mb-4 flex h-28 items-center justify-center">
          {protocols.map((proto, i) => {
            const isActive = i === active;
            return (
              <button
                key={proto.id}
                onClick={() => setActive(i)}
                aria-label={proto.name}
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
                className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5 transition-all duration-500 ease-out ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-90 opacity-0"
                }`}
              >
                <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-surface-light ring-2 ring-foreground shadow-lg sm:h-20 sm:w-20">
                  <img
                    src={proto.logo}
                    alt={proto.name}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="text-sm font-semibold text-foreground sm:text-base">
                  {proto.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="mb-10 flex items-center justify-center gap-2">
          {protocols.map((proto, i) => (
            <button
              key={proto.id}
              onClick={() => setActive(i)}
              aria-label={proto.name}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-5 bg-foreground" : "w-1.5 bg-foreground/25 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Confidential terminal card */}
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#111110] p-5 sm:p-8 md:rounded-[2rem] md:p-10">
          {/* Scanline texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-100"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.025) 2px, rgba(255,255,255,0.025) 3px)",
            }}
          />

          {/* Flow: You -> Encrypted Finance -> Protocol */}
          <div className="relative z-10 flex items-center justify-between gap-2 sm:gap-4">
            <FlowNode label="You">
              <span className="flex h-full w-full items-center justify-center text-lg text-[#111110] sm:text-xl">
                ⬡
              </span>
            </FlowNode>

            <Connector />

            <FlowNode label="Encrypted Finance" ring>
              <span className="flex h-full w-full items-center justify-center font-mono text-sm font-bold text-[#111110] sm:text-base">
                {"{}"}
              </span>
            </FlowNode>

            <Connector />

            <FlowNode label={p.name}>
              <img src={p.logo} alt={p.name} className="h-full w-full object-cover" />
            </FlowNode>
          </div>

          {/* Confidential receipt */}
          <div
            key={active}
            className="confidential-reveal relative z-10 mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:mt-10 sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f0ebe2]/45">
                On-chain transaction
              </span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  encrypting
                    ? "bg-amber-400/10 text-amber-300"
                    : "bg-emerald-400/10 text-emerald-300"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    encrypting ? "animate-pulse bg-amber-300" : "bg-emerald-300"
                  }`}
                />
                {encrypting ? "Encrypting" : "Confidential"}
              </span>
            </div>

            <ReceiptRow label="Action">
              <span className="font-mono text-[11px] text-[#f0ebe2] sm:text-sm">
                {p.action} · {p.name}
              </span>
            </ReceiptRow>
            <ReceiptRow label="Amount">
              <CipherValue value={p.amount} cipher={cipher} encrypting={encrypting} />
            </ReceiptRow>
            <ReceiptRow label="Sender">
              <CipherValue value="0x7f3a91…b2c8" cipher={cipher} encrypting={encrypting} />
            </ReceiptRow>
            <ReceiptRow label="Strategy">
              <CipherValue value="private" cipher={cipher} encrypting={encrypting} />
            </ReceiptRow>
            <ReceiptRow label="Tx hash" last>
              <span className="font-mono text-[11px] text-[#f0ebe2]/70 sm:text-sm">
                0x9d4e2a…f7c31
              </span>
            </ReceiptRow>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowNode({
  label,
  children,
  ring,
}: {
  label: string;
  children: React.ReactNode;
  ring?: boolean;
}) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <span
        className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#f0ebe2] sm:h-16 sm:w-16 ${
          ring ? "ring-2 ring-[#f0ebe2]/40 ring-offset-2 ring-offset-[#111110]" : ""
        }`}
      >
        {children}
      </span>
      <span className="max-w-[5rem] text-center text-[9px] leading-tight text-[#f0ebe2]/60 sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}

function Connector() {
  return (
    <div className="relative mb-6 h-px flex-1 bg-[#f0ebe2]/15">
      <span className="flow-packet absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#f0ebe2] shadow-[0_0_8px_rgba(240,235,226,0.8)]" />
    </div>
  );
}

function ReceiptRow({
  label,
  children,
  last,
}: {
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-3 ${
        last ? "" : "border-b border-white/5"
      }`}
    >
      <span className="shrink-0 text-xs text-[#f0ebe2]/40 sm:text-sm">{label}</span>
      {children}
    </div>
  );
}

function CipherValue({
  value,
  cipher,
  encrypting,
}: {
  value: string;
  cipher: string;
  encrypting: boolean;
}) {
  if (encrypting) {
    return (
      <span className="truncate font-mono text-[11px] text-amber-300/80 sm:text-sm">
        {cipher.slice(0, Math.max(6, value.length))}
      </span>
    );
  }
  return (
    <span className="truncate select-none font-mono text-[11px] text-[#f0ebe2] blur-[5px] sm:text-sm sm:blur-[6px]">
      {value}
    </span>
  );
}
