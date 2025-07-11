
import Navigation from "@/components/home/Navigation";
import Hero from "@/components/home/Hero";
import QuickAccess from "@/components/home/QuickAccess";
import TrustedCompanies from "@/components/home/TrustedCompanies";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <QuickAccess />
      <TrustedCompanies />
      <Stats />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
