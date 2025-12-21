import { useState } from "react";
import Iconlmsaude from "../../icons/Iconlmsaude";
import "./Header.scss";
import Button from "../button/Button";
import UtilServices from "../../services/UtilServices";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

const Header = () => {
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
              Depoimento
            </a>
            <a
              className="text-blue-dark/80 hover:text-accent transition-colors cursor-pointer"
              onClick={() => scrollToSection("contato")}
            >
              Contato
            </a>
          </nav>
          <Button
            className="bg-gradient-one text-white px-4 h-10 hidden sm:block"
            onClick={() => {
              UtilServices.getWhatsApp(
                "5511934167610",
                "Olá! Vim pelo site e gostaria de uma consulta médica online",
              );
            }}
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
