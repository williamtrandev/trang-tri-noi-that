import {
  Box,
  CalendarCheck,
  Cog,
  Factory,
  Handshake,
  Layers,
  LayoutGrid,
  PackageCheck,
  ReceiptText,
  Ruler,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Ruler,
  Box,
  LayoutGrid,
  ReceiptText,
  Handshake,
  Factory,
  CalendarCheck,
  ShieldCheck,
  Cog,
  Layers,
  PackageCheck,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Box;
  return <Cmp className={className} strokeWidth={1.75} />;
}
