import { Target, Eye, MessageCircle, Lightbulb } from "lucide-react";

const objectives = [
  {
    icon: Eye,
    title: "Gerar Visibilidade",
    description: "Dar destaque à realidade das pesquisas e práticas envolvendo cannabis medicinal no estado.",
  },
  {
    icon: MessageCircle,
    title: "Desconstruir Preconceitos",
    description: "Combater desinformação e estigmas sociais associados ao uso medicinal da planta.",
  },
  {
    icon: Lightbulb,
    title: "Desmistificar Mitos",
    description: "Apresentar informações claras, acessíveis e fundamentadas cientificamente.",
  },
];

const ObjectivesSection = () => {
  return (
    <section id="objetivos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
              Objetivo Geral
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Informação que{" "}
              <span className="text-primary">transforma</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              O documentário tem como foco desmistificar preconceitos associados à planta, 
              destacando exclusivamente seu uso medicinal e esclarecendo informações 
              equivocadas que circulam socialmente.
            </p>

            <div className="flex items-center gap-4 p-4 bg-muted rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Foco Medicinal</h4>
                <p className="text-muted-foreground text-sm">
                  Abordagem exclusiva sobre aplicações terapêuticas comprovadas
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {objectives.map((objective, index) => (
              <div
                key={objective.title}
                className="flex gap-4 p-6 bg-card rounded-xl shadow-card border border-border hover:shadow-elegant transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center flex-shrink-0">
                  <objective.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{objective.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{objective.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
