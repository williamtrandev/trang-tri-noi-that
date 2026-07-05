import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Kho ảnh nội thất thật (Unsplash CDN, đã kiểm tra tồn tại). Nhóm theo chủ đề.
 *  Thay bằng ẢNH DỰ ÁN THẬT của công ty khi có; bật lại tối ưu ảnh cho production. */
const IMG_BUCKETS: Record<string, string[]> = {
  living: [
    "1586023492125-27b2c045efd7", "1567767292278-a4f21aa2d36e", "1616486338812-3dadae4b4ace",
    "1560448204-e02f11c3d0e2", "1615529182904-14819c35db37", "1567016432779-094069958ea5",
    "1552242718-c5360894aecd", "1493809842364-78817add7ffb", "1600566753086-00f18fb6b3ea",
    "1595515106969-1ce29566ff1c", "1533090161767-e6ffed986c88",
  ],
  kitchen: ["1556911220-bff31c812dba", "1556909212-d5b604d0c90d", "1600607687939-ce8a6c25118c"],
  bedroom: ["1505693416388-ac5ce068fe85", "1522708323590-d24dbb6b0267"],
  wardrobe: ["1595428774223-ef52624120d2", "1616486338812-3dadae4b4ace"],
  dining: ["1617806118233-18e1de247200", "1449247709967-d4461a6a6103", "1560185007-cde436f6a4d0"],
  office: [
    "1550581190-9c1c48d21d6c", "1531973576160-7125cd663d86", "1524758631624-e2822e304c36",
    "1522771739844-6a9f6d5f14af",
  ],
  restaurant: [
    "1517248135467-4c7edcad34c4", "1449247709967-d4461a6a6103", "1503602642458-232111445657",
    "1521017432531-fbd92d768814", "1519710164239-da123dc03ef4", "1497366216548-37526070297c",
  ],
  cafe: ["1554118811-1e0d58224f24", "1428515613728-6b4607e44363", "1497366216548-37526070297c"],
  hotel: ["1521017432531-fbd92d768814", "1503174971373-b1f69850bded"],
  villa: ["1560185007-cde436f6a4d0", "1586023492125-27b2c045efd7"],
  interior: [
    "1552242718-c5360894aecd", "1493809842364-78817add7ffb", "1567016432779-094069958ea5",
    "1618221195710-dd6b41faaea6",
  ],
};

const GENERAL_POOL = Array.from(new Set(Object.values(IMG_BUCKETS).flat()));

const KEYWORD_BUCKET: [RegExp, keyof typeof IMG_BUCKETS][] = [
  [/kitchen|bep/, "kitchen"],
  [/bedroom|bed|giuong|ngu/, "bedroom"],
  [/wardrobe|closet|tu-ao|quan-ao/, "wardrobe"],
  [/dining|ban-an/, "dining"],
  [/office|van-phong|workspace|meeting|desk/, "office"],
  [/restaurant|nha-hang|finedining|fine-dining|bar/, "restaurant"],
  [/cafe|coffee/, "cafe"],
  [/hotel|boutique|lobby|resort|khach-san/, "hotel"],
  [/villa|biet-thu|luxury|penthouse/, "villa"],
  [/living|livingroom|apartment|tv|sofa|chair|ghe|ke-tivi/, "living"],
];

function hashSeed(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

/** Ảnh nội thất đúng chủ đề theo seed (chọn cố định để nhất quán giữa các lần render). */
export function photo(seed: string, w = 1200, h = 900) {
  const s = seed.toLowerCase();
  const match = KEYWORD_BUCKET.find(([re]) => re.test(s));
  const list = match ? IMG_BUCKETS[match[1]] : GENERAL_POOL;
  const id = list[hashSeed(seed) % list.length];

  const cap = 1400;
  const scale = Math.min(1, cap / Math.max(w, h));
  const cw = Math.round(w * scale);
  const ch = Math.round(h * scale);
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${cw}&h=${ch}&q=70`;
}

export function formatVnd(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n) + "đ";
}
