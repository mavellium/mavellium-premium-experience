import { Code, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Especialistas em páginas de conversão",
      description: "Cada página que criamos é única, pensada para transmitir autoridade, gerar confiança e vender com eficiência."
    },
    {
      icon: Code,
      title: "Design estratégico e performance",
      description: "Combinamos visual refinado com código otimizado para garantir carregamento rápido e excelente experiência."
    },
    {
      icon: Zap,
      title: "Alto padrão visual e técnico",
      description: "Desenvolvemos landing pages que se destacam pela qualidade, precisão e capacidade de gerar resultados."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-gradient-secondary">Mavellium</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos uma empresa 100% especializada no design e desenvolvimento de landing pages de alta performance. 
              Combinamos estratégia, design excepcional e desenvolvimento técnico refinado para criar páginas 
              que não apenas encantam, mas convertem com eficiência.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é transformar sua visão em páginas de conversão que geram resultados mensuráveis, 
              sempre priorizando a autoridade da marca, a confiança do usuário e a performance técnica.
            </p>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300 hover-lift animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;