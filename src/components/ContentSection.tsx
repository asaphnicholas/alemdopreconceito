import { FlaskConical, Stethoscope, Users, Building2, BookOpen, Leaf } from "lucide-react";

const contents = [
  {
    icon: FlaskConical,
    title: "Pesquisas científicas",
    description: "Evidências reais e estudos comprovados",
  },
  {
    icon: Stethoscope,
    title: "Profissionais da saúde",
    description: "Depoimentos de médicos e especialistas",
  },
  {
    icon: Users,
    title: "Histórias de pacientes",
    description: "Vidas transformadas pelo tratamento",
  },
  {
    icon: Building2,
    title: "Associações em SC",
    description: "Atuação de entidades autorizadas",
  },
  {
    icon: BookOpen,
    title: "Mitos e verdades",
    description: "Esclarecimento sobre a cannabis medicinal",
  },
];

const ContentSection = () => {
  return (
    <section className="py-24 md:py-32 bg-dark-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <Leaf className="w-4 h-4" />
              Conteúdo
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              O que você vai ver em{" "}
              <span className="text-gradient">"Além do Preconceito"</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Tudo apresentado de forma didática, acessível e extremamente humana.
            </p>
          </div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contents.map((content, index) => (
              <div
                key={content.title}
                className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <content.icon className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">
                    {content.title}
                  </h3>
                  <p className="text-primary-foreground/60">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Special Card */}
            <div className="group relative bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm rounded-2xl p-8 border border-secondary/30 md:col-span-2 lg:col-span-1">
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 mx-auto shadow-glow">
                  <Leaf className="w-7 h-7 text-secondary-foreground" />
                </div>
                <p className="text-primary-foreground/90 font-medium text-lg">
                  Este projeto não é sobre apologia.
                </p>
                <p className="text-secondary font-bold text-xl mt-2">
                  É sobre saúde, qualidade de vida e informação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
