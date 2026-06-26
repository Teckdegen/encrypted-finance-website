const txData = {
  sender: "0x7f3a91...b2c8",
  recipient: "0x4e8b2d...9a71",
  amount: "12,450.00 USDC",
  txHash: "0x9d4e2a...f7c31",
  status: "Success",
};

const rows: { label: string; key: keyof typeof txData; blurred?: boolean }[] = [
  { label: "Sender", key: "sender", blurred: true },
  { label: "Recipient", key: "recipient", blurred: true },
  { label: "Amount", key: "amount", blurred: true },
  { label: "Tx hash", key: "txHash" },
  { label: "Status", key: "status" },
];

function TxValue({
  value,
  blurred,
  isStatus,
}: {
  value: string;
  blurred?: boolean;
  isStatus?: boolean;
}) {
  return (
    <span
      className={`font-mono text-sm tabular-nums ${
        isStatus ? "text-emerald-700" : "text-foreground"
      } ${blurred ? "blur-[6px] select-none" : ""}`}
    >
      {value}
    </span>
  );
}

export function PrivacyComparison() {
  return (
    <section id="privacy" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
            See the difference
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Privacy by default
          </h2>
          <p className="mt-4 text-sm text-foreground/50 md:text-base">
            Public chains expose every detail. Encrypted Finance keeps what matters private.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-surface-light">
          {/* Column headers */}
          <div className="grid grid-cols-2 border-b border-foreground/10">
            <div className="border-r border-foreground/10 px-5 py-4 md:px-8 md:py-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/45 md:text-xs">
                Public Chains
              </span>
            </div>
            <div className="px-5 py-4 md:px-8 md:py-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/45 md:text-xs">
                Encrypted Finance
              </span>
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-2 ${
                i < rows.length - 1 ? "border-b border-foreground/10" : ""
              }`}
            >
              {/* Public column */}
              <div className="flex items-center justify-between gap-3 border-r border-foreground/10 px-5 py-4 md:px-8 md:py-5">
                <span className="shrink-0 text-xs text-foreground/45 md:text-sm">
                  {row.label}
                </span>
                <TxValue
                  value={txData[row.key]}
                  isStatus={row.key === "status"}
                />
              </div>

              {/* Encrypted column */}
              <div className="flex items-center justify-between gap-3 px-5 py-4 md:px-8 md:py-5">
                <span className="shrink-0 text-xs text-foreground/45 md:text-sm">
                  {row.label}
                </span>
                <TxValue
                  value={txData[row.key]}
                  blurred={row.blurred}
                  isStatus={row.key === "status"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
