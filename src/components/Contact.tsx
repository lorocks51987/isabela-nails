import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Instagram, Facebook, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Validação em tempo real para WhatsApp
    if (name === 'whatsapp') {
      // Remove caracteres não numéricos
      const cleanValue = value.replace(/\D/g, '');
      // Formata como telefone brasileiro
      const formattedValue = cleanValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    // Validações mais robustas
    if (!formData.name.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome completo.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.whatsapp.trim()) {
      toast({
        title: "WhatsApp obrigatório",
        description: "Por favor, informe seu número do WhatsApp.",
        variant: "destructive"
      });
      return;
    }
    
    // Validação do formato do WhatsApp
    const cleanWhatsApp = formData.whatsapp.replace(/\D/g, '');
    if (cleanWhatsApp.length < 10 || cleanWhatsApp.length > 11) {
      toast({
        title: "WhatsApp inválido",
        description: "Por favor, informe um número válido do WhatsApp.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simular delay para melhor UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create WhatsApp message
      const message = `Olá Isa! Eu sou a ${formData.name.trim()}. ${formData.message.trim() || 'Gostaria de agendar um horário para fazer as unhas.'}`;
      const whatsappUrl = `https://wa.me/55${cleanWhatsApp}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Redirecionando para WhatsApp! 💕",
        description: "Você será direcionada para conversar diretamente conosco.",
      });
      
      // Reset form
      setFormData({ name: "", whatsapp: "", message: "" });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant border-border/50 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-dancing font-bold text-elegant-dark text-center">
                Agende seu Horário
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-poppins font-medium text-elegant-dark">
                    Nome completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Como você gostaria de ser chamada?"
                    className="input-focus"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="font-poppins font-medium text-elegant-dark">
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    className="input-focus"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-poppins font-medium text-elegant-dark">
                    Mensagem (opcional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos que tipo de serviço você gostaria ou tire suas dúvidas..."
                    className="input-focus min-h-[100px] resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gold py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageCircle className={`mr-2 h-5 w-5 ${isSubmitting ? 'animate-spin' : ''}`} />
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            {/* Quick WhatsApp */}
            <Card className="shadow-soft border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-dancing font-bold text-elegant-dark mb-4">
                    Contato Direto
                  </h3>
                  <Button 
                    onClick={openWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white font-poppins font-semibold px-8 py-3 text-lg shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                  <p className="text-sm text-foreground/70 font-poppins mt-3">
                    Resposta rápida e atendimento personalizado
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-soft border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-dancing font-bold text-elegant-dark mb-4 text-center">
                  Redes Sociais
                </h3>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.instagram.com/ea_zabela?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank" rel="noopener noreferrer" > 
                    <Button 
                    variant="outline" 
                    size="icon"
                    className="border-pink-accent text-pink-accent hover:bg-pink-accent hover:text-card transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  </a>
                </div>
                <p className="text-sm text-foreground/70 font-poppins mt-3 text-center">
                  Acompanhe meus trabalhos e novidades!
                </p>
              </CardContent>
            </Card>

            {/* Business Info */}
            <Card className="shadow-soft border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-dancing font-bold text-elegant-dark mb-4 text-center">
                  Informações
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gold" />
                    <span className="font-poppins text-foreground/80">Atendimento domiciliar</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gold" />
                    <span className="font-poppins text-foreground/80">Aos Sábados: 9h às 18h</span>
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