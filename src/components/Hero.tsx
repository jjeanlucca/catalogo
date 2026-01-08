import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://wa.me/5511951852202?text=Olá! Gostaria de saber mais sobre seus serviços.";

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Transformando ideias em resultados</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            Seu negócio merece um{" "}
            <span className="text-primary">site que vende</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Crio sites profissionais que atraem clientes, geram confiança e 
            aumentam suas vendas. Sem complicação técnica, apenas resultados.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => window.open(whatsappLink, "_blank")}
              className="group"
            >
              Quero meu site agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver projetos
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-16 pt-10 border-t border-border/50 animate-fade-in">
            <p className="text-muted-foreground mb-4 text-sm">Empresas que já confiam no meu trabalho</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <span className="text-xl font-semibold text-foreground">TechBrasil</span>
              <span className="text-xl font-semibold text-foreground">Loja Moda+</span>
              <span className="text-xl font-semibold text-foreground">Clínica Vida</span>
              <span className="text-xl font-semibold text-foreground">Café Aroma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
