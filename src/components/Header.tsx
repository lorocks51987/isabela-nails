import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import escritaLogo from "@/assets/escrita.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={escritaLogo} 
              alt="Isabela Nails Logo" 
              className="h-10 w-auto"
              loading="eager"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Menu principal">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="text-foreground hover:text-accent transition-colors font-poppins font-medium"
              aria-label="Ir para seção Início"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('catalogo')} 
              className="text-foreground hover:text-accent transition-colors font-poppins font-medium"
              aria-label="Ir para seção Catálogo"
            >
              Catálogo
            </button>
            <button 
              onClick={() => scrollToSection('valores')} 
              className="text-foreground hover:text-accent transition-colors font-poppins font-medium"
              aria-label="Ir para seção Valores"
            >
              Valores
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-foreground hover:text-accent transition-colors font-poppins font-medium"
              aria-label="Ir para seção Contato"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-border pt-6 mobile-menu">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="text-left text-foreground hover:text-accent transition-colors font-poppins font-medium py-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('catalogo')} 
                className="text-left text-foreground hover:text-accent transition-colors font-poppins font-medium py-2"
              >
                Catálogo
              </button>
              <button 
                onClick={() => scrollToSection('valores')} 
                className="text-left text-foreground hover:text-accent transition-colors font-poppins font-medium py-2"
              >
                Valores
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="text-left text-foreground hover:text-accent transition-colors font-poppins font-medium py-2"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};