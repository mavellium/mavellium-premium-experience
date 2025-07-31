import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 border border-secondary/20 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/10 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-luxury/30"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-background mb-6 leading-tight">
              Vamos construir a próxima landing page de{' '}
              <span className="text-gradient-secondary">alto impacto</span>?
            </h2>
            
            <p className="text-xl text-background/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transforme sua visão em uma página de conversão que realmente gera resultados. 
              Nossa equipe está pronta para criar algo excepcional com você.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="btn-secondary text-lg px-10 py-4 animate-fade-in-scale"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale com a Mavellium
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-background/10 text-background border-background/30 hover:bg-background/20 text-lg px-8 py-4 animate-fade-in-scale"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar reunião
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-background/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-background mb-2">24h</div>
                <div className="text-sm text-background/70">Resposta média</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-background mb-2">Estratégica</div>
                <div className="text-sm text-background/70">Consultoria inicial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-background mb-2">Premium</div>
                <div className="text-sm text-background/70">Qualidade garantida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;