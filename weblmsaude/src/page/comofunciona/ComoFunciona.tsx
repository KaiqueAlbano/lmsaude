import {
  CheckCircle,
  Clock,
  Shield,
  Smartphone,
  CreditCard,
} from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Comece seu atendimento",
    description:
      "Atendimento automático pelo WhatsApp para tirar dúvidas iniciais com rapidez e praticidade.",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Agende seu Horário",
    description:
      "Agende seu horário com flexibilidade, inclusive à noite e fins de semana",
    icon: Clock,
  },
  {
    number: "03",
    title: "Receba seu Atendimento",
    description: "Preencha seus dados e comece sua consulta.",
    icon: CheckCircle,
  },
];
const features = [
  {
    icon: Clock,
    title: "Atendimento",
    // description: "Atendimento de segunda a sexta e fins de semana.",
    description: "Atendimento disponível 24 horas por dia, 7 dias por semana.",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Seus dados protegidos com criptografia.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Fácil",
    description: "PIX. Emitimos recibo para reembolso.",
  },
  {
    icon: CheckCircle,
    title: "Receita Válida",
    description: "Aceita em todas as farmácias do Brasil.",
  },
];
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const ComoFunciona = () => {
  return (
    <section
      id="comofunciona"
      className="comofunciona sm:scroll-mt-30 scroll-mt-70 container mx-auto px-4 sm:px-15 mt-35"
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
            Como Funciona
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
            Simples, rápido e seguro
          </h2>
          <p className="text-lg text-blue-dark/80">
            Em apenas 3 passos você tem acesso ao cuidado médico que precisa,
            sem filas e sem burocracia.
          </p>
        </motion.div>
      </div>
      {/* Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 mt-10">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.6,
                  ease: "easeOut",
                  delay: index * 1.6,
                }}
                className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-one"
              />
            )}
            <div className="relative z-10 text-center">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} //Não repete
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * (isMobile ? 0.15 : 1.25), //  mobile mais rápido
                }}
              >
                <div
                  className={`relative w-24 h-24 mx-auto rounded-full bg-gradient-one flex items-center justify-center mb-6 shadow-medical`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * (isMobile ? 0.15 : 1.25), //  mobile mais rápido
                }}
              >
                <span className="inline-block px-3 py-1 rounded-full text-blue-dark text-sm font-bold mb-3">
                  Passo {step.number}
                </span>
                <h3 className="font-display text-xl font-bold text-blue-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-dark/80">{step.description}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      {/* Features Grid */}
      <motion.div
        initial={{
          clipPath: "inset(0 100% 0 0)", // tudo escondido à direita
        }}
        whileInView={{
          clipPath: "inset(0 0% 0 0)", // totalmente visível
        }}
        transition={{
          duration: isMobile ? 1 : 3.6, //  mobile mais rápido
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-one rounded-3xl p-8 md:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent-2 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <div className="flex justify-center">
                  <p className="text-white/80 text-sm max-w-[300px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ComoFunciona;
