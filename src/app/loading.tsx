import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="min-h-[60vh] pt-32">
      <div className="h-8 w-64 animate-pulse rounded-[10px] bg-surface-2" />
      <div className="mt-4 h-4 w-96 max-w-full animate-pulse rounded-[10px] bg-surface-2" />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="aspect-[4/3] animate-pulse rounded-[14px] bg-surface-2" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-surface-2" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-surface-2" />
          </div>
        ))}
      </div>
    </Container>
  );
}
