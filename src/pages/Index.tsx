import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LandingPagesSection from '@/components/LandingPagesSection';
import PortfolioSection from '@/components/PortfolioSection';
import PartnershipsSection from '@/components/PartnershipsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <LandingPagesSection />
      <PortfolioSection />
      <PartnershipsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
