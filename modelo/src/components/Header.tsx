import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Stethoscope } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-medical flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              MedConsulta
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors">Como Funciona</a>
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground">
              Entrar
            </Button>
            <Button className="bg-gradient-medical text-primary-foreground shadow-medical hover:opacity-90 transition-opacity">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="justify-start">
                  Entrar
                </Button>
                <Button className="bg-gradient-medical text-primary-foreground">
                  Agendar Consulta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
