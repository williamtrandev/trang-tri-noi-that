import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
  light = false,
}: {
  /** eyebrow: giữ trong interface để tương thích call site nhưng KHÔNG render (đã bỏ theo yêu cầu). */
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance text-[2rem] font-medium sm:text-4xl lg:text-[3.25rem]",
            light ? "text-surface" : "text-ink",
            align === "center" && "mx-auto max-w-3xl",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed",
              light ? "text-brand-foreground/70" : "text-ink-muted",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
