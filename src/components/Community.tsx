export function Community() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col -space-y-6">
          {/* X / Twitter card */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-[3rem] bg-[#141414] p-12 transition-all hover:bg-[#1a1a1a] pb-20 z-0"
          >
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.15em] text-white">
                Find us on the feed
              </p>
              <p className="text-6xl font-medium text-accent md:text-8xl">
                270K+
              </p>
              <p className="mt-2 text-base font-medium text-foreground/50">Followers</p>
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
            className="group flex items-center justify-between rounded-[3rem] border border-white/5 bg-[#141414] p-12 transition-all hover:bg-[#1a1a1a] z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.15em] text-white">
                Join our community
              </p>
              <p className="text-6xl font-medium text-accent md:text-8xl">
                490K+
              </p>
              <p className="mt-2 text-base font-medium text-foreground/50">Members</p>
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
