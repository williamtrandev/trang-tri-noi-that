import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingContact } from "@/components/layout/floating-contact";
import { JsonLd } from "@/components/seo/json-ld";
import { localBusinessSchema, organizationSchema } from "@/lib/seo/schema";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "thiết kế nội thất",
    "thi công nội thất trọn gói",
    "sản xuất nội thất theo yêu cầu",
    "tủ bếp gỗ",
    "nội thất căn hộ",
    "nội thất biệt thự",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="grain min-h-dvh bg-surface text-ink antialiased">
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[10px] focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-foreground"
        >
          Bỏ qua đến nội dung chính
        </a>
        <Header />
        <main id="main" className="overflow-x-hidden pb-[76px] lg:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
