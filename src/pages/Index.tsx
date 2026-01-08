/**
 * Página principal do portfólio profissional
 * 
 * Estrutura focada em conversão:
 * 1. Hero - Impacto inicial e CTA principal
 * 2. Services - O que é oferecido
 * 3. Projects - Prova social com resultados
 * 4. Benefits - Diferenciais e confiança
 * 5. Contact - CTA final para WhatsApp
 * 6. Footer - Informações adicionais
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar fixo com scroll detection */}
      <Navbar />
      
      {/* Seções do site */}
      <Hero />
      <Services />
      <Projects />
      <Benefits />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
