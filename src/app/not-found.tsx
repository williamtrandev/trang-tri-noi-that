import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { routes } from "@/config/routes";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center py-24">
      <Container className="max-w-xl text-center">
        <span className="text-7xl font-semibold tracking-tight text-brand lg:text-8xl">404</span>
        <h1 className="mt-6 text-3xl font-semibold text-ink">Không tìm thấy trang</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Trang bạn tìm có thể đã được di chuyển hoặc không còn tồn tại. Hãy quay lại trang chủ hoặc khám phá dự án của chúng tôi.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={routes.home} size="lg">
            Về trang chủ
          </ButtonLink>
          <ButtonLink href={routes.projects} variant="outline" size="lg">
            Xem dự án
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
