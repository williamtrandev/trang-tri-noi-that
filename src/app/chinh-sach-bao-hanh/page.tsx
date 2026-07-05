import type { Metadata } from "next";
import { routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  title: "Chính sách bảo hành",
  description: "Chính sách bảo hành và bảo trì nội thất của Nhà Mộc: thời hạn, phạm vi và quy trình bảo hành.",
  path: routes.warranty,
});

const sections = [
  {
    h: "Thời hạn bảo hành",
    p: "Nhà Mộc bảo hành từ 24 đến 60 tháng tùy theo gói dịch vụ và loại vật liệu, tính từ ngày nghiệm thu bàn giao.",
  },
  {
    h: "Phạm vi bảo hành",
    p: "Bảo hành áp dụng cho kết cấu gỗ, bề mặt hoàn thiện và phụ kiện chính hãng do Nhà Mộc cung cấp và lắp đặt.",
  },
  {
    h: "Trường hợp không áp dụng",
    p: "Bảo hành không áp dụng với hư hỏng do tác động ngoại lực, thiên tai, sử dụng sai hướng dẫn hoặc tự ý sửa chữa bởi bên thứ ba.",
  },
  {
    h: "Quy trình bảo hành",
    p: "Khi cần bảo hành, khách hàng liên hệ hotline. Đội kỹ thuật sẽ khảo sát và xử lý trong vòng 3-7 ngày làm việc tùy mức độ.",
  },
];

export default function WarrantyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Chính sách bảo hành", path: routes.warranty }]} />
      <section className="py-10 lg:py-16">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-ink lg:text-5xl">Chính sách bảo hành</h1>
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
