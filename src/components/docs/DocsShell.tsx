"use client";

import { useState, type ReactNode } from "react";
import { SiteLogo } from "@/components/SiteLogo";

export type DocsNavItem = {
  id: string;
  label: string;
  icon?: string;
};

type DocsShellProps = {
  children: ReactNode;
  nav: DocsNavItem[];
  toc?: DocsNavItem[];
  active: string;
  onActiveChange: (id: string) => void;
  sidebarFooter?: ReactNode;
};

function NavIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "home":
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 6.5L8 2L14 6.5V13.5C14 14 13.5 14.5 13 14.5H3C2.5 14.5 2 14 2 13.5V6.5Z" />
          <path d="M6 14.5V8.5H10V14.5" />
        </svg>
      );
    case "alert":
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 1.5L1.5 13H14.5L8 1.5Z" />
          <path d="M8 6V9" />
          <circle cx="8" cy="11" r="0.5" fill="currentColor" />
        </svg>
      );
    case "gear":
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="8" r="2.5" />
          <path d="M8 1V3M8 13V15M1 8H3M13 8H15M2.5 2.5L4 4M12 12L13.5 13.5M13.5 2.5L12 4M4 12L2.5 13.5" />
        </svg>
      );
    case "lock":
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="7" width="10" height="7" rx="1" />
          <path d="M5 7V5C5 3.3 6.3 2 8 2C9.7 2 11 3.3 11 5V7" />
        </svg>
      );
    case "eye":
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 8C1 8 4 3 8 3C12 3 15 8 15 8C15 8 12 13 8 13C4 13 1 8 1 8Z" />
          <circle cx="8" cy="8" r="2" />
        </svg>
      );
    case "question":
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="8" r="6.5" />
          <path d="M6 6C6 4.9 6.9 4 8 4C9.1 4 10 4.9 10 6C10 7 9 7.5 8 7.5V9" />
          <circle cx="8" cy="11" r="0.5" fill="currentColor" />
        </svg>
      );
    case "link":
      return (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.5 9.5L9.5 6.5M7 4.5L5.5 3C4.5 2 2.8 2 1.8 3C0.8 4 0.8 5.7 1.8 6.7L3.3 8.2M13 7.8L14.5 9.3C15.5 10.3 15.5 12 14.5 13C13.5 14 11.8 14 10.8 13L9.3 11.5M5.5 10.5L10.5 5.5" />
        </svg>
      );
    default:
      return null;
  }
}

function NavLink({
  item,
  active,
  onClick,
  size = "sidebar",
}: {
  item: DocsNavItem;
  active: boolean;
  onClick: () => void;
  size?: "sidebar" | "toc";
}) {
  const isSidebar = size === "sidebar";

  return (
    <a
      href={`#${item.id}`}
      onClick={onClick}
      className={`flex items-center gap-2.5 transition-colors ${
        isSidebar
          ? `rounded-lg px-3 py-2 text-[12px] ${
              active
                ? "bg-foreground/[0.06] font-medium text-foreground"
                : "text-foreground/45 hover:bg-foreground/[0.03] hover:text-foreground/70"
            }`
          : `py-1.5 text-[12px] ${
              active
                ? "font-medium text-foreground"
                : "text-foreground/45 hover:text-foreground/70"
            }`
      }`}
    >
      {isSidebar && item.icon && (
        <span className={active ? "text-foreground/60" : "text-foreground/30"}>
          <NavIcon icon={item.icon} />
        </span>
      )}
      {!isSidebar && active && (
        <span className="text-foreground/40">&gt;</span>
      )}
      <span className={!isSidebar && active ? "" : !isSidebar ? "pl-0" : ""}>
        {item.label}
      </span>
    </a>
  );
}

export function DocsShell({
  children,
  nav,
  toc,
  active,
  onActiveChange,
  sidebarFooter,
}: DocsShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tocItems = toc ?? nav;

  return (
    <div className="min-h-screen bg-surface-light text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-foreground/10 bg-surface-light/90 px-4 backdrop-blur-md md:px-6">
        <SiteLogo />
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-1 rounded-full border border-foreground/15 px-3.5 py-1.5 text-[11px] font-medium text-foreground/60 transition-colors hover:border-foreground/25 hover:text-foreground"
          >
            Website
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6H9M9 6L6.5 3.5M9 6L6.5 8.5" />
            </svg>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-foreground/[0.05] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 4L12 12M12 4L4 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M2 4H14M2 8H14M2 12H14" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        {/* Left sidebar */}
        <aside className="hidden w-[240px] shrink-0 border-r border-foreground/10 md:block">
          <nav className="sticky top-14 flex max-h-[calc(100vh-3.5rem)] flex-col gap-0.5 overflow-y-auto px-3 py-6">
            {nav.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                active={active === item.id}
                onClick={() => onActiveChange(item.id)}
              />
            ))}
            {sidebarFooter && (
              <div className="mt-auto border-t border-foreground/10 pt-6">
                {sidebarFooter}
              </div>
            )}
          </nav>
        </aside>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-surface-light pt-14 md:hidden">
            <nav className="flex flex-col gap-1 overflow-y-auto px-4 py-4">
              {nav.map((item) => (
                <NavLink
                  key={item.id}
                  item={item}
                  active={active === item.id}
                  onClick={() => {
                    onActiveChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                />
              ))}
            </nav>
          </div>
        )}

        {/* Main content */}
        <main className="min-w-0 flex-1 px-6 py-10 md:px-12 md:py-14 lg:max-w-[720px]">
          {children}
        </main>

        {/* Right TOC */}
        {tocItems.length > 0 && (
          <aside className="hidden w-[200px] shrink-0 xl:block">
            <div className="sticky top-20 px-4 py-14">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/40">
                On this page
              </p>
              <nav className="flex flex-col">
                {tocItems.map((item) => (
                  <NavLink
                    key={item.id}
                    item={item}
                    active={active === item.id}
                    onClick={() => onActiveChange(item.id)}
                    size="toc"
                  />
                ))}
              </nav>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
