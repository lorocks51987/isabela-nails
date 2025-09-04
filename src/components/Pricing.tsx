import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export const Pricing = () => {
  const services = [
    {
      category: "Alongamentos",
      icon: <Sparkles className="h-6 w-6 text-gold" />,
      items: [
        {
          name: "Alongamento Gel na Tips",
          price: "R$ 80,00",
          description: "Alongamento resistente com gel sobre tips, ideal para um look mais duradouro",
          popular: true
        },
        {
          name: "Alongamento Fibra de Vidro",
          price: "R$ 80,00",
          description: "Alongamento com fios de fibra de vidro, proporcionando naturalidade, resistência e leveza",
          popular: false,
          novidade: true
        },
        {
          name: "Alongamento Soft Gel",
          price: "R$ 60,00",
          description: "Alongamento natural e flexível, perfeito para o dia a dia",
          popular: false
        }
      ]
    },
    {
      category: "Esmaltação",
      icon: <Sparkles className="h-6 w-6 text-pink-accent" />,
      items: [
        {
          name: "Esmaltação em Gel",
          price: "R$ 40,00",
          description: "Esmaltação duradoura com acabamento profissional",
          popular: true
        },
        {
          name: "Esmaltação Fibra de Vidro",
          price: "R$ 50,00",
          description: "Finalização com esmalte sobre alongamento em fibra de vidro, garantindo resistência e elegância",
          popular: false,
          novidade:true
        },
        {
          name: "Esmaltação Comum",
          price: "R$ 25,00",
          description: "Esmaltação tradicional com esmaltes de alta qualidade",
          popular: false
        }
      ]
    }
  ];

  return (
    <section id="valores" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-dancing font-bold text-elegant-dark mb-4">
            Tabela de Serviços e Valores
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 font-poppins max-w-2xl mx-auto">
            Valores justos para serviços de qualidade. Investir em suas unhas é investir em sua autoestima.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="animate-fade-in"
              style={{animationDelay: `${categoryIndex * 0.3}s`}}
            >
              <Card className="h-full card-elegant border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-2xl font-dancing font-bold text-elegant-dark">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {category.items.map((service, serviceIndex) => (
                    <div 
                      key={service.name}
                      className="relative p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                    >
                      {service.popular && (
                        <Badge className="absolute -top-2 left-4 bg-gold text-elegant-dark font-poppins font-semibold">
                          Mais Popular
                        </Badge>
                      )}
                      {service.novidade && (
                        <Badge className="absolute -top-2 left-4 bg-gold text-elegant-dark font-poppins font-semibold">
                          Novidade
                        </Badge>
                      )}
                      
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-poppins font-semibold text-elegant-dark">
                          {service.name}
                        </h3>
                        <span className="text-2xl font-poppins font-bold text-gold">
                          {service.price}
                        </span>
                      </div>
                      
                      <p className="text-foreground/70 font-poppins text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-gradient-pink rounded-xl shadow-soft">
          <p className="text-elegant-dark font-poppins font-medium mb-2">
            💝 Primeira vez com a gente?
          </p>
          <p className="text-elegant-dark/80 font-poppins text-sm">
            Entre em contato para conhecer nossos pacotes especiais para novos clientes!
          </p>
        </div>
      </div>
    </section>
  );
};