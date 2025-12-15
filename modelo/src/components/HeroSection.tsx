import { Button } from "@/components/ui/button";
import { Calendar, FileText, Clock, Shield } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical-light via-background to-secondary/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Atendimento 100% Online e Seguro</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Sua saúde em{" "}
              <span className="text-gradient-medical">primeiro lugar</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
              Consultas médicas online e renovação de receitas de forma rápida, 
              prática e segura. Cuidamos de você onde você estiver.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Consultas Online</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium">Renovação de Receitas</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-lg bg-trust-green/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-trust-green" />
                </div>
                <span className="font-medium">Atendimento Rápido</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">100% Seguro</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-medical text-primary-foreground shadow-medical hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                Agendar Consulta
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6"
              >
                Renovar Receita
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">10k+</p>
                <p className="text-sm text-muted-foreground">Pacientes</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Médicos</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">4.9★</p>
                <p className="text-sm text-muted-foreground">Avaliação</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                src={heroDoctor}
                alt="Médica profissional sorrindo"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -left-8 top-1/4 bg-card p-4 rounded-2xl shadow-xl border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-trust-green/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-trust-green" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Consulta Agendada</p>
                  <p className="text-sm text-muted-foreground">Hoje às 14:00</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-2xl shadow-xl border border-border animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Receita Renovada</p>
                  <p className="text-sm text-muted-foreground">Disponível no app</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
