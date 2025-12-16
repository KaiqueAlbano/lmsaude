import { useState } from "react";
import Iconlmsaude from "../../icons/Iconlmsaude";
import "./Header.scss";
import Button from "../button/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top container">
        <div>
          <Iconlmsaude width={150} height={50} />
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <p className="labels">Serviços</p>
          <p className="labels">Como Funciona</p>
          <p className="labels">Sobre Nós</p>
          <p className="labels">Contato</p>
        </div>
        <Button>Agendar Consulta</Button>
      </div>
    </header>
  );
};

export default Header;
