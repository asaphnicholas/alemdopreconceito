import { GraduationCap, FlaskConical, MapPin } from "lucide-react";

const ResearchSection = () => {
  return (
    <section id="pesquisa" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Pesquisa Acadêmica
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ciência e Conhecimento em{" "}
            <span className="text-gradient">Santa Catarina</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            O estado conta com forte produção acadêmica relacionada ao uso medicinal da cannabis, 
            especialmente em pesquisas desenvolvidas pela Universidade Federal de Santa Catarina (UFSC).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 text-center">
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-primary-foreground mb-3">UFSC</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Universidade Federal de Santa Catarina lidera pesquisas sobre cannabis medicinal no estado
            </p>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 text-center">
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FlaskConical className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-primary-foreground mb-3">Associações</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Organizações autorizadas produzem óleos medicinais de forma legal e regulamentada
            </p>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 text-center">
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-primary-foreground mb-3">Santa Catarina</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Estado pioneiro no desenvolvimento de práticas e políticas para cannabis medicinal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
