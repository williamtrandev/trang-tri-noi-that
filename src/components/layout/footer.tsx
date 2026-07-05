import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerNav } from "@/config/nav";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-surface">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand block */}
          <div className="flex flex-col gap-5">
            <Link href={routes.home} className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-brand text-brand-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 20V9l8-5 8 5v11h-5v-6H9v6H4z" fill="currentColor" />
                </svg>
              </span>
              <span className="font-display text-xl font-semibold">{siteConfig.name}</span>
            </Link>
            <p className="max-w-sm text-[15px] leading-relaxed text-surface/70">
              {siteConfig.description}
            </p>
            <div className="flex flex-col gap-2.5 text-[15px] text-surface/80">
              <a href={siteConfig.phoneHref} className="flex items-center gap-3 hover:text-surface">
                <Phone className="h-4 w-4 text-brand-foreground/60" /> {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-surface">
                <Mail className="h-4 w-4 text-brand-foreground/60" /> {siteConfig.email}
              </a>
              <span className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-foreground/60" /> {siteConfig.address}
              </span>
            </div>
          </div>

          {[footerNav.services, footerNav.solutions, footerNav.company].map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-surface/50">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[15px] text-surface/75 transition-colors hover:text-surface">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-surface/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-surface/50">
            © {year} {siteConfig.legalName}. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-4">
            <Link href={routes.warranty} className="text-sm text-surface/60 hover:text-surface">
              Chính sách bảo hành
            </Link>
            <Link href={routes.privacy} className="text-sm text-surface/60 hover:text-surface">
              Bảo mật
            </Link>
            <div className="flex items-center gap-2">
              <a href={siteConfig.socials.facebook} aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-surface/10 hover:bg-surface/20">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>
              <a href={siteConfig.socials.youtube} aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full bg-surface/10 hover:bg-surface/20">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23 12s0-3.2-.4-4.7c-.2-.9-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.8-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.9.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.8 1.7-1.7.4-1.5.4-4.7.4-4.7zM9.8 15.3V8.7l6.2 3.3-6.2 3.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
