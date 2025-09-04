import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nails.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful nail art by Isabela Nails" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-soft/90 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-dancing font-bold text-elegant-dark mb-6 animate-float">
            Realce sua beleza com
            <span className="block text-gradient-gold"> Isabela Nails</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-poppins max-w-2xl mx-auto leading-relaxed">
            Transforme suas unhas em verdadeiras obras de arte com meus serviços profissionais de alongamento e esmaltação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="btn-gold px-8 py-4 text-lg"
            >
              Agende seu horário
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-elegant-dark text-elegant-dark hover:bg-elegant-dark hover:text-card font-poppins font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              Ver trabalhos
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};