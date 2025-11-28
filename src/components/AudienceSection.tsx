import { GraduationCap, Stethoscope, Users, Search, Heart, CheckCircle } from "lucide-react";

const audiences = [
  { icon: GraduationCap, text: "Estudantes e pesquisadores" },
  { icon: Stethoscope, text: "Profissionais da saúde" },
  { icon: Users, text: "Familiares de pacientes" },
  { icon: Search, text: "Pessoas em busca de tratamentos alternativos" },
  { icon: Heart, text: "Todos que desejam informação real e consciente" },
];

const AudienceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            Público
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Para quem é este{" "}
            <span className="text-primary">documentário?</span>
          </h2>

          {/* Audience List */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border shadow-card hover:shadow-elegant transition-all duration-300 text-left"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground">{audience.text}</p>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20" />
            <div className="relative p-8 md:p-10 bg-card rounded-2xl border border-border shadow-elegant">
              <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
              <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Se você acredita que informação salva vidas,
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary">
                este documentário é para você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
