import {
  getFeaturedProjects,
  getProductCategories,
  getServices,
  getSolutions,
  getTestimonials,
} from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { HeroHome } from "@/components/sections/hero-home";
import { StatsBand } from "@/components/sections/stats-band";
import { ServicesInteractive } from "@/components/sections/services-interactive";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { WhyUsBento } from "@/components/sections/why-us-bento";
import { ProductCategoriesSection } from "@/components/sections/product-categories";
import { SolutionsOverview } from "@/components/sections/solutions-overview";
import { MaterialsMarquee } from "@/components/sections/materials-marquee";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { services as allServices } from "@/lib/content/data";

const homeProcess = allServices[0].processSteps;

export default async function HomePage() {
  const [services, projects, categories, solutions, testimonials] = await Promise.all([
    getServices(),
    getFeaturedProjects(),
    getProductCategories(),
    getSolutions(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroHome />
      <MaterialsMarquee />
      <ServicesInteractive services={services} />
      <FeaturedProjects projects={projects} />
      <WhyUsBento />
      <StatsBand />
      <ProductCategoriesSection categories={categories} />
      <SolutionsOverview solutions={solutions} />
      <ProcessSteps steps={homeProcess} />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            title="Niềm tin từ hàng nghìn gia đình và doanh nghiệp"
            className="mb-12 max-w-2xl"
          />
          <Testimonials items={testimonials} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
