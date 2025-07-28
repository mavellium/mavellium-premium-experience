import { Code, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Landing pages com alta conversão",
      description: "Criamos páginas que não apenas impressionam, mas convertem visitantes em clientes."
    },
    {
      icon: Code,
      title: "ERP proprietário (em desenvolvimento)",
      description: "Sistema de gestão empresarial moderno, intuitivo e totalmente customizável."
    },
    {
      icon: Zap,
      title: "E-commerce moderno (em desenvolvimento)",
      description: "Plataforma de vendas online otimizada para performance e conversão."
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
              Somos uma empresa de tecnologia focada em criar soluções digitais que realmente impactam negócios. 
              Combinamos design excepcional com desenvolvimento de alta performance para entregar experiências 
              que não apenas encantam, mas convertem.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é transformar ideias em produtos digitais que geram resultados mensuráveis, 
              sempre priorizando a experiência do usuário e a performance técnica.
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