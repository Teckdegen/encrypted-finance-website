export function Community() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-4">
          {/* X / Twitter Card */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] bg-foreground p-10 shadow-2xl transition-transform hover:-translate-y-1 sm:flex-row sm:items-center min-h-[200px]"
          >
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-background/60">
                FIND US ON THE FEED
              </p>
              <div className="flex items-center gap-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-background"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.15H5.059z" />
                </svg>
                <h3 className="text-4xl font-medium text-background">
                  X.com
                </h3>
              </div>
            </div>
            
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute right-10 top-10 text-background opacity-50 transition-all group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-100 sm:static sm:translate-x-0 sm:translate-y-0"
            >
              <path
                d="M5 19L19 5M19 5V15M19 5H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Telegram Card */}
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] bg-foreground p-10 shadow-2xl transition-transform hover:-translate-y-1 sm:flex-row sm:items-center min-h-[200px] z-10 -mt-10"
          >
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-background/60">
                JOIN OUR COMMUNITY
              </p>
              <div className="flex items-center gap-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-background"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <h3 className="text-4xl font-medium text-background">
                  Telegram
                </h3>
              </div>
            </div>
            
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute right-10 top-10 text-background opacity-50 transition-all group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-100 sm:static sm:translate-x-0 sm:translate-y-0"
            >
              <path
                d="M5 19L19 5M19 5V15M19 5H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
