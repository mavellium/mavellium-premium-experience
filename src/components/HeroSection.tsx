import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>

      {/* Animated Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/20 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-secondary/10 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-luxury/30 rotate-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 leading-tight">
            Landing pages que combinam{' '}
            <span className="text-gradient-secondary">design</span>{' '}
            e{' '}
            <span className="text-gradient-secondary">performance</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-background/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Desenvolvimento de landing pages com clareza, design estratégico e foco em resultado.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-secondary text-lg px-10 py-4 animate-fade-in-scale"
            >
              Ver nossos projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-background/10 text-background border-background/30 hover:bg-background/20 text-lg px-8 py-4 animate-fade-in-scale"
            >
              <Play className="mr-2 h-5 w-5" />
              Como trabalhamos
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;