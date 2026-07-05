"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { primaryNav } from "@/config/nav";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const light = false;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || mobileOpen
          ? "border-line bg-surface/85 backdrop-blur-md"
          : "border-line/60 bg-surface/70 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link href={routes.home} className="flex items-center gap-2.5" aria-label={siteConfig.name}>
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-brand text-brand-foreground">
            <LogoMark />
          </span>
          <span
            className={cn(
              "font-display text-xl font-semibold tracking-tight transition-colors",
              light ? "text-surface" : "text-ink",
            )}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpenMenu(null)}>
          {primaryNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <div key={item.href} className="relative" onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-[10px] px-3.5 py-2 text-[15px] font-medium transition-colors",
                    active
                      ? light
                        ? "text-[color:var(--gold)]"
                        : "text-brand"
                      : light
                        ? "text-surface/90 hover:text-surface"
                        : "text-ink hover:text-brand",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform", openMenu === item.label && "rotate-180")}
                    />
                  )}
                </Link>

                {item.children && openMenu === item.label && (
                  <div className="absolute left-0 top-full pt-3">
                    <div className="w-[320px] overflow-hidden rounded-[14px] border border-line bg-surface p-2 shadow-[0_20px_60px_-15px_rgba(16,22,19,0.25)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-[10px] px-3 py-2.5 transition-colors hover:bg-surface-2"
                        >
                          <span className="block text-[15px] font-medium text-ink">{child.label}</span>
                          {child.description && (
                            <span className="mt-0.5 block text-sm text-ink-muted">{child.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className={cn(
              "flex items-center gap-2 text-[15px] font-semibold transition-colors",
              light ? "text-surface hover:text-[color:var(--gold)]" : "text-ink hover:text-brand",
            )}
          >
            <Phone className={cn("h-4 w-4", light ? "text-[color:var(--gold)]" : "text-brand")} />
            {siteConfig.phone}
          </a>
          <ButtonLink href={routes.quote} size="sm">
            Nhận báo giá
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            "grid h-11 w-11 place-items-center rounded-[10px] transition-colors lg:hidden",
            light ? "text-surface" : "text-ink",
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-surface lg:hidden">
          <nav className="flex flex-col gap-1 px-5 py-6">
            {primaryNav.map((item) => (
              <MobileNavItem key={item.href} item={item} />
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-line pt-6">
              <ButtonLink href={routes.quote} size="lg">
                Nhận báo giá miễn phí
              </ButtonLink>
              <ButtonLink href={siteConfig.phoneHref} variant="outline" size="lg">
                <Phone className="h-4 w-4" /> Gọi {siteConfig.phone}
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileNavItem({ item }: { item: (typeof primaryNav)[number] }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <Link href={item.href} className="rounded-[10px] px-3 py-3 text-lg font-medium text-ink hover:bg-surface-2">
        {item.label}
      </Link>
    );
  }
  return (
    <div>
      <button
        className="flex w-full items-center justify-between rounded-[10px] px-3 py-3 text-lg font-medium text-ink"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={cn("h-5 w-5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="ml-3 flex flex-col gap-0.5 border-l border-line pl-3">
          {item.children.map((child) => (
            <Link key={child.href} href={child.href} className="rounded-[10px] px-3 py-2.5 text-ink-muted hover:bg-surface-2">
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function LogoMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20V9l8-5 8 5v11h-5v-6H9v6H4z" fill="currentColor" />
    </svg>
  );
}
