import { SiteLogo } from "@/components/SiteLogo";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f0ebe2]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <SiteLogo imageClassName="h-8 w-8" />

        <div className="hidden items-center gap-6 md:flex">
          <a href="#privacy" className="text-sm font-medium text-[#0a0a0a]/70 hover:text-[#0a0a0a] transition-colors">
            Privacy
          </a>
          <a href="#community" className="text-sm font-medium text-[#0a0a0a]/70 hover:text-[#0a0a0a] transition-colors">
            Community
          </a>
          <a
            href="/chains"
            className="inline-flex h-9 items-center rounded-full bg-[#0a0a0a] px-5 text-xs font-semibold text-[#f0ebe2] transition-opacity hover:opacity-80"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
