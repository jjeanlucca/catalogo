import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dados simulados de projetos - renderizados via map
const projects = [
  {
    id: 1,
    title: "Clínica Vittah Saúde e Estética",
    category: "Site Institucional",
    description: "Aplicativo completo para clínica médica com agendamento online. Aumento de 40% nas consultas.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    result: "+40% consultas",
    
  },
  {
    id: 2,
    title: "Aurora Moda Feminina",
    category: "E-commerce",
    description: "Loja virtual de moda feminina com integração de pagamento. Faturamento dobrou em 3 meses.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    result: "2x faturamento",
  },
  {
    id: 3,
    title: "Escritório Advocacia Silva",
    category: "Site Institucional",
    description: "Site institucional sóbrio e profissional. 60% mais contatos pelo formulário.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    result: "+60% contatos",
  },
  {
    id: 4,
    title: "Restaurante Sabor da Serra",
    category: "Landing Page",
    description: "Landing page para delivery com cardápio digital. Pedidos online aumentaram 80%.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    result: "+80% pedidos",
  },
  {
    id: 5,
    title: "Academia FitPro",
    category: "Site + Sistema",
    description: "Site com área do aluno e treinos personalizados. Retenção de alunos aumentou 35%.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    result: "+35% retenção",
  },
  {
    id: 6,
    title: "Imobiliária Casa Nova",
    category: "Portal de Imóveis",
    description: "Portal de imóveis com busca avançada e agendamento de visitas. Vendas triplicaram.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    result: "3x vendas",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Resultados que falam por si
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada projeto é uma parceria. Veja como ajudei outros negócios a 
            crescerem com presença digital profissional.
          </p>
        </div>

        {/* Projects grid - renderizado via map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Result badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {project.result}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="gap-2">
                    Ver detalhes <ExternalLink className="w-4 h-4" />,
                  </Button>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
