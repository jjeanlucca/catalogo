import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Jeezle<span className="text-primary">Dev</span>
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Transformando ideias em sites que vendem. 
              Seu parceiro digital para crescer na internet.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-primary transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Sites Institucionais</li>
              <li>Landing Pages</li>
              <li>E-commerce</li>
              <li>Redesign</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} JeezleDev. Todos os direitos reservados.
          </p>
          <p className="text-sm text-background/60 flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
