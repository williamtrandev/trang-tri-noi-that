const materials = [
  "Gỗ óc chó",
  "Gỗ sồi tự nhiên",
  "Gỗ me tây",
  "Veneer cao cấp",
  "Laminate",
  "Acrylic bóng gương",
  "Phụ kiện Blum",
  "Phụ kiện Hafele",
  "Đá thạch anh",
  "Sơn phủ an toàn",
];

/** Dải marquee vật liệu — chất liệu & chuyển động (tối đa 1/trang). */
export function MaterialsMarquee() {
  const items = [...materials, ...materials];
  return (
    <section className="overflow-hidden bg-ink py-6">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {items.map((m, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.15em] text-surface/70">
              {m}
            </span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-[color:var(--gold)]" />
          </div>
        ))}
      </div>
    </section>
  );
}
