import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Quer saber mais?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Entre em contato para mais informações sobre o documentário, 
            entrevistas ou colaborações.
          </p>

          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground">contato@alemdopreconceito.com.br</p>
              </div>
            </div>

            <Button variant="default" size="lg" className="w-full sm:w-auto">
              <Send className="h-4 w-4" />
              Enviar Mensagem
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
