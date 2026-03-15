import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CaseStudyTeaser } from "@/components/sections/CaseStudyTeaser";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <CaseStudyTeaser />
      <TeamSection />
      <CTABanner />
    </>
  );
}
