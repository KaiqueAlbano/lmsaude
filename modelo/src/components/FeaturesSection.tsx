import { CheckCircle, Clock, Shield, Smartphone, CreditCard, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Cadastre-se",
    description: "Crie sua conta em menos de 2 minutos com seus dados básicos.",
    icon: Users,
  },
  {
    number: "02",
    title: "Escolha o Serviço",
    description: "Selecione entre consulta online ou renovação de receita.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Agende seu Horário",
    description: "Escolha o melhor horário para sua consulta ou envie seus dados.",
    icon: Clock,
  },
  {
    number: "04",
    title: "Receba seu Atendimento",
    description: "Seja atendido por um médico qualificado e receba sua receita.",
    icon: CheckCircle,
  },
];

const features = [
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Disponível todos os dias, a qualquer hora.",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Seus dados protegidos com criptografia.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Fácil",
    description: "PIX, cartão de crédito ou boleto.",
  },
  {
    icon: CheckCircle,
    title: "Receita Válida",
    description: "Aceita em todas as farmácias do Brasil.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* How it Works */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Como Funciona
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simples, rápido e seguro
          </h2>
          <p className="text-lg text-muted-foreground">
            Em apenas 4 passos você tem acesso ao cuidado médico que precisa, 
            sem filas e sem burocracia.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-medical flex items-center justify-center mb-6 shadow-medical">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-3">
                  Passo {step.number}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-medical rounded-3xl p-8 md:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
