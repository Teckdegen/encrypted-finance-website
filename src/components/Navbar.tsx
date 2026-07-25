import { SiteLogo } from "@/components/SiteLogo";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f0ebe2]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <SiteLogo imageClassName="h-8 w-8" />
        <a
          href="/chains"
          className="inline-flex h-9 items-center rounded-full bg-[#111110] px-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#f0ebe2] transition-opacity hover:opacity-85 sm:h-10 sm:px-6 sm:text-[11px]"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
