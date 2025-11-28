import { Target, Eye, MessageSquare, Heart, Leaf } from "lucide-react";

const ObjectiveSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              Nosso Objetivo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 max-w-3xl mx-auto leading-tight">
              Gerar visibilidade para a{" "}
              <span className="text-primary">realidade</span> das pesquisas e práticas
            </h2>
          </div>

          {/* Main Content Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border shadow-elegant">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                Promovendo conscientização, educação e empatia, fortalecendo o debate público e contribuindo 
                para uma sociedade mais informada e menos preconceituosa.
              </p>

              {/* Pillars */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Conscientização</h3>
                  <p className="text-sm text-muted-foreground">Despertar para a realidade científica</p>
                </div>

                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Educação</h3>
                  <p className="text-sm text-muted-foreground">Informação clara e acessível</p>
                </div>

                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Empatia</h3>
                  <p className="text-sm text-muted-foreground">Compreensão e humanidade</p>
                </div>
              </div>

              {/* Bottom Quote */}
              <div className="mt-10 pt-10 border-t border-border text-center">
                <Leaf className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  Este é um convite à reflexão.
                </p>
                <p className="text-xl md:text-2xl font-bold text-primary mt-2">
                  E também à transformação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
