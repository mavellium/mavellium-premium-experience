import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroBackground from '@/assets/hero-background.svg';

const HeroSection = () => {
  return (
    <section className="relative bg-[#232539] min-h-screen pt-[10em] pb-[10em] flex items-center justify-center overflow-hidden w-full">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
       
      </div>

      {/* Content */}
      <div className="z-10 flex justify-end text-start pr-20 w-full">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-[50px] font-bold text-background flex-col flex mb-6 lg:leading-[1.5]">
            Landing pages {' '}
            <span>que Transformam{' '}</span>
            <span>
            <span className="text-gradient-secondary">Cliques</span>{' '}
            em{' '}
            <span className="text-gradient-secondary">Clientes</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-background/80 mb-12 max-w-2xl leading-relaxed">
            Unimos tecnologia, design estratégico e performance para criar landing pages de alta conversão
            que impulsionam o crescimento do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-start items-center">
            <Button 
              size="lg" 
              className="btn-secondary text-lg px-10 py-4 animate-fade-in-scale"
            >
              Fale com a Gente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-background/10 text-background border-background/30 hover:bg-background/20 text-lg px-8 py-4 animate-fade-in-scale"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver nossos Projetos
            </Button>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default HeroSection;