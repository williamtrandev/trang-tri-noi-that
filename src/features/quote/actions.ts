"use server";

import { quoteSchema, type QuoteInput } from "./schema";

export interface QuoteResult {
  ok: boolean;
  error?: string;
}

/**
 * Server action nhận lead. Điểm tích hợp duy nhất — thêm Resend/CRM webhook tại đây.
 * Honeypot `company` phải rỗng (bot thường điền).
 */
export async function submitQuote(input: QuoteInput): Promise<QuoteResult> {
  const parsed = quoteSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại." };
  }
  if (parsed.data.company) {
    // bot phát hiện qua honeypot — giả vờ thành công
    return { ok: true };
  }

  const lead = parsed.data;

  // TODO: tích hợp gửi email (Resend) / webhook CRM. Hiện log ở server.
  console.info("[LEAD] Yêu cầu báo giá mới:", {
    name: lead.name,
    phone: lead.phone,
    email: lead.email || "-",
    service: lead.service,
    budget: lead.budget || "-",
    at: new Date().toISOString(),
  });

  return { ok: true };
}
