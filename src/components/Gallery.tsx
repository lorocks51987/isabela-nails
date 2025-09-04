import nails1 from "@/assets/nails-1.jpg";
import nails2 from "@/assets/nails-2.jpg";
import nails3 from "@/assets/nails-3.jpg";
import nails4 from "@/assets/nails-4.jpg";

export const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: nails1,
      alt: "Alongamento em gel com nail art rosa e dourada",
      title: "Alongamento Gel Premium"
    },
    {
      id: 2,
      src: nails2,
      alt: "Esmaltação em gel com design elegante",
      title: "Esmaltação Gel Elegante"
    },
    {
      id: 3,
      src: nails3,
      alt: "Soft gel com tons rosados suaves",
      title: "Soft Gel Delicado"
    },
    {
      id: 4,
      src: nails4,
      alt: "Esmaltação comum em tons rosa",
      title: "Esmaltação Clássica"
    }
  ];

  return (
    <section id="catalogo" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-dancing font-bold text-elegant-dark mb-4">
            Meus Trabalhos
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 font-poppins max-w-2xl mx-auto">
          Cada unha é uma tela em branco, e eu transformo cada uma em uma obra de arte. Confira alguns dos nossos trabalhos mais especiais.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-xl card-elegant animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="aspect-square relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-elegant-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-card font-poppins font-semibold text-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/70 font-poppins mb-6">
            Gostou do que viu? Entre em contato e vamos criar algo único para você!
          </p>
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-gold hover:text-gold-light font-poppins font-semibold text-lg transition-colors duration-300 border-b-2 border-gold hover:border-gold-light"
          >
            Agendar agora →
          </button>
        </div>
      </div>
    </section>
  );
};