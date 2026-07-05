import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";

/**
 * Desktop: nút nổi Zalo + Gọi (góc phải dưới).
 * Mobile: thanh CTA sticky đáy 3 nút — bộ phận chuyển đổi quan trọng nhất.
 * Zalo dùng deep-link thuần (không nhúng widget nặng, bảo vệ INP).
 */
export function FloatingContact() {
  return (
    <>
      {/* Desktop floating buttons */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex">
        <a
          href={siteConfig.zaloUrl}
          aria-label="Nhắn Zalo cho chúng tôi"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-[0_10px_30px_-8px_rgba(31,77,58,0.6)] transition-transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href={siteConfig.phoneHref}
          aria-label={`Gọi ${siteConfig.phone}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-surface shadow-[0_10px_30px_-8px_rgba(16,22,19,0.6)] transition-transform hover:scale-105"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-surface/95 backdrop-blur-md lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a href={siteConfig.phoneHref} className="flex flex-col items-center gap-1 py-2.5 text-ink" aria-label="Gọi ngay">
          <Phone className="h-5 w-5 text-brand" />
          <span className="text-xs font-medium">Gọi ngay</span>
        </a>
        <a href={siteConfig.zaloUrl} className="flex flex-col items-center gap-1 border-x border-line py-2.5 text-ink" aria-label="Nhắn Zalo">
          <MessageCircle className="h-5 w-5 text-brand" />
          <span className="text-xs font-medium">Zalo</span>
        </a>
        <Link href={routes.quote} className="flex flex-col items-center gap-1 bg-brand py-2.5 text-brand-foreground" aria-label="Nhận báo giá">
          <QuoteIcon />
          <span className="text-xs font-semibold">Báo giá</span>
        </Link>
      </div>
    </>
  );
}

function QuoteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h4" />
    </svg>
  );
}
