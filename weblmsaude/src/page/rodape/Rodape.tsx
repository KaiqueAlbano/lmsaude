import { Facebook, Instagram } from "lucide-react";
import Iconlmsaude from "../../icons/Iconlmsaude";
import UtilServices from "../../services/UtilServices";

const Rodape = () => {
  return (
    <footer className="bg-rodape text-blue-light-2/70 py-16 mt-25">
      <div className="px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-35 h-10 rounded-xl flex items-center justify-center">
                <Iconlmsaude width={150} height={50} color="#1D2530" />
              </div>
            </a>
            <p className="mb-6">O cuidado que chega até você!</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/LM-Sa%C3%BAde/61584942600033/"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-cinza flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/lmsaude_/"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-cinza flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-cinza flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-cinza flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => {
                    UtilServices.gtagEvent("click.consulta_online_rodape");
                    UtilServices.getWhatsApp(
                      "5511934167610",
                      "Olá! Vim pelo site e gostaria de uma consulta médica online",
                    );
                  }}
                >
                  Consulta Online
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => {
                    UtilServices.gtagEvent(
                      "click.consulta_psiquiatrica_rodape",
                    );
                    UtilServices.getWhatsApp(
                      "5511934167610",
                      "Olá! Vim pelo site e gostaria de uma consulta psiquiatrica",
                    );
                  }}
                >
                  Consulta Psiquiatrica
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => {
                    UtilServices.gtagEvent("click.renovacao_receita_rodape");
                    UtilServices.getWhatsApp(
                      "5511934167610",
                      "Olá! Vim pelo site e gostaria de renovar minha receita",
                    );
                  }}
                >
                  Renovação de Receitas
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => {
                    UtilServices.gtagEvent("click.pedidos_exames_rodape");
                    UtilServices.getWhatsApp(
                      "5511934167610",
                      "Olá! Vim pelo site e gostaria de solicitar um exame",
                    );
                  }}
                >
                  Pedidos de Exames
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => {
                    UtilServices.gtagEvent("click.laudos_rodape");
                    UtilServices.getWhatsApp(
                      "5511934167610",
                      "Olá! Vim pelo site e gostaria de solicitar um laudo médico",
                    );
                  }}
                >
                  Laudos
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent transition-colors cursor-pointer"
                  onClick={() => {
                    UtilServices.gtagEvent(
                      "click.atestado_medico_online_rodape",
                    );
                    UtilServices.getWhatsApp(
                      "5511934167610",
                      "Olá! Vim pelo site e gostaria de um atestado médico online",
                    );
                  }}
                >
                  Atestado Médico Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a className="hover:text-accent transition-colors">
                  (11) 93416-7610
                </a>
              </li>
              <li className="lg:max-w-[350px]">
                <a className="hover:text-accent transition-colors break-words">
                  administrativo@lmsaude.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Sobre Nós */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">
              Sobre Nós
            </h4>
            <ul>
              <li>
                <a className="hover:text-accent font-bold transition-colors">
                  CNPJ:
                </a>
              </li>
              <li className="mb-3">
                <a className="hover:text-accent transition-colors">
                  31.037.396.0001-75
                </a>
              </li>
              <li>
                <a className="hover:text-accent font-bold transition-colors">
                  Responsável Técnica:
                </a>
              </li>
              <li className="mb-3">
                <a className="hover:text-accent transition-colors">
                  Luciana Melo Ferreira CRMSP: 175538
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-blue-light-2/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-light-2/55 text-sm">
              © 2025 LM Serviços Médicos. Todos os direitos reservados.
            </p>
            <p className="text-blue-light-2/55 text-sm">
              Desenvolvido por Kaique Albano · KTechno
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
