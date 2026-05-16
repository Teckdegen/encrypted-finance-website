export function Community() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-4">
          {/* X / Twitter card */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl bg-[#1a1a1f] p-8 transition-all hover:bg-[#222228] md:p-10"
          >
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-400/80">
                Find us on the feed
              </p>
              <p className="text-5xl font-bold text-green-400 md:text-6xl">
                10K+
              </p>
              <p className="mt-1 text-sm text-green-400/60">Followers</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              {/* X logo */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="flex items-center gap-1 text-lg font-mono text-white">
                X.com
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-foreground/50 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </a>

          {/* Telegram card */}
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-border/30 bg-[#1a1a1f] p-8 transition-all hover:bg-[#222228] md:p-10"
          >
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/80">
                Join our community
              </p>
              <p className="text-5xl font-bold text-orange-400 md:text-6xl">
                5K+
              </p>
              <p className="mt-1 text-sm text-orange-400/60">Members</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              {/* Telegram logo */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span className="flex items-center gap-1 text-lg font-mono text-white">
                Telegram
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-foreground/50 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
