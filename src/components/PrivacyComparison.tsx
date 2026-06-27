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
      className={`block min-w-0 truncate text-right font-mono text-[11px] tabular-nums sm:text-sm ${
        isStatus ? "text-emerald-700" : "text-foreground"
      } ${blurred ? "blur-[5px] select-none sm:blur-[6px]" : ""}`}
    >
      {value}
    </span>
  );
}

function DataRow({
  label,
  valueKey,
  blurred,
}: {
  label: string;
  valueKey: keyof typeof txData;
  blurred?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4">
      <span className="shrink-0 text-xs text-foreground/45 sm:text-sm">{label}</span>
      <TxValue
        value={txData[valueKey]}
        blurred={blurred}
        isStatus={valueKey === "status"}
      />
    </div>
  );
}

export function PrivacyComparison() {
  return (
    <section id="privacy" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
            See the difference
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Privacy by default
          </h2>
          <p className="mt-4 text-sm text-foreground/50 md:text-base">
            Public chains expose every detail. Encrypted Finance keeps what matters private.
          </p>
        </div>

        {/* Mobile: stacked blocks */}
        <div className="space-y-4 md:hidden">
          <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-surface-light">
            <div className="border-b border-foreground/10 px-4 py-3.5 sm:px-6 sm:py-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/45">
                Public Chains
              </span>
            </div>
            <div className="divide-y divide-foreground/10">
              {rows.map((row) => (
                <DataRow key={`public-${row.label}`} label={row.label} valueKey={row.key} />
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-surface-light">
            <div className="border-b border-foreground/10 px-4 py-3.5 sm:px-6 sm:py-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/45">
                Encrypted Finance
              </span>
            </div>
            <div className="divide-y divide-foreground/10">
              {rows.map((row) => (
                <DataRow
                  key={`encrypted-${row.label}`}
                  label={row.label}
                  valueKey={row.key}
                  blurred={row.blurred}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: side-by-side columns */}
        <div className="hidden overflow-hidden rounded-2xl border border-foreground/10 bg-surface-light md:block">
          <div className="grid grid-cols-2 border-b border-foreground/10">
            <div className="border-r border-foreground/10 px-8 py-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                Public Chains
              </span>
            </div>
            <div className="px-8 py-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                Encrypted Finance
              </span>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-2 ${
                i < rows.length - 1 ? "border-b border-foreground/10" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-4 border-r border-foreground/10 px-8 py-5">
                <span className="shrink-0 text-sm text-foreground/45">{row.label}</span>
                <TxValue value={txData[row.key]} isStatus={row.key === "status"} />
              </div>
              <div className="flex items-center justify-between gap-4 px-8 py-5">
                <span className="shrink-0 text-sm text-foreground/45">{row.label}</span>
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
