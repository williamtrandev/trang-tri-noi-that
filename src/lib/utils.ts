import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Ảnh placeholder theo seed (picsum — ổn định, đúng kích thước, tải nhanh).
 *  LƯU Ý: đây là ảnh minh họa ngẫu nhiên. Thay bằng ẢNH DỰ ÁN THẬT trước khi phát hành
 *  và bật lại tối ưu ảnh (unoptimized=false trong next.config). */
export function photo(seed: string, w = 1200, h = 900) {
  const cap = 1400;
  const scale = Math.min(1, cap / Math.max(w, h));
  const cw = Math.round(w * scale);
  const ch = Math.round(h * scale);
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${cw}/${ch}`;
}

export function formatVnd(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n) + "đ";
}
