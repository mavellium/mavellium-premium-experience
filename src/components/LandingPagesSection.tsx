import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Zap, Sparkles, ArrowRight } from 'lucide-react';

const LandingPagesSection = () => {
  const portfolioItems = [
    {
      title: "TegBe",
      description: "Institucional, moderno, com foco em autoridade",
      image: "/placeholder.svg"
    },
    {
      title: "TegPro",
      description: "Conversão para cursos presenciais",
      image: "/placeholder.svg"
    },
    {
      title: "Instituto do Sorriso",
      description: "Confiança e humanização na saúde",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        {/* Landing Pages de Alta Performance */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Landing pages com propósito, design e{' '}
            <span className="text-gradient-primary">performance</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Do layout ao código, cada página é pensada para converter — com design refinado, 
            carregamento rápido e performance comprovada.
          </p>

          <div className="max-w-4xl mx-auto text-lg text-muted-foreground mb-16">
            <p>
              Desenvolvemos experiências digitais estratégicas para empresas que buscam autoridade 
              digital e resultados. Cada projeto é construído com clareza, estrutura e performance 
              em mente.
            </p>
          </div>
        </div>

        {/* Portfolio Carousel */}
        <div className="mb-24 animate-fade-in-scale">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {portfolioItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover-scale transition-all duration-300 border-border/50 hover:border-primary/30 hover:shadow-elegant">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] bg-muted rounded-t-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={`${item.title} landing page`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Modelos Prontos ou Sob Medida */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Modelos prontos ou personalizados —{' '}
              <span className="text-gradient-primary">a escolha é sua</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos duas abordagens para atender diferentes momentos e necessidades do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in-scale">
            {/* Layouts Otimizados */}
            <Card className="group hover-scale transition-all duration-300 border-border/50 hover:border-secondary/50 hover:shadow-elegant bg-card/50">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Layouts otimizados
                </h3>
                
                <h4 className="text-lg font-semibold text-secondary mb-4">
                  Rápidos, acessíveis e prontos para converter
                </h4>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Modelos validados, pensados para diferentes tipos de negócios. A personalização 
                  visual é feita com agilidade, mantendo alto padrão e baixo custo.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Entrega mais rápida
                  </li>
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Menor investimento
                  </li>
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Design testado e validado
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Layouts Personalizados */}
            <Card className="group hover-scale transition-all duration-300 border-border/50 hover:border-luxury/50 hover:shadow-elegant bg-card/50">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-luxury/10 rounded-2xl mb-6 group-hover:bg-luxury/20 transition-colors">
                  <Sparkles className="w-8 h-8 text-luxury" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Layouts personalizados
                </h3>
                
                <h4 className="text-lg font-semibold text-luxury mb-4">
                  Exclusividade visual para marcas exigentes
                </h4>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Criamos uma experiência única, alinhada à identidade da sua empresa. Tudo é 
                  desenhado do zero, com foco total no seu público e objetivos.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-luxury rounded-full mr-3"></div>
                    Totalmente sob medida
                  </li>
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-luxury rounded-full mr-3"></div>
                    Identidade de marca forte
                  </li>
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-luxury rounded-full mr-3"></div>
                    Alto valor percebido
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ainda não sabe qual modelo é ideal para o seu negócio?
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8">
              Fale com a nossa equipe e receba uma recomendação personalizada.
            </p>
            
            <Button 
              size="lg" 
              className="btn-primary text-lg px-10 py-4 animate-fade-in-scale"
            >
              Quero conversar com a Mavellium
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPagesSection;