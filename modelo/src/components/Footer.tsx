import {
  Stethoscope,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-rodape text-background py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                MedConsulta
              </span>
            </a>
            <p className="text-background/70 mb-6">
              Cuidando da sua saúde com tecnologia, praticidade e segurança.
              Consultas online e renovação de receitas.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Consulta Online
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Renovação de Receitas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Prescrição Digital
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Atestados Médicos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Acompanhamento
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Carreiras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  LGPD
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 MedConsulta. Todos os direitos reservados.
            </p>
            <p className="text-background/60 text-sm">
              CRM/SP 123456 • Responsável Técnico: Dr. João Silva
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
