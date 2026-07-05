import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/content/types";
import { routes } from "@/config/routes";
import { formatVnd } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const img = product.images[0];
  return (
    <Link
      href={routes.product(product.categorySlug, product.slug)}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[var(--shadow-lg)]"
    >
      <div className="relative aspect-square overflow-hidden bg-surface-2">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
          {product.title}
        </h3>
        <p className="text-sm text-ink-muted">{product.materials[0]}</p>
        {product.priceFrom && (
          <p className="mt-1 text-[15px] font-semibold text-brand">
            Từ {formatVnd(product.priceFrom)}
          </p>
        )}
      </div>
    </Link>
  );
}
