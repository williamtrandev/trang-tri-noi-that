import { z } from "zod";

export const serviceOptions = [
  "Thiết kế nội thất",
  "Thi công trọn gói",
  "Sản xuất theo yêu cầu",
  "Tủ bếp",
  "Nội thất căn hộ",
  "Nội thất biệt thự",
  "Nội thất văn phòng",
  "Nội thất thương mại",
  "Khác",
] as const;

export const budgetOptions = [
  "Dưới 100 triệu",
  "100 - 300 triệu",
  "300 - 700 triệu",
  "Trên 700 triệu",
  "Chưa xác định",
] as const;

export const quoteSchema = z.object({
  name: z.string().min(2, "Vui lòng nhập họ tên"),
  phone: z
    .string()
    .min(9, "Số điện thoại không hợp lệ")
    .regex(/^[0-9+\s.]+$/, "Số điện thoại chỉ gồm chữ số"),
  email: z.string().email("Email không hợp lệ").optional().or(z.literal("")),
  service: z.enum(serviceOptions),
  budget: z.enum(budgetOptions).optional(),
  message: z.string().max(1000).optional(),
  // honeypot chống spam
  company: z.string().max(0).optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
