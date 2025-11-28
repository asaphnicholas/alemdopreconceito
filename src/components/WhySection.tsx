import { CheckCircle, GraduationCap, Leaf } from "lucide-react";

const reasons = [
  "Desmistificar preconceitos históricos",
  "Combater informações falsas",
  "Dar voz a pacientes e especialistas",
  "Mostrar o que a ciência já comprova",
  "Ampliar o debate de forma ética e responsável",
];

const WhySection = () => {
  return (
    <section id="porque" className="py-24 md:py-32 bg-soft-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              <Leaf className="w-4 h-4" />
              A Importância
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Por que este documentário{" "}
              <span className="text-primary">precisa existir?</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A cannabis medicinal vem crescendo no Brasil e em Santa Catarina, com associações 
                legalmente autorizadas produzindo óleos medicinais que já beneficiam centenas de famílias. 
                Ainda assim, o preconceito, a desinformação e o medo continuam sendo barreiras gigantes.
              </p>
              <p className="text-lg text-foreground font-medium">
                Este projeto nasce da necessidade urgente de:
              </p>

              {/* Reasons List */}
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <p className="text-foreground font-medium">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Highlight Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-card rounded-3xl p-8 md:p-10 border border-border shadow-elegant">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Destaque para Santa Catarina
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Santa Catarina se destaca nesse cenário, principalmente pelas pesquisas desenvolvidas na 
                  <strong className="text-primary"> UFSC</strong>, que reforçam o papel do estado na produção 
                  de conhecimento científico sobre o uso terapêutico da cannabis.
                </p>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                  <Leaf className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Associações autorizadas já beneficiam centenas de famílias
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
