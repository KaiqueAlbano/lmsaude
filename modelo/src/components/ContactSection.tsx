import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Fale Conosco
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Estamos aqui para ajudar você
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tem alguma dúvida? Entre em contato com nossa equipe de atendimento. 
              Estamos disponíveis para ajudar você a cuidar da sua saúde.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-semibold text-foreground">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-semibold text-foreground">contato@medconsulta.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-trust-green/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-trust-green" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Horário de Atendimento</p>
                  <p className="font-semibold text-foreground">24 horas, 7 dias por semana</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="card-medical p-8 md:p-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Pronto para cuidar da sua saúde?
            </h3>
            <p className="text-muted-foreground mb-8">
              Agende sua consulta online ou renove sua receita agora mesmo. 
              É rápido, prático e seguro.
            </p>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-gradient-medical text-primary-foreground shadow-medical hover:opacity-90 transition-opacity"
              >
                Agendar Consulta Online
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary/5"
              >
                Renovar Minha Receita
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Mais de <span className="font-bold text-primary">10.000 pacientes</span> já 
                confiam na MedConsulta para cuidar da sua saúde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
