import { useState } from "react";
import "./Presentation.scss";
import IconSecurity from "../../icons/IconSecurity";
import { Calendar, FileText, Clock, Shield } from "lucide-react";
import Button from "../../componentes/button/Button";
import heroDoctor from "../../assets/hero-doctor.jpg";

const Presentation = () => {
  return (
    <section className="presentation container mx-auto px-4 sm:px-6">
      <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="security">
            <IconSecurity className="text-blue-midium" width={18} />
            <p className="text-blue-midium">Atendimento 100% Online e Seguro</p>
          </div>
          <div className="title">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-none text-blue-dark">
              Sua saúde em
              <span className="bg-gradient-one"> primeiro lugar</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-lg text-blue-dark">
              Consultas médicas online e renovação de receitas de forma rápida,
              prática e segura. Cuidamos de você onde você estiver.
            </p>
          </div>
          <div className="mt-4 grid lg:grid-cols-2 gap-4 justify-center sm:justify-start">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 flex items-center bg-blue-500/10 rounded-xl justify-center">
                <Calendar className="text-blue-600" />
              </div>
              <p className="text-blue-dark">Consultas Online</p>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <div className="w-10 h-10 flex items-center bg-green-500/10 rounded-xl justify-center">
                <Clock className="text-green-600" />
              </div>
              <p className="text-blue-dark">Atendimento Rápido</p>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <div className="w-10 h-10 flex items-center bg-blue-light/10 rounded-xl justify-center">
                <FileText className="text-blue-light" />
              </div>
              <p className="text-blue-dark">Renovação de Receitas</p>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <div className="w-10 h-10 flex items-center bg-blue-700/10 rounded-xl justify-center">
                <Shield className="text-blue-700" />
              </div>
              <p className="text-blue-dark">100% Seguro</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-one text-white text-lg px-4 mt-10 h-12">
              Agendar Consulta
            </Button>
            <Button className="bg-white border-1 border-accent text-accent text-lg px-4 sm:mt-10 h-12">
              Renovar Receita
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-5 mt-5 pl-1">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-accent">
                10k+
              </p>
              <p className="text-sm text-blue-dark">Pacientes</p>
            </div>
            <div className="w-px h-12 bg-blue-dark/15"></div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-accent">50+</p>
              <p className="text-sm text-blue-dark">Médicos</p>
            </div>
            <div className="w-px h-12 bg-blue-dark/15"></div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-accent">
                4.9★
              </p>
              <p className="text-sm text-blue-dark">Avaliação</p>
            </div>
          </div>
        </div>
        {/* img */}
        <div className="relative hidden lg:block px-4">
          <img className="rounded-3xl shadow-2xl" src={heroDoctor}></img>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
