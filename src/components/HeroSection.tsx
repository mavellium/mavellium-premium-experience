import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.svg";
import oldMenHome from "@/assets/Homem.png";
import linha from "@/assets/linha.png";

const HeroSection = () => {
  return (
    <section className="relative bg-[#232539] min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden w-full">

      {/* Background */}
      <div className="absolute">
        <img src={heroBackground}
          width={1264}
          height={816}
          alt="Hero Background"
          className="w-full h-full object-bottom" />
      </div>
      {/* Linha */}
      <div className="absolute w-full">
        <img src={linha}
          alt="Hero Background"
          className="w-[1364px] object-cover" />
      </div>
      {/* Homem */}
      <div className="absolute inset-0 lg:relative">
        <img
          src={oldMenHome}
          width={453}
          height={492}
          alt="Hero Background"
          className="w-[46em] object-cover object-center"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full lg:w-1/2 px-6 sm:px-10 lg:px-20 py-20 flex flex-col justify-center text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-bold text-background mb-6 leading-snug">
          Landing pages{" "}
          <span className="block"></span>
          que Transformam{" "}
          <span className="block">
            <span className="text-gradient-secondary">Cliques</span> em{" "}
            <span className="text-gradient-secondary">Clientes</span>
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-background/80 mb-10 max-w-2xl leading-relaxed">
          Unimos tecnologia, design estratégico e performance para criar landing
          pages de alta conversão que impulsionam o crescimento do seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
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
    </section>
  );
};

export default HeroSection;
