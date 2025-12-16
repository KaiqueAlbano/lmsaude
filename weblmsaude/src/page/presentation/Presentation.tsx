import { useState } from "react";
import "./Presentation.scss";
import IconSecurity from "../../icons/IconSecurity";
import { Calendar, FileText, Clock, Shield } from "lucide-react";

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="header-top container">
        <div className="security">
          <IconSecurity width={18} color="#24667b" />
          <p style={{ color: "#24667b" }}>Atendimento 100% Online e Seguro</p>
        </div>
        <div className="title">
          <h1>
            Sua saúde em <br />
            <span>primeiro lugar</span>
          </h1>
          <p className="labels w-50 mt-3">
            Consultas médicas online e renovação de receitas de forma rápida,
            prática e segura. Cuidamos de você onde você estiver.
          </p>
        </div>
        <div className="flex items-center gap-3 text-foreground">
          <div>
            <Calendar className="text-primary" />
          </div>
          <span className="font-medium">Consultas Online</span>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
