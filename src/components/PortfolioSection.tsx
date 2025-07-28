import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "TegBe",
      description: "Landing page de alta conversão com foco em resultados mensuráveis e experiência premium.",
      category: "Landing Page Premium",
      featured: true,
      metrics: "+180% conversão",
      color: "from-luxury/20 to-luxury/5"
    },
    {
      title: "TegPro",
      description: "Plataforma digital moderna com interface intuitiva e performance otimizada.",
      category: "Plataforma Digital",
      featured: false,
      metrics: "98% satisfaction",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      title: "Instituto do Sorriso",
      description: "Website institucional com design emocional e navegação otimizada para conversão.",
      category: "Website Institucional",
      featured: false,
      metrics: "+250% leads",
      color: "from-primary/20 to-primary/5"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos projetos mais <span className="text-gradient-secondary">recentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada projeto é uma oportunidade de criar algo excepcional. 
            Veja como transformamos ideias em experiências digitais de alto impacto.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} border border-border/50 hover:shadow-xl transition-all duration-500 hover-lift animate-fade-in-scale`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-luxury text-luxury-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-8 h-full flex flex-col">
                <div className="mb-4">
                  <span className="text-sm font-medium text-secondary uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="mb-6">
                  <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                    {project.metrics}
                  </span>
                </div>

                {/* Action */}
                <div className="flex items-center justify-between">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-foreground hover:text-secondary p-0"
                  >
                    Ver projeto
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center animate-fade-in-up">
          <Button variant="outline" size="lg" className="px-8 py-3">
            Ver portfólio completo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;