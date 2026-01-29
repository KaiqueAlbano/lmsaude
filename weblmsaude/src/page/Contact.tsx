import { Phone, Mail, Clock } from "lucide-react";
import Button from "../componentes/button/Button";
import { motion } from "motion/react";
import UtilServices, { fbqEvent } from "../services/UtilServices";

const Contact = () => {
  return (
    <section
      id="contact"
      className="sm:scroll-mt-30 scroll-mt-70 container mx-auto px-4 sm:px-15 mt-35"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="sm:mb-10">
          {/* Header */}
          <div className="text-start">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} //Não repete
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <span className="px-4 py-2 rounded-full bg-blue-baby text-blue-midium mb-4">
                Fale Conosco
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} //Não repete
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 mt-10 text-blue-dark">
                Estamos aqui para ajudar você
              </h2>
              <p className="text-lg text-blue-dark/80">
                Tem alguma dúvida? Entre em contato com nossa equipe de
                atendimento. Estamos disponíveis para ajudar você a cuidar da
                sua saúde.
              </p>
            </motion.div>
            {/* Contact Info */}
            <div className="space-y-6 mt-5">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} //Não repete
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="flex opacity-0 items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10  flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-blue-dark/80">Telefone</p>
                  <p className="font-semibold text-blue-dark">
                    (11) 93416-7610
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} //Não repete
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="flex opacity-0 items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-blue-dark/80">E-mail</p>
                  <p className="font-semibold text-blue-dark lg:max-w-[260px] break-words">
                    administrativo@lmsaude.com.br
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} //Não repete
                transition={{
                  duration: 1.4,
                  ease: "easeOut",
                }}
                className="flex opacity-0 items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-blue-dark/80">
                    Horário de Atendimento
                  </p>
                  <div>
                    <p className="font-semibold text-blue-dark max-w-[300px]">
                      Segunda a Sexta-feira: 08:00 – 18:00 <br /> Sábado: 10:00
                      - 14:00 <br /> Domingo: 18:00 – 22:00
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="card-medical p-8 md:p-12">
          <h3 className="font-display text-2xl font-bold text-blue-dark mb-4">
            Pronto para cuidar da sua saúde?
          </h3>
          <p className="text-blue-dark/80 mb-8">
            Agende sua consulta online ou renove sua receita agora mesmo. É
            rápido, prático e seguro.
          </p>

          <div className="space-y-4">
            <Button
              className="bg-gradient-one text-white px-4 h-10 w-full"
              onClick={() => {
                fbqEvent("Contact");
                UtilServices.getWhatsApp(
                  "5511934167610",
                  "Olá! Vim pelo site e gostaria de uma consulta médica online",
                );
              }}
            >
              Agendar Consulta Online
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-blue-dark/80 text-center">
              Mais de{" "}
              <span className="font-bold text-accent">3 mil pacientes</span> já
              confiam na <strong>LM Saúde</strong> como referência no cuidado
              com a saúde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
