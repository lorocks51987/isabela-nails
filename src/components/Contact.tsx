import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  const openWhatsApp = () => {
    const whatsappUrl = "https://wa.me/5514991125150?text=Olá! Gostaria de agendar um horário na Isabela Nails 💅";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-pink">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-dancing font-bold text-elegant-dark mb-4">
            Vamos conversar?
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 font-poppins max-w-2xl mx-auto">
            Pronta para transformar suas unhas?  <br /> Entre em contato e vamos criar algo incrível juntas!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            {/* WhatsApp */}
            <Card className="shadow-soft border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-dancing font-bold text-elegant-dark mb-4">
                  WhatsApp
                </h3>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white font-poppins font-semibold px-8 py-3 text-lg shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Horário
                </Button>
                <p className="text-sm text-foreground/70 font-poppins mt-3">
                  Resposta rápida e atendimento personalizado
                </p>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="shadow-soft border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-dancing font-bold text-elegant-dark mb-4">
                  Instagram
                </h3>
                <a href="https://www.instagram.com/ea_zabela?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank" rel="noopener noreferrer"> 
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-pink-accent text-pink-accent hover:bg-pink-accent hover:text-card transition-all duration-300 w-full"
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Ver Trabalhos
                  </Button>
                </a>
                <p className="text-sm text-foreground/70 font-poppins mt-3">
                  Acompanhe meus trabalhos e novidades!
                </p>
              </CardContent>
            </Card>

            {/* Informações */}
            <Card className="shadow-soft border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-dancing font-bold text-elegant-dark mb-4">
                  Informações
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="h-5 w-5 text-gold" />
                    <span className="font-poppins text-foreground/80">Atendimento domiciliar</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Clock className="h-5 w-5 text-gold" />
                    <span className="font-poppins text-foreground/80">Sábados: 9h às 18h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};