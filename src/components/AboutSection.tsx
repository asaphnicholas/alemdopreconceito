import { BookOpen, Heart, Scale, Users } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Baseado em Ciência",
    description: "Pesquisas desenvolvidas pela UFSC e outras instituições reconhecidas nacionalmente.",
  },
  {
    icon: Heart,
    title: "Foco na Qualidade de Vida",
    description: "Tratamentos eficazes para diversas doenças com melhora significativa na vida dos pacientes.",
  },
  {
    icon: Scale,
    title: "Legalidade e Regulamentação",
    description: "Associações autorizadas em SC produzem óleos medicinais de forma legal e controlada.",
  },
  {
    icon: Users,
    title: "Impacto Social",
    description: "Desmistificando preconceitos e esclarecendo informações equivocadas na sociedade.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Justificativa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Por que este tema é importante?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O tema foi escolhido devido ao seu crescimento no cenário nacional e estadual, 
            especialmente em Santa Catarina, onde existem associações autorizadas a produzir 
            óleos medicinais legalmente. O assunto possui grande relevância social, cultural 
            e científica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
