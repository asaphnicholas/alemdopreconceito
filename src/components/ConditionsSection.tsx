import { Brain, Activity, Heart, Sparkles, Shield, Zap } from "lucide-react";

const conditions = [
  { icon: Zap, name: "Epilepsia refratária" },
  { icon: Activity, name: "Dor crônica" },
  { icon: Brain, name: "Transtornos neurológicos" },
  { icon: Sparkles, name: "Autismo" },
  { icon: Heart, name: "Ansiedade severa" },
  { icon: Shield, name: "Doenças degenerativas" },
];

const ConditionsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                <Heart className="w-4 h-4" />
                Uso Medicinal
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                A proposta é clara:{" "}
                <span className="text-primary">uso exclusivamente medicinal</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Mostrar como a cannabis impacta positivamente pessoas que convivem com diversas condições de saúde, 
                oferecendo uma alternativa terapêutica segura, legal e baseada em evidências científicas.
              </p>

              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                <p className="text-xl font-bold text-foreground mb-2">
                  Quando a ciência fala,
                </p>
                <p className="text-2xl font-bold text-primary">
                  o preconceito não resiste.
                </p>
              </div>
            </div>

            {/* Right Column - Conditions Grid */}
            <div className="grid grid-cols-2 gap-4">
              {conditions.map((condition, index) => (
                <div
                  key={condition.name}
                  className="group p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-elegant hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <condition.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="font-semibold text-foreground">{condition.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
