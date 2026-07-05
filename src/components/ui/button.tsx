import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-btn font-medium transition-all duration-200 ease-out-expo active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-brand-foreground shadow-[var(--shadow-sm)] hover:bg-brand-hover hover:shadow-[var(--shadow-brand)]",
        secondary: "bg-ink text-surface hover:bg-ink-2 hover:shadow-[var(--shadow-md)]",
        outline: "border border-line-strong bg-transparent text-ink hover:border-ink/40 hover:bg-surface-2",
        ghost: "bg-transparent text-ink hover:bg-surface-2",
        light: "bg-surface text-ink shadow-[var(--shadow-sm)] hover:bg-surface-2 hover:shadow-[var(--shadow-md)]",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[15px]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type BaseProps = VariantProps<typeof buttonVariants> & { className?: string };

export function Button({
  variant,
  size,
  className,
  ...props
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function ButtonLink({
  variant,
  size,
  className,
  href,
  ...props
}: BaseProps & React.ComponentProps<typeof Link>) {
  return (
    <Link className={cn(buttonVariants({ variant, size }), className)} href={href} {...props} />
  );
}

export { buttonVariants };
