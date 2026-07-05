"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import {
  budgetOptions,
  quoteSchema,
  serviceOptions,
  type QuoteInput,
} from "./schema";
import { submitQuote } from "./actions";
import { routes } from "@/config/routes";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Select, Textarea } from "@/components/ui/field";

export function QuoteForm({ defaultService }: { defaultService?: (typeof serviceOptions)[number] }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { service: defaultService ?? "Thiết kế nội thất" },
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await submitQuote(data);
    if (res.ok) {
      router.push(routes.quoteThanks);
    } else {
      setError("root", { message: res.error ?? "Có lỗi xảy ra, vui lòng thử lại." });
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0"
        {...register("company")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Họ và tên *</Label>
          <Input id="name" placeholder="Nguyễn Văn A" {...register("name")} aria-invalid={!!errors.name} />
          <FieldError message={errors.name?.message} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Số điện thoại *</Label>
          <Input id="phone" type="tel" inputMode="tel" placeholder="09xx xxx xxx" {...register("phone")} aria-invalid={!!errors.phone} />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email (không bắt buộc)</Label>
        <Input id="email" type="email" placeholder="email@example.com" {...register("email")} aria-invalid={!!errors.email} />
        <FieldError message={errors.email?.message} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="service">Nhu cầu *</Label>
          <Select id="service" {...register("service")}>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="budget">Ngân sách dự kiến</Label>
          <Select id="budget" {...register("budget")}>
            <option value="">Chọn mức ngân sách</option>
            {budgetOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Mô tả thêm về công trình</Label>
        <Textarea id="message" placeholder="Diện tích, địa chỉ, phong cách mong muốn..." {...register("message")} />
      </div>

      {errors.root && <FieldError message={errors.root.message} />}

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-1">
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Đang gửi...
          </>
        ) : (
          "Gửi yêu cầu báo giá"
        )}
      </Button>
      <p className="text-center text-sm text-ink-muted">
        Chúng tôi cam kết bảo mật thông tin và phản hồi trong vòng 24 giờ.
      </p>
    </form>
  );
}
