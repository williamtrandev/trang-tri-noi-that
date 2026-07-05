import type { Metadata } from "next";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  title: "Chính sách bảo mật",
  description: "Chính sách bảo mật thông tin khách hàng của Nhà Mộc.",
  path: routes.privacy,
  noindex: true,
});

const sections = [
  {
    h: "Thông tin chúng tôi thu thập",
    p: "Chúng tôi chỉ thu thập thông tin bạn chủ động cung cấp khi gửi yêu cầu báo giá hoặc liên hệ: họ tên, số điện thoại, email và mô tả nhu cầu.",
  },
  {
    h: "Mục đích sử dụng",
    p: "Thông tin được dùng để liên hệ tư vấn, gửi báo giá và chăm sóc khách hàng. Chúng tôi không bán hoặc chia sẻ thông tin cho bên thứ ba vì mục đích thương mại.",
  },
  {
    h: "Bảo mật thông tin",
    p: "Thông tin khách hàng được lưu trữ an toàn và chỉ nhân sự có trách nhiệm mới được truy cập.",
  },
  {
    h: "Liên hệ",
    p: `Mọi thắc mắc về bảo mật, vui lòng liên hệ ${siteConfig.email} hoặc ${siteConfig.phone}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Chính sách bảo mật", path: routes.privacy }]} />
      <section className="py-10 lg:py-16">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-ink lg:text-5xl">Chính sách bảo mật</h1>
          <div className="mt-8 flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-xl font-semibold text-ink">{s.h}</h2>
                <p className="mt-2 text-lg leading-relaxed text-ink-muted">{s.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
