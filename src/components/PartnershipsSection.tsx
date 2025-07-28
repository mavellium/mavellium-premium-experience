import { CheckCircle, TrendingUp, Users } from 'lucide-react';
import tegbeLogo from '@/assets/tegbe-logo.png';

const PartnershipsSection = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Projetos de alto impacto",
      description: "Resultados mensuráveis em cada entrega"
    },
    {
      icon: Users,
      title: "Parceria estratégica",
      description: "Relacionamento de longo prazo focado no sucesso"
    },
    {
      icon: CheckCircle,
      title: "Excelência comprovada",
      description: "Qualidade técnica e design premium"
    }
  ];

  return (
    <section id="parcerias" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Parcerias que <span className="text-gradient-secondary">impulsionam</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Temos orgulho de atender marcas como a <strong>TegBe</strong>.
            </p>

            <div className="bg-card border border-border rounded-2xl p-8 mb-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={tegbeLogo} 
                  alt="TegBe" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">TegBe</h3>
                  <p className="text-muted-foreground">Parceiro Estratégico</p>
                </div>
              </div>
              
              <blockquote className="text-lg text-foreground italic border-l-4 border-secondary pl-6">
                "Juntos, já lançamos projetos de alto impacto, como a landing page da TegPro."
              </blockquote>
            </div>

            {/* Achievement Stats */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">180%</div>
                <div className="text-sm text-muted-foreground">Aumento Médio em Conversão</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação do Cliente</div>
              </div>
            </div>
          </div>

          {/* Right Content - Achievement Highlights */}
          <div className="space-y-6">
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover-lift animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
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

export default PartnershipsSection;