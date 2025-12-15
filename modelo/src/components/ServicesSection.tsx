import { Video, FileText, Pill, HeartPulse, Stethoscope, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Video,
    title: "Consulta por Vídeo",
    description: "Consulte com médicos especialistas através de videochamada, sem sair de casa.",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Renovação de Receitas",
    description: "Renove suas receitas médicas de forma rápida e segura, com validade legal.",
    color: "accent",
  },
  {
    icon: Pill,
    title: "Prescrição Digital",
    description: "Receba sua receita digital diretamente no celular, aceita em todas as farmácias.",
    color: "trust-green",
  },
  {
    icon: HeartPulse,
    title: "Acompanhamento",
    description: "Monitoramento contínuo da sua saúde com nossos profissionais qualificados.",
    color: "primary",
  },
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description: "Atendimento médico geral para cuidar da sua saúde de forma completa.",
    color: "accent",
  },
  {
    icon: ClipboardList,
    title: "Atestados Médicos",
    description: "Emissão de atestados médicos com validade em todo território nacional.",
    color: "trust-green",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; iconBg: string }> = {
    primary: {
      bg: "bg-primary/5",
      text: "text-primary",
      iconBg: "bg-primary/10",
    },
    accent: {
      bg: "bg-accent/5",
      text: "text-accent",
      iconBg: "bg-accent/10",
    },
    "trust-green": {
      bg: "bg-trust-green/5",
      text: "text-trust-green",
      iconBg: "bg-trust-green/10",
    },
  };
  return colors[color] || colors.primary;
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cuidado médico completo ao seu alcance
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma variedade de serviços médicos online para atender todas 
            as suas necessidades de saúde com praticidade e segurança.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className="card-medical p-8 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Button variant="ghost" className={`${colors.text} hover:${colors.bg} p-0`}>
                  Saiba mais →
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-medical text-primary-foreground shadow-medical hover:opacity-90 transition-opacity"
          >
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
