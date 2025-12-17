import { useState } from "react";
import Iconlmsaude from "../../icons/Iconlmsaude";
import "./Header.scss";
import Button from "../button/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top container mx-auto px-4 sm:px-6">
        <div>
          <Iconlmsaude width={150} height={50} />
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <p className="hover:text-accent cursor-pointer text-blue-dark">
            Serviços
          </p>
          <p className="hover:text-accent cursor-pointer text-blue-dark">
            Como Funciona
          </p>
          <p className="hover:text-accent cursor-pointer text-blue-dark">
            Sobre Nós
          </p>
          <p className="hover:text-accent cursor-pointer text-blue-dark">
            Contato
          </p>
        </div>
        <Button className="bg-gradient-one text-white px-4 h-10">
          Agendar Consulta
        </Button>
      </div>
    </header>
  );
};

export default Header;
