import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
// 1. Add these two imports
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

// 2. Define the Carousel settings
const OPTIONS: EmblaOptionsType = { loop: true, align: 'center' };
const SLIDES = [0, 1, 2, 3, 4];

const HomePage: React.FC = () => {
  return (
    <>
      {/* 3. Wrap everything in theme-light so your CSS variables work */}
      <div className="theme-light">
        <Hero />
        <Logos />
        <Container>
          <Benefits />

          {/* 4. The Portfolio Carousel Section */}
          <Section
            id="portfolio"
            title="Our Projects"
            description="Take a look at some of our recent work and success stories."
          >
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </Section>

          <Section
            id="pricing"
            title="Pricing"
            description="Simple, transparent pricing. No surprises."
          >
            <Pricing />
          </Section>

          <Section
            id="testimonials"
            title="What Our Clients Say"
            description="Hear from those who have partnered with us."
          >
            <Testimonials />
          </Section>

          <FAQ />
          <Stats />
          <CTA />
        </Container>
      </div>
    </>
  );
};

export default HomePage;