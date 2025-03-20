import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogUpdates } from "@/components/sections/BlogUpdates";
import { CallToAction } from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden">
      <Header />

      <main>
        <Hero />
        <Clients />
        <Features />
        <Stats />
        <CaseStudies />
        <Testimonials />
        <BlogUpdates />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
