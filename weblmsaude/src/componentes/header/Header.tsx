import { useState } from "react";
import Iconlmsaude from "../../icons/Iconlmsaude";
import "./Header.scss";
import Button from "../button/Button";
import UtilServices from "../../services/UtilServices";
import { Menu, X } from "lucide-react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 sm:px-15">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="/"
            className="flex items-center gap-2 animate-[fadeIn_1s_ease-in_forwards]"
          >
            <div>
              <Iconlmsaude width={150} height={50} />
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-blue-dark/80 hover:text-accent transition-colors cursor-pointer"
              onClick={() => scrollToSection("servicos")}
            >
              Serviços
            </a>
            <a
              className="text-blue-dark/80 hover:text-accent transition-colors cursor-pointer"
              onClick={() => scrollToSection("comofunciona")}
            >
              Como Funciona
            </a>
            <a
              className="text-blue-dark/80 hover:text-accent transition-colors cursor-pointer"
              onClick={() => scrollToSection("depoimento")}
            >
              Avaliações
            </a>
            <a
              className="text-blue-dark/80 hover:text-accent transition-colors cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contato
            </a>
          </nav>
          <Button
            className="bg-gradient-one text-white px-4 h-10 hidden sm:block"
            onClick={() => {
              UtilServices.gtagEvent("click.agendar_consulta_header");
              UtilServices.getWhatsApp(
                "5511934167610",
                "Olá! Vim pelo site e gostaria de uma consulta médica online",
              );
            }}
          >
            Agendar Consulta
          </Button>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-logo cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-dark/40 mt-2">
            <nav className="flex flex-col gap-4">
              <a
                className="text-blue-dark/80 hover:text-accent transition-colors cursor-pointer"
                onClick={() => scrollToSection("servicos")}
              >
                Serviços
              </a>
              <a
                className="text-blue-dark/80 hover:text-accent transition-colors cursor-pointer"
                onClick={() => scrollToSection("comofunciona")}
              >
                Como Funciona
              </a>
              <a
                className="text-blue-dark/80 hover:text-accent transition-colors cursor-pointer"
                onClick={() => scrollToSection("depoimento")}
              >
                Avaliações
              </a>
              <a
                className="text-blue-dark/80 hover:text-accent transition-colors cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
