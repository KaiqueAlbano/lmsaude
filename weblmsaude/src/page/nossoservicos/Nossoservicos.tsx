import {
  Video,
  FileText,
  Pill,
  FileVideo,
  ClipboardList,
  MessageCircle,
} from "lucide-react";
import Button from "../../componentes/button/Button";
import UtilServices from "../../services/UtilServices";
import { motion } from "motion/react";

const services = [
  {
    icon: Video,
    title: "Consulta Médica Online",
    description:
      "Fale diretamente com a médica e esclareça dúvidas sobre sua saúde com segurança",
    colortext: "text-blue-600",
    iconBg: "bg-blue-500/10",
    animation: "animate-[slideInUp_1s_ease-in_forwards]",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511934167610",
        "Olá! Vim pelo site e gostaria de uma consulta médica online",
      );
    },
  },
  {
    icon: FileVideo,
    title: "Consulta Psiquiatrica",
    description:
      "Cuidado em saúde mental com psiquiatra experiente, escuta ativa e sigilo.",
    colortext: "text-blue-light",
    iconBg: "bg-blue-light/10",
    animation: "animate-[slideInUp_1s_ease-in_forwards] animate-delay-200",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511934167610",
        "Olá! Vim pelo site e gostaria de uma consulta psiquiatrica",
      );
    },
  },
  {
    icon: Pill,
    title: "Renovação de Receitas",
    description:
      "Receba sua receita por e-mail ou WhatsApp, com segurança, praticidade e validade legal.",
    colortext: "text-green-600",
    iconBg: "bg-green-500/10",
    animation: "animate-[slideInUp_1s_ease-in_forwards] animate-delay-400",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511934167610",
        "Olá! Vim pelo site e gostaria de renovar minha receita",
      );
    },
  },
  {
    icon: FileText,
    title: "Pedidos de Exames",
    description:
      "Solicitação de exames com validade nacional, enviada por e-mail ou WhatsApp após a avaliação.",
    colortext: "text-blue-600",
    iconBg: "bg-blue-500/10",
    animation: "animate-[slideInUp_1s_ease-in_forwards] animate-delay-600",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511934167610",
        "Olá! Vim pelo site e gostaria de solicitar um exame",
      );
    },
  },
  {
    icon: MessageCircle,
    title: "Laudos",
    description:
      "Laudos médicos com validade legal, conforme avaliação médica.",
    colortext: "text-blue-light",
    iconBg: "bg-blue-light/10",
    animation: "animate-[slideInUp_1s_ease-in_forwards] animate-delay-800",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511934167610",
        "Olá! Vim pelo site e gostaria de solicitar um laudo médico",
      );
    },
  },
  {
    icon: ClipboardList,
    title: "Atestado Médico Online",
    description:
      "Solicite atestado online após avaliação médica personalizada.",
    colortext: "text-green-600",
    iconBg: "bg-green-500/10",
    animation: "animate-[slideInUp_1s_ease-in_forwards] animate-delay-1000",
    fn: () => {
      UtilServices.getWhatsApp(
        "5511934167610",
        "Olá! Vim pelo site e gostaria de um atestado médico online",
      );
    },
  },
];

const Nossoservicos = () => {
  return (
    <section
      id="servicos"
      className="nossoservicos sm:scroll-mt-30 scroll-mt-70 container mx-auto px-4 sm:px-15 mt-35"
    >
      <div className="text-center">
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
            Nossos Serviços
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 mt-10 text-blue-dark">
            Cuidado médico completo ao seu alcance
          </h2>
          <p className="text-lg text-blue-dark/80">
            Oferecemos uma variedade de serviços médicos online para atender
            todas as suas necessidades de saúde com praticidade e segurança.
          </p>
        </motion.div>
      </div>
      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
        {services.map((service, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                ease: "easeOut",
                delay: index * 0.15, // 👈 atraso progressivo
              }}
              className={`card-medical p-8  hover:-translate-y-1 group`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className={`w-7 h-7 ${service.colortext}`} />
              </div>
              <h3 className="font-display text-xl font-bold text-blue-dark mb-3">
                {service.title}
              </h3>
              <p className="text-blue-dark/80 mb-6">{service.description}</p>
              <Button
                className={`${service.colortext} hover:${service.iconBg} p-0`}
                onClick={service.fn}
              >
                Saiba mais →
              </Button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Nossoservicos;
